import type { Metadata, Viewport } from 'next';
import RootLayout from "@/components/RootLayout";
import "./globals.css";
import { Playfair_Display, Inter } from 'next/font/google';
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration';
import InstallPrompt from '@/components/InstallPrompt';
import ErrorBoundary from '@/components/ErrorBoundary';
import { SpeedInsights } from '@vercel/speed-insights/next';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import ToastProvider from '@/components/Toast';
import LiveChat from '@/components/LiveChat';
import CookieConsent from '@/components/CookieConsent';
import BackToTop from '@/components/BackToTop';
import MicrosoftClarity from '@/components/MicrosoftClarity';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import NewsletterPopup from '@/components/NewsletterPopup';
import StickyCTA from '@/components/StickyCTA';
import NavigationEvents from '@/components/NavigationEvents';
import AdSense from '@/components/AdSense';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shammasdevelopment.io';
const heroImage = '/web-app-manifest-512x512.png';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Shammas Development",
    default: "Shammas Development - Internal Tools, AI Automation & MVP Development",
  },
  description: "Shammas Development LLC - Custom internal tools, AI automation, and MVP development for teams that have outgrown spreadsheets and manual workflows. Clear scope, weekly demos, production-grade systems.",
  keywords: [
    'Shammas Development',
    'shammas',
    'shammasdevelopment',
    'shammasdev',
    'shammas LLC',
    'Shammas Development LLC',
    'internal tools development',
    'AI automation',
    'MVP development',
    'custom software development',
    'workflow automation',
    'LLM automation',
    'SaaS development',
    'custom dashboards',
    'admin panels',
    'document processing AI',
    'cloud management',
    'AWS services',
    'web development',
    'digital transformation',
    'software consultancy',
  ],
  applicationName: 'Shammas Development',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Shammas Development - Internal Tools, AI Automation & MVP Development',
    description: 'Custom internal tools, AI automation, and MVP development for teams that have outgrown spreadsheets and manual workflows.',
    siteName: 'Shammas Development',
    images: [
      {
        url: heroImage,
        width: 512,
        height: 512,
        alt: 'Shammas Development - Internal Tools, AI Automation & MVP Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shammas Development - Internal Tools, AI Automation & MVP Development',
    description: 'Custom internal tools, AI automation, and MVP development for teams that have outgrown spreadsheets and manual workflows.',
    images: [heroImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: [{ url: '/favicon.svg' }],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/web-app-manifest-192x192.png',
        sizes: '192x192',
      },
      {
        rel: 'icon',
        url: '/web-app-manifest-512x512.png',
        sizes: '512x512',
      },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Shammas Development',
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0a0a',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Shammas Development LLC',
    alternateName: [
      'Shammas Development',
      'Shammas Development',
      'shammasdevelopment',
      'shammasdev',
      'Shammas LLC',
      'Shammas Technology Solutions',
    ],
    legalName: 'Shammas Development LLC',
    url: siteUrl,
    logo: `${siteUrl}/web-app-manifest-512x512.png`,
    image: `${siteUrl}/web-app-manifest-512x512.png`,
    description: 'Shammas Development LLC builds custom internal tools, AI automation, and MVPs for teams that have outgrown spreadsheets and manual workflows. Clear scope, weekly demos, production-grade systems.',
    slogan: 'Internal Tools, AI Automation & MVP Development',
    founder: [
      {
        '@type': 'Person',
        name: 'Joe Shammas',
        jobTitle: 'Co-Founder & CEO',
      },
      {
        '@type': 'Person',
        name: 'Hassan Naeem',
        jobTitle: 'Founder & CTO',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'United States',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@shammasdevelopment.io',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
    },
    sameAs: [
      // Add your social media URLs here when available
    ],
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Internal Tools Development',
      'AI Automation',
      'MVP Development',
      'SaaS Development',
      'Artificial Intelligence',
      'LLM Workflows',
      'Cloud Computing',
      'Web Development',
      'Digital Transformation',
      'Workflow Automation',
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Internal Tools Development',
          description: 'Custom dashboards, admin panels, and workflow tools that replace spreadsheets and manual processes. Starting at $5K.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Automation',
          description: 'LLM-powered workflows for document processing, classification, and reporting. Starting at $10K.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'MVP & SaaS Development',
          description: 'Full-stack products with authentication, payments, and scalable architecture. Starting at $20K.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cloud & DevOps',
          description: 'AWS, Google Cloud, and Azure infrastructure, CI/CD pipelines, and container orchestration.',
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`h-full bg-neutral-950 text-base antialiased text-neutral-100 ${inter.variable} ${playfair.variable}`}
    >
      <head>
        {/* Preconnect to critical third-party origins for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://embed.tawk.to" />
        <link rel="dns-prefetch" href="https://invitejs.trustpilot.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <NavigationEvents />
        <ServiceWorkerRegistration />
        <InstallPrompt />
        <ToastProvider>
          <ErrorBoundary>
            <RootLayout>{children}</RootLayout>
          </ErrorBoundary>
        </ToastProvider>
        <SpeedInsights />
        <GoogleAnalytics />
        <LiveChat />
        <CookieConsent />
        <BackToTop />
        <MicrosoftClarity />
        <ExitIntentPopup />
        <NewsletterPopup />
        <StickyCTA />
        <AdSense />
      </body>
    </html>
  );
}
