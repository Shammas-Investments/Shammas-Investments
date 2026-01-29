'use client';

import { useState, useCallback } from 'react';

export interface FormErrors {
  [key: string]: string | undefined;
}

export interface FormStatus {
  type: 'idle' | 'success' | 'error';
  message: string;
}

export interface UseFormStateOptions<T> {
  initialValues: T;
  validate?: (values: T) => FormErrors;
  onSubmit: (values: T) => Promise<{ success: boolean; message?: string; error?: string }>;
}

export interface UseFormStateReturn<T> {
  values: T;
  errors: FormErrors;
  status: FormStatus;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  setFieldValue: (name: keyof T, value: string) => void;
  setFieldError: (name: keyof T, error: string | undefined) => void;
  clearErrors: () => void;
  reset: () => void;
}

/**
 * Custom hook for form state management with validation
 */
export function useFormState<T extends Record<string, string>>({
  initialValues,
  validate,
  onSubmit,
}: UseFormStateOptions<T>): UseFormStateReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback(
    (name: string, value: string) => {
      if (!validate) return;
      const allErrors = validate({ ...values, [name]: value } as T);
      setErrors((prev) => ({
        ...prev,
        [name]: allErrors[name],
      }));
    },
    [validate, values]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));

      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }

      // Clear status message when user modifies form
      if (status.type !== 'idle') {
        setStatus({ type: 'idle', message: '' });
      }
    },
    [errors, status.type]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      validateField(name, value);
    },
    [validateField]
  );

  const setFieldValue = useCallback((name: keyof T, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const setFieldError = useCallback((name: keyof T, error: string | undefined) => {
    setErrors((prev) => ({ ...prev, [name as string]: error }));
  }, []);

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setStatus({ type: 'idle', message: '' });
  }, [initialValues]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      setStatus({ type: 'idle', message: '' });

      // Validate all fields
      if (validate) {
        const validationErrors = validate(values);
        setErrors(validationErrors);

        // Mark all fields as touched
        const allTouched = Object.keys(values).reduce(
          (acc, key) => ({ ...acc, [key]: true }),
          {}
        );
        setTouched(allTouched);

        // Check if there are any errors
        const hasErrors = Object.values(validationErrors).some((error) => error);
        if (hasErrors) {
          setIsSubmitting(false);
          return;
        }
      }

      try {
        const result = await onSubmit(values);

        if (result.success) {
          setStatus({
            type: 'success',
            message: result.message || 'Submitted successfully!',
          });
          reset();
        } else {
          setStatus({
            type: 'error',
            message: result.error || 'Something went wrong. Please try again.',
          });
        }
      } catch {
        setStatus({
          type: 'error',
          message: 'An error occurred. Please try again.',
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [validate, values, onSubmit, reset]
  );

  return {
    values,
    errors,
    status,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldError,
    clearErrors,
    reset,
  };
}

export default useFormState;
