import { NextResponse, NextRequest } from 'next/server';

// Paths commonly targeted by automated scanners/bots
const BLOCKED_PATHS = [
  '/.env',
  '/wp-admin',
  '/wp-login',
  '/wp-content',
  '/xmlrpc.php',
  '/administrator',
  '/phpmyadmin',
  '/.git',
  '/.svn',
  '/config.php',
  '/debug',
  '/cgi-bin',
  '/vendor',
  '/eval-stdin.php',
];

// Suspicious user agents commonly used by malicious bots
const BLOCKED_USER_AGENTS = [
  'sqlmap',
  'nikto',
  'masscan',
  'nmap',
  'dirbuster',
  'gobuster',
  'wpscan',
  'nuclei',
  'zgrab',
  'httpx',
];

export function proxy(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';

  // Block known attack paths with 404
  if (BLOCKED_PATHS.some((path) => pathname.toLowerCase().startsWith(path))) {
    return new NextResponse(null, { status: 404 });
  }

  // Block suspicious user agents
  if (BLOCKED_USER_AGENTS.some((agent) => userAgent.includes(agent))) {
    return new NextResponse(null, { status: 403 });
  }

  // Block excessively long URLs (potential buffer overflow attempts)
  if (pathname.length > 2048) {
    return new NextResponse(null, { status: 414 });
  }

  // Generate cryptographic nonce for CSP
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // Pass nonce to Next.js via request headers so it can apply to internal scripts
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  const isDevelopment = process.env.NODE_ENV === 'development';

  // Build CSP with nonce + strict-dynamic
  const csp = [
    "default-src 'self'",
    `script-src 'nonce-${nonce}' 'strict-dynamic' 'unsafe-inline' ${isDevelopment ? "'unsafe-eval'" : ''} https:`,
    "style-src 'self' 'unsafe-inline' https://*.tawk.to https://assets.calendly.com",
    "img-src 'self' data: https: blob:",
    "font-src 'self' data: https://*.tawk.to",
    "connect-src 'self' https://vitals.vercel-insights.com https://api.web3forms.com https://*.list-manage.com https://*.mailchimp.com https://calendly.com https://*.calendly.com https://*.tawk.to wss://*.tawk.to https://www.google-analytics.com https://*.trustpilot.com https://api.brevo.com https://*.clarity.ms https://*.googlesyndication.com https://*.googleadservices.com https://*.doubleclick.net https://*.sentry.io https://*.ingest.sentry.io https://*.adtrafficquality.google https://*.google.com",
    "frame-src 'self' https://calendly.com https://*.calendly.com https://*.tawk.to https://*.trustpilot.com https://*.googlesyndication.com https://*.doubleclick.net https://googleads.g.doubleclick.net https://*.google.com https://*.adtrafficquality.google",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join('; ');

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Set CSP header with nonce (dynamic per request)
  response.headers.set('Content-Security-Policy', csp);

  // Additional security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-Download-Options', 'noopen');
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none');

  // Unique request ID for observability and debugging
  response.headers.set('X-Request-Id', crypto.randomUUID());

  // Prevent caching of API responses
  if (pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
  }

  // Prevent search engines from indexing if in development
  if (process.env.NODE_ENV !== 'production') {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

// Apply proxy to all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files (images, fonts, etc.)
     */
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot)).*)',
  ],
};
