# Shammas Development - Professional Software Development Agency

A modern, secure, accessible, and SEO-optimized website for Shammas Development LLC, built with Next.js 16, TypeScript (strict mode), Tailwind CSS, and Framer Motion.

![Shammas Development](./src/appLogo.png)

## About Shammas Development

Shammas Development is an operator-focused software development agency specializing in:

- **Custom Internal Tools** - Replace manual processes and spreadsheets with purpose-built applications
- **Automation & AI Workflows** - Reduce operational overhead with intelligent systems
- **Scalable Web Applications** - MVPs and production systems designed for growth

**Founded by:** Jonathan Shammas and Joe Shammas

## Features

### Technical Excellence
- **Next.js 16.1.6** - Latest version with Turbopack and App Router
- **React 19** - Modern React with latest features
- **TypeScript Strict Mode** - Full type safety with strict compiler options
- **Tailwind CSS 3.4** - Utility-first CSS framework with custom configurations
- **Framer Motion** - Smooth animations and transitions
- **Sharp** - Optimized image processing

### Architecture & Code Quality
- **Shared Utilities Library** - Centralized API helpers, validations, and types
- **Custom Hooks** - Reusable form state management
- **Standardized API Responses** - Consistent response format across all endpoints
- **Rate Limiting** - In-memory rate limiting for API protection
- **Input Sanitization** - Server-side validation and sanitization

### Security Features
- **Security Headers** - HSTS, CSP, X-Frame-Options, XSS Protection
- **Content Security Policy** - Comprehensive CSP with nonce support
- **Rate Limiting** - Protection against abuse on all API endpoints
- **Honeypot Spam Protection** - Bot detection on forms
- **Input Validation** - Server-side validation with sanitization
- **HTTPS Enforcement** - Strict Transport Security
- **No Source Maps** - Production source maps disabled

### SEO Optimization
- **Dynamic Sitemap** - Auto-generated sitemap.ts for search engines
- **Structured Metadata** - Complete OpenGraph and Twitter Cards on all pages
- **JSON-LD Schema** - Organization structured data
- **Semantic HTML** - Proper HTML5 structure
- **Web Manifest** - PWA capabilities
- **Robots.txt** - Search engine crawler instructions

### Accessibility (WCAG Compliant)
- **Skip-to-Content Link** - Keyboard navigation support
- **ARIA Attributes** - Proper aria-invalid, aria-describedby, aria-required
- **Focus States** - Visible focus indicators on all interactive elements
- **Error Announcements** - Screen reader friendly form validation
- **Active Navigation** - Current page indicator in navigation
- **Required Field Indicators** - Visual and semantic required markers

### Responsive Design
- **Fluid Typography** - CSS clamp() based responsive text sizing
- **Touch Media Queries** - Optimized for touch devices
- **Safe Area Insets** - Support for notched devices
- **Mobile-First Approach** - Responsive from 320px to 4K displays

## Project Structure

```
shammas-development/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── api/               # API routes
│   │   │   ├── contact/       # Contact form API
│   │   │   ├── newsletter/    # Newsletter subscription API
│   │   │   └── quote/         # Quote form API
│   │   ├── blog/              # Blog section
│   │   ├── contact/           # Contact page
│   │   ├── get-quote/         # Quote builder page
│   │   ├── privacy-policy/    # Privacy policy page
│   │   ├── process/           # Process page
│   │   ├── products/          # Products page
│   │   ├── services/          # Services page
│   │   ├── terms-and-conditions/ # Terms page
│   │   ├── work/              # Portfolio page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── sitemap.ts         # Dynamic sitemap generation
│   │   └── globals.css        # Global styles with fluid typography
│   ├── components/            # Reusable React components
│   ├── hooks/                 # Custom React hooks
│   │   └── useFormState.ts    # Form state management hook
│   ├── lib/                   # Utility libraries
│   │   ├── api-helpers.ts     # Rate limiting, sanitization, responses
│   │   └── validations.ts     # Reusable validation functions
│   ├── types/                 # TypeScript type definitions
│   │   └── api.ts             # API response and form types
│   └── proxy.ts               # Security headers middleware
├── public/
│   ├── robots.txt             # Search engine instructions
│   └── site.webmanifest       # PWA manifest
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript strict configuration
└── package.json               # Dependencies
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

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | React framework |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.4.x | Styling |
| Framer Motion | 11.x | Animations |
| Sharp | 0.34.x | Image optimization |
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
```

## Development Notes

### Local API Testing

Web3Forms API calls may fail locally due to Cloudflare protection. This is expected behavior - the forms work correctly when deployed to Vercel.

### Adding New API Routes

1. Create route in `src/app/api/[route]/route.ts`
2. Import helpers from `@/lib/api-helpers`
3. Use validation functions from `@/lib/validations`
4. Follow the standardized response format from `@/types/api`

## Support

For technical issues or questions:
- Email: support@shammasdevelopment.io

## License

Proprietary - All Rights Reserved. See [LICENSE](./LICENSE) for details.

---

**Built with Next.js 16 and TypeScript**
