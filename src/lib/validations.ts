/**
 * Reusable validation functions for form inputs
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s+\-().]{7,20}$/;

/**
 * Validates email format and length
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  return EMAIL_REGEX.test(trimmed) && trimmed.length <= 255;
}

/**
 * Validates that a required field has a value
 */
export function validateRequired(value: string | undefined | null): boolean {
  return value !== undefined && value !== null && value.trim().length > 0;
}

/**
 * Validates phone number format (optional field - empty is valid)
 */
export function validatePhone(phone: string | undefined | null): boolean {
  if (!phone || phone.trim() === '') return true; // Optional field
  return PHONE_REGEX.test(phone.trim());
}

/**
 * Validates string length
 */
export function validateLength(
  value: string,
  minLength: number = 0,
  maxLength: number = Infinity
): boolean {
  if (!value || typeof value !== 'string') return minLength === 0;
  const length = value.trim().length;
  return length >= minLength && length <= maxLength;
}

/**
 * Validates name field (letters, spaces, hyphens, apostrophes allowed)
 */
export function validateName(name: string): boolean {
  if (!name || typeof name !== 'string') return false;
  const trimmed = name.trim();
  return trimmed.length >= 2 && trimmed.length <= 100;
}

/**
 * Form field validation result
 */
export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validate contact form fields
 */
export function validateContactForm(data: {
  name?: string;
  email?: string;
  message?: string;
}): ValidationResult {
  if (!validateRequired(data.name)) {
    return { isValid: false, error: 'Name is required.' };
  }
  if (!validateName(data.name!)) {
    return { isValid: false, error: 'Please enter a valid name.' };
  }
  if (!validateRequired(data.email)) {
    return { isValid: false, error: 'Email is required.' };
  }
  if (!validateEmail(data.email!)) {
    return { isValid: false, error: 'Please enter a valid email address.' };
  }
  if (!validateRequired(data.message)) {
    return { isValid: false, error: 'Message is required.' };
  }
  if (!validateLength(data.message!, 10, 5000)) {
    return { isValid: false, error: 'Message must be between 10 and 5000 characters.' };
  }
  return { isValid: true };
}

/**
 * Validate quote form fields
 */
export function validateQuoteForm(data: {
  name?: string;
  email?: string;
  summary?: string;
}): ValidationResult {
  if (!validateRequired(data.name)) {
    return { isValid: false, error: 'Name is required.' };
  }
  if (!validateName(data.name!)) {
    return { isValid: false, error: 'Please enter a valid name.' };
  }
  if (!validateRequired(data.email)) {
    return { isValid: false, error: 'Email is required.' };
  }
  if (!validateEmail(data.email!)) {
    return { isValid: false, error: 'Please enter a valid email address.' };
  }
  if (!validateRequired(data.summary)) {
    return { isValid: false, error: 'Summary is required.' };
  }
  return { isValid: true };
}

/**
 * Validate newsletter subscription
 */
export function validateNewsletterForm(data: {
  email?: string;
}): ValidationResult {
  if (!validateRequired(data.email)) {
    return { isValid: false, error: 'Email is required.' };
  }
  if (!validateEmail(data.email!)) {
    return { isValid: false, error: 'Please enter a valid email address.' };
  }
  return { isValid: true };
}
