/**
 * Standardized API response types for consistent responses across all endpoints
 */

export type ApiSuccessResponse<T = void> = {
  success: true;
  data?: T;
  message?: string;
};

export type ApiErrorResponse = {
  success: false;
  error: string;
  code?: string;
};

export type ApiResponse<T = void> = ApiSuccessResponse<T> | ApiErrorResponse;

/**
 * Common API request body types
 */
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  budget?: string;
  botcheck?: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  summary: string;
}

/**
 * Rate limit configuration
 */
export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

/**
 * Rate limit entry stored in memory
 */
export interface RateLimitEntry {
  count: number;
  resetTime: number;
}
