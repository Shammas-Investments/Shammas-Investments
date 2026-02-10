# Shammas Development - Internal Tools, AI Automation & MVP Development

A modern, production-grade website for Shammas Development LLC, built with Next.js 16, TypeScript (strict mode), Tailwind CSS, and Framer Motion. Achieves A+ across SEO, Security, Accessibility, and Performance.

![Shammas Development](./src/appLogo.png)

## About Shammas Development

Shammas Development LLC builds custom software for teams that have outgrown spreadsheets and manual workflows. Clear scope, weekly demos, production-grade systems.

- **Internal Tools Development** - Custom dashboards, admin panels, and workflow tools starting at $5K
- **AI Automation** - LLM-powered workflows for document processing, classification, and reporting starting at $10K
- **MVP & SaaS Development** - Full-stack products with auth, payments, and scalable architecture starting at $20K
- **Cloud & DevOps** - AWS, Google Cloud, and Azure infrastructure, CI/CD pipelines, and container orchestration

**Founded by:** Hassan Naeem (Founder & CTO) and Joe Shammas (Co-Founder & CEO)

## Features

### Technical Stack
- **Next.js 16.1.6** - Latest version with Turbopack and App Router
- **React 19** - Modern React with latest features
- **TypeScript Strict Mode** - Full type safety with strict compiler options
- **Tailwind CSS 3.4** - Utility-first CSS with custom configurations
- **Framer Motion** - Smooth animations and transitions
- **Sharp** - Optimized image processing

### Architecture & Code Quality
- **Shared Utilities Library** - Centralized API helpers, validations, and types
- **Custom Hooks** - Reusable form state management
- **Standardized API Responses** - Consistent response format across all endpoints
- **Rate Limiting** - In-memory rate limiting for API protection
- **Input Sanitization** - Server-side validation and sanitization
- **Error Boundary** - Graceful error handling with fallback UI

### Security (A+ Grade)
- **Content Security Policy** - Comprehensive CSP with explicit source allowlisting via proxy.ts
- **Security Headers** - HSTS, X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy
- **Bot & Scanner Blocking** - Blocks known attack paths (wp-admin, .env, phpmyadmin) and malicious user agents (sqlmap, nikto, nmap)
- **Request Validation** - URL length limits (2048 chars) to prevent buffer overflow attempts
- **Rate Limiting** - Protection against abuse on all API endpoints
- **Honeypot Spam Protection** - Bot detection on forms
- **Input Validation** - Server-side validation with sanitization
- **HTTPS Enforcement** - Strict Transport Security with preload
- **No Source Maps** - Production source maps disabled (uploaded to Sentry only)
- **security.txt** - Responsible disclosure policy per RFC 9116
- **Request IDs** - Unique X-Request-Id header per request for observability

### SEO (A+ Grade)
- **Canonical URLs** - Page-specific canonical URLs on all 17 pages
- **Dynamic Sitemap** - Auto-generated sitemap.ts covering all routes
- **Structured Metadata** - Complete OpenGraph and Twitter Cards on every page
- **JSON-LD Schemas** - Organization, BreadcrumbList, FAQPage, and Article structured data
- **Semantic HTML** - Proper HTML5 structure throughout
- **Robots.txt** - Comprehensive crawler instructions with bot-specific rules
- **Web Manifest** - PWA-optimized manifest with shortcuts

### Accessibility (A+ Grade, WCAG AAA)
- **WCAG AAA Contrast** - All text meets 7:1 contrast ratio on dark backgrounds
- **Skip-to-Content Link** - Keyboard navigation support
- **ARIA Attributes** - Complete aria-labels, aria-hidden on decorative elements, aria-invalid, aria-describedby, aria-required
- **Focus States** - Visible focus indicators with focus-visible rings on all interactive elements
- **Accessible Carousel** - Touch/swipe, keyboard pause (Space/Enter), role="marquee", prefers-reduced-motion support
- **Screen Reader Support** - Error announcements, live regions, proper labeling
- **44px Touch Targets** - Minimum touch target size on all interactive elements

