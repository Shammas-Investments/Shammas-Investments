import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse, RateLimitConfig, RateLimitEntry } from '@/types/api';

/**
 * Default rate limit configuration
 */
const DEFAULT_RATE_LIMIT: RateLimitConfig = {
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 5,
};

/**
 * In-memory rate limit storage (resets on deployment)
 */
const rateLimitStore = new Map<string, RateLimitEntry>();

/**
 * Rate limiter class for API endpoints
 */
export class RateLimiter {
  private config: RateLimitConfig;
  private store: Map<string, RateLimitEntry>;

  constructor(config: Partial<RateLimitConfig> = {}) {
    this.config = { ...DEFAULT_RATE_LIMIT, ...config };
    this.store = rateLimitStore;
  }

  /**
   * Check if request should be rate limited
   * @returns true if request is allowed, false if rate limited
   */
  check(identifier: string): boolean {
    const now = Date.now();
    const entry = this.store.get(identifier);

    if (!entry || now > entry.resetTime) {
      this.store.set(identifier, {
        count: 1,
        resetTime: now + this.config.windowMs,
      });
      return true;
    }

    if (entry.count >= this.config.maxRequests) {
      return false;
    }

    entry.count++;
    return true;
  }

  /**
   * Get remaining requests for an identifier
   */
  getRemaining(identifier: string): number {
    const entry = this.store.get(identifier);
    if (!entry || Date.now() > entry.resetTime) {
      return this.config.maxRequests;
    }
    return Math.max(0, this.config.maxRequests - entry.count);
  }
}

/**
 * Get client IP address from request headers
 */
export function getClientIP(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

/**
 * Sanitize input string by trimming and limiting length
 */
export function sanitizeInput(input: string, maxLength: number = 1000): string {
  if (!input || typeof input !== 'string') return '';
  return input.trim().slice(0, maxLength);
}

/**
 * Escape HTML entities to prevent XSS in email templates
 */
export function escapeHtml(input: string): string {
  if (!input || typeof input !== 'string') return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Sanitize and escape input for safe HTML rendering
 */
export function sanitizeForHtml(input: string, maxLength: number = 1000): string {
  return escapeHtml(sanitizeInput(input, maxLength));
}

/**
 * Create a standardized success response
 */
export function successResponse<T>(
  data?: T,
  message?: string,
  status: number = 200
): NextResponse<ApiResponse<T>> {
  const response: ApiResponse<T> = {
    success: true,
    ...(data !== undefined && { data }),
    ...(message && { message }),
  };
  return NextResponse.json(response, { status });
}

/**
 * Create a standardized error response
 */
export function errorResponse(
  error: string,
  status: number = 400,
  code?: string
): NextResponse<ApiResponse<never>> {
  const response: ApiResponse<never> = {
    success: false,
    error,
    ...(code && { code }),
  };
  return NextResponse.json(response, { status });
}

/**
 * Create a rate limit exceeded response
 */
export function rateLimitResponse(): NextResponse<ApiResponse<never>> {
  return errorResponse(
    'Too many requests. Please try again later.',
    429,
    'RATE_LIMIT_EXCEEDED'
  );
}

/**
 * Create a server error response
 */
export function serverErrorResponse(
  message: string = 'An error occurred. Please try again.'
): NextResponse<ApiResponse<never>> {
  return errorResponse(message, 500, 'SERVER_ERROR');
}

/**
 * Create a configuration error response
 */
export function configErrorResponse(): NextResponse<ApiResponse<never>> {
  return errorResponse(
    'Service configuration error. Please contact support.',
    500,
    'CONFIG_ERROR'
  );
}

/**
 * Check for honeypot field (spam protection)
 */
export function isSpamSubmission(botcheck: string | undefined | null): boolean {
  return Boolean(botcheck && botcheck.trim() !== '');
}

/**
 * Spam detected response
 */
export function spamResponse(): NextResponse<ApiResponse<never>> {
  return errorResponse('Spam detected.', 400, 'SPAM_DETECTED');
}

/**
 * Log error with context (for server-side logging)
 * In production, errors are sent to Sentry; console is dev-only
 */
export function logError(context: string, error: unknown): void {
  if (process.env.NODE_ENV === 'development') {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`[API Error] ${context}: ${errorMessage}`);
  }
}
