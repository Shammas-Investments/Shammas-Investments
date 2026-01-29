import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

const CSRF_TOKEN_NAME = 'csrf_token';
const CSRF_HEADER_NAME = 'x-csrf-token';

/**
 * Generate a cryptographically secure random token
 */
function generateToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Get or create CSRF token from cookies (server-side)
 */
export async function getCSRFToken(): Promise<string> {
  const cookieStore = await cookies();
  let token = cookieStore.get(CSRF_TOKEN_NAME)?.value;

  if (!token) {
    token = generateToken();
    // Note: Cookie will be set via response headers
  }

  return token;
}

/**
 * Validate CSRF token from request
 * @param request - The incoming request
 * @returns true if token is valid, false otherwise
 */
export async function validateCSRFToken(request: NextRequest): Promise<boolean> {
  // Get token from header
  const headerToken = request.headers.get(CSRF_HEADER_NAME);

  // Get token from cookie
  const cookieToken = request.cookies.get(CSRF_TOKEN_NAME)?.value;

  // Both must exist and match
  if (!headerToken || !cookieToken) {
    return false;
  }

  // Constant-time comparison to prevent timing attacks
  return timingSafeEqual(headerToken, cookieToken);
}

/**
 * Timing-safe string comparison
 */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  return result === 0;
}

/**
 * Create response headers with CSRF cookie
 */
export function createCSRFCookieHeader(token: string): { 'Set-Cookie': string } {
  const isProduction = process.env.NODE_ENV === 'production';
  const cookieOptions = [
    `${CSRF_TOKEN_NAME}=${token}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Strict',
    `Max-Age=${60 * 60 * 24}`, // 24 hours
    isProduction ? 'Secure' : '',
  ]
    .filter(Boolean)
    .join('; ');

  return { 'Set-Cookie': cookieOptions };
}

export { CSRF_TOKEN_NAME, CSRF_HEADER_NAME };