### PWA (Progressive Web App)
- **Service Worker** - Smart caching strategies (cache-first for static, network-first for HTML, stale-while-revalidate)
- **Offline Support** - Dedicated offline page with cached navigation
- **Install Prompt** - Native app install experience
- **Background Sync** - Form submission retry on reconnect
- **Push Notifications** - Ready for push notification support
- **App Shortcuts** - Quick access to Services, Contact, and Products

### Performance
- **Static Generation** - All pages pre-rendered at build time
- **Image Optimization** - AVIF/WebP with responsive sizes and blur placeholders
- **Font Optimization** - Google Fonts with `display: swap` and preconnect
- **CSS Optimization** - Experimental `optimizeCss` enabled
- **Lazy Loading** - Progressive content loading
- **DNS Prefetch** - Third-party origin prefetching for faster loads
- **Compressed Assets** - Gzip/Brotli compression enabled

### Analytics & Monitoring
- **Sentry** - Error tracking with source map upload and tunnel route
- **Google Analytics** - Traffic and behavior analytics
- **Microsoft Clarity** - Session recordings and heatmaps
- **Vercel Speed Insights** - Core Web Vitals monitoring
- **Trustpilot** - Review integration

## Project Structure

```
shammas-development/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── about/                    # About page
│   │   ├── ai-automation/            # AI Automation service page
│   │   ├── api/                      # API routes
│   │   │   ├── contact/              # Contact form API
│   │   │   ├── newsletter/           # Newsletter subscription API
│   │   │   └── quote/                # Quote form API
│   │   ├── blog/                     # Blog section
│   │   ├── contact/                  # Contact page
│   │   ├── custom-software-cost/     # Pricing/cost estimator page
│   │   ├── faq/                      # FAQ page with FAQPage schema
│   │   ├── get-quote/                # Interactive quote builder
│   │   ├── internal-tools/           # Internal Tools service page
│   │   ├── mvp-development/          # MVP Development service page
│   │   ├── offline/                  # PWA offline fallback page
│   │   ├── privacy-policy/           # Privacy policy
│   │   ├── process/                  # Development process page
│   │   ├── products/                 # Products page
│   │   ├── services/                 # Services overview page
│   │   ├── terms-and-conditions/     # Terms of service
│   │   ├── work/                     # Portfolio page
│   │   │   └── [slug]/              # Dynamic case study pages
│   │   ├── error.tsx                 # Error boundary page
│   │   ├── not-found.tsx             # Custom 404 page
│   │   ├── layout.tsx                # Root layout with metadata & JSON-LD
│   │   ├── page.tsx                  # Homepage
│   │   ├── sitemap.ts                # Dynamic sitemap generation
│   │   └── globals.css               # Global styles with fluid typography
│   ├── components/                   # Reusable React components
│   ├── hooks/                        # Custom React hooks
│   │   └── useFormState.ts           # Form state management hook
│   ├── lib/                          # Utility libraries
│   │   ├── api-helpers.ts            # Rate limiting, sanitization, responses
│   │   ├── validations.ts            # Reusable validation functions
│   │   ├── structured-data.ts        # JSON-LD schema generators
│   │   └── image-utils.ts            # Image optimization utilities
│   ├── types/                        # TypeScript type definitions
│   │   └── api.ts                    # API response and form types
│   └── proxy.ts                      # Security proxy (CSP, bot blocking, headers)
├── public/
│   ├── .well-known/
│   │   └── security.txt              # Security disclosure policy (RFC 9116)
│   ├── robots.txt                    # Search engine instructions
│   ├── service-worker.js             # PWA service worker
│   └── site.webmanifest              # PWA manifest
├── next.config.js                    # Next.js configuration
├── tailwind.config.js                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript strict configuration
├── sentry.client.config.ts           # Sentry client configuration
├── sentry.server.config.ts           # Sentry server configuration
└── package.json                      # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Configure your `.env.local`:
   ```env
   NEXT_PUBLIC_SITE_URL=https://shammasdevelopment.io
   WEB3FORMS_ACCESS_KEY=your_web3forms_key
   BREVO_API_KEY=your_brevo_api_key
   BREVO_LIST_ID=2
   BREVO_SENDER_EMAIL=info@shammasdevelopment.io
   BREVO_SENDER_NAME=Shammas Development
   NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
   SENTRY_ORG=your_sentry_org
   SENTRY_PROJECT=your_sentry_project
   NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
   NEXT_PUBLIC_CLARITY_PROJECT_ID=your_clarity_id
   NEXT_PUBLIC_TAWK_PROPERTY_ID=your_tawk_property_id
   NEXT_PUBLIC_TAWK_WIDGET_ID=your_tawk_widget_id
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

