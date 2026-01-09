import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();

  // Additional security headers (augments next.config.js headers)
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // Security headers for extra protection
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-Download-Options', 'noopen');
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none');

  // Prevent search engines from indexing if in development
  if (process.env.NODE_ENV !== 'production') {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

// Apply middleware to all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
