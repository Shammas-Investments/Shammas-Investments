"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import Button from "./Button";
import SuccessAnimation from "./SuccessAnimation";
import LoadingSpinner from "./LoadingSpinner";
import {
  validateEmail,
  validateRequired,
  validateName,
  validateLength,
} from "@/lib/validations";
import { trackContactFormSubmit } from "@/lib/analytics";
import { useCSRF } from "@/hooks/useCSRF";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budgetRange?: string;
  timeline?: string;
  message?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const ContactForm = () => {
  const { csrfFetch, isReady: csrfReady } = useCSRF();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budgetRange: "",
    timeline: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validateField = useCallback(
    (name: keyof FormData, value: string): string | undefined => {
      switch (name) {
        case "name":
          if (!validateRequired(value)) return "Name is required.";
          if (!validateName(value))
            return "Please enter a valid name (2-100 characters).";
          return undefined;
        case "email":
          if (!validateRequired(value)) return "Email is required.";
          if (!validateEmail(value))
            return "Please enter a valid email address.";
          return undefined;
        case "message":
          if (!validateRequired(value)) return "Message is required.";
          if (!validateLength(value, 10, 5000))
            return "Message must be between 10 and 5000 characters.";
          return undefined;
        default:
          return undefined;
      }
    },
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }

    // Clear error status when user modifies form
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof FormData, value);
    if (error) {
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await csrfFetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          budgetRange: formData.budgetRange,
          timeline: formData.timeline,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        trackContactFormSubmit(true);
      } else {
        setStatus("error");
        setErrorMessage(
          result.error || "Something went wrong. Please try again."
        );
        trackContactFormSubmit(false);
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Unable to send message. Please try again or email us directly at info@shammasdevelopment.io"
      );
      trackContactFormSubmit(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      budgetRange: "",
      timeline: "",
      message: "",
    });
    setErrors({});
    setStatus("idle");
    setErrorMessage("");
  };

  // Show success animation after form submission
  if (status === "success") {
    return (
      <FadeIn>
        <SuccessAnimation
          title="Message Sent!"
          message="Thank you for reaching out. We'll get back to you within 24-48 hours. Check your inbox for a confirmation email."
          onReset={handleReset}
          resetLabel="Send another message"
        />
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <form onSubmit={handleSubmit} noValidate>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Request a Build Plan
        </h2>

        {/* Error message */}
        <AnimatePresence>
          {status === "error" && errorMessage && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              role="alert"
              aria-live="polite"
              className="mt-4 overflow-hidden rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800"
            >
              {errorMessage}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
            required
            isFirst
            disabled={status === "submitting"}
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            required
            disabled={status === "submitting"}
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            disabled={status === "submitting"}
          />
          <TextInput
            label="Project Type"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            disabled={status === "submitting"}
          />
          <TextInput
            label="Budget Range"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            disabled={status === "submitting"}
          />
          <TextInput
            label="Timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            disabled={status === "submitting"}
          />
          <TextInput
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.message}
            required
            isLast
            disabled={status === "submitting"}
          />
        </div>

        {/* Honeypot Spam Protection - hidden from users, catches bots */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
          tabIndex={-1}
          aria-hidden="true"
        />

        <Button
          type="submit"
          className="mt-10"
          disabled={status === "submitting" || !csrfReady}
        >
          {status === "submitting" ? (
            <span className="flex items-center gap-2">
              <LoadingSpinner size="sm" />
              Sending...
            </span>
          ) : (
            "Submit Build Plan Request"
          )}
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