### Bundle Analysis

```bash
ANALYZE=true npm run build
```

### Type Check

```bash
npm run type-check
```

### Lint Code

```bash
npm run lint
```

## API Routes

### Contact Form (`/api/contact`)
- **Method:** POST
- **Rate Limit:** 3 requests/minute per IP
- **Features:** Validation, sanitization, honeypot spam protection
- **Service:** Web3Forms

### Newsletter (`/api/newsletter`)
- **Method:** POST
- **Rate Limit:** 5 requests/minute per IP
- **Features:** Email validation, welcome email
- **Service:** Brevo (Sendinblue)

### Quote Form (`/api/quote`)
- **Method:** POST
- **Rate Limit:** 5 requests/minute per IP
- **Features:** Validation, sanitization
- **Service:** Web3Forms

## Configuration

### TypeScript Strict Mode

The project uses strict TypeScript settings in `tsconfig.json`:
- `noImplicitAny: true`
- `strictNullChecks: true`
- `strictFunctionTypes: true`
- `noImplicitReturns: true`

### Tailwind Custom Configuration

Custom utilities in `tailwind.config.js`:
- Touch device media queries (`touch:`, `hover-able:`)
- Safe area inset spacing
- Custom color palette

### Fluid Typography

CSS custom properties in `globals.css`:
- `.fluid-heading-xl` - Responsive extra-large headings
- `.fluid-heading-lg` - Responsive large headings
- `.fluid-heading-md` - Responsive medium headings
- `.fluid-body-lg` - Responsive large body text

### Security Proxy (proxy.ts)

Next.js 16 uses `proxy.ts` instead of `middleware.ts`. The proxy handles:
- Comprehensive CSP with explicit source allowlisting
- Script, style, connect, and frame source restrictions
- Bot and scanner blocking (paths + user agents)
- Dynamic security headers
- Request ID generation for observability
- API cache-control headers

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | React framework with Turbopack |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.4.x | Styling |
| Framer Motion | 11.x | Animations |
| Sharp | 0.34.x | Image optimization |
| Sentry | Latest | Error tracking |
| Brevo | - | Email service |
| Web3Forms | - | Form submissions |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy automatically

### Environment Variables for Production

```env
NEXT_PUBLIC_SITE_URL=https://shammasdevelopment.io
WEB3FORMS_ACCESS_KEY=your_production_key
BREVO_API_KEY=your_production_key
BREVO_LIST_ID=2
BREVO_SENDER_EMAIL=info@shammasdevelopment.io
BREVO_SENDER_NAME=Shammas Development
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
SENTRY_ORG=your_sentry_org
SENTRY_PROJECT=your_sentry_project
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
NEXT_PUBLIC_CLARITY_PROJECT_ID=your_clarity_id
NEXT_PUBLIC_TAWK_PROPERTY_ID=your_tawk_property_id
NEXT_PUBLIC_TAWK_WIDGET_ID=your_tawk_widget_id
```

## Development Notes

### Local API Testing

Web3Forms API calls may fail locally due to Cloudflare protection. This is expected behavior - the forms work correctly when deployed to Vercel.

### Adding New API Routes

1. Create route in `src/app/api/[route]/route.ts`
2. Import helpers from `@/lib/api-helpers`
3. Use validation functions from `@/lib/validations`
4. Follow the standardized response format from `@/types/api`

### Adding New Pages

1. Create directory in `src/app/[page-name]/`
2. Add `page.tsx` with metadata export including `alternates.canonical`
3. Add breadcrumb schema using `generateBreadcrumbSchema` from `@/lib/structured-data`
4. Add the route to `src/app/sitemap.ts`
5. Add the route to `public/service-worker.js` urlsToCache array
6. Bump service worker cache version

## Support

For technical issues or questions:
- Email: info@shammasdevelopment.io

## License

Proprietary - All Rights Reserved. See [LICENSE](./LICENSE) for details.

---

**Built with Next.js 16, TypeScript, and Tailwind CSS**
