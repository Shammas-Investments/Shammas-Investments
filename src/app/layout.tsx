import type { Metadata, Viewport } from 'next';
import RootLayout from "@/components/RootLayout";
import "./globals.css";
import { Playfair_Display, Inter } from 'next/font/google';
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration';
import InstallPrompt from '@/components/InstallPrompt';
import { SpeedInsights } from '@vercel/speed-insights/next';

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shammasinvestments.com';
const heroImage = '/android-chrome-512x512.png';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Shammas Investments",
    default: "Shammas Investments - Complete IT Solutions & Technology Services",
  },
  description: "Leading IT solutions provider specializing in software development, AI/ML, e-commerce platforms, cloud management, and digital transformation services.",
  keywords: [
    'software development',
    'AI development',
    'machine learning',
    'e-commerce solutions',
    'Amazon seller services',
    'Walmart marketplace',
    'Shopify development',
    'cloud management',
    'AWS services',
    'game development',
    'mobile app development',
    'web development',
    'LLM chatbots',
    'graphics design',
    'social media management',
    'IT consulting',
    'digital transformation',
    'technology services',
    'enterprise software',
  ],
  applicationName: 'Shammas Investments',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Shammas Investments - Complete IT Solutions & Technology Services',
    description: 'Leading IT solutions provider specializing in software development, AI/ML, e-commerce platforms, cloud management, and digital transformation services.',
    siteName: 'Shammas Investments',
    images: [
      {
        url: heroImage,
        width: 512,
        height: 512,
        alt: 'Shammas Investments - Complete IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shammas Investments - Complete IT Solutions & Technology Services',
    description: 'Leading IT solutions provider specializing in software development, AI/ML, e-commerce platforms, cloud management, and digital transformation services.',
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
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Shammas Investments',
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
    name: 'Shammas Investments LLC',
    url: siteUrl,
    logo: `${siteUrl}/android-chrome-512x512.png`,
    description: 'Leading IT solutions provider specializing in software development, AI/ML, e-commerce platforms, cloud management, and digital transformation services.',
    founder: [
      {
        '@type': 'Person',
        name: 'Jonathan Shammas',
      },
      {
        '@type': 'Person',
        name: 'Joe Shammas',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'United States',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@shammasinvestments.com',
      contactType: 'Customer Service',
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
      'Software Development',
      'Artificial Intelligence',
      'Machine Learning',
      'E-commerce Solutions',
      'Cloud Computing',
      'Mobile App Development',
      'Game Development',
      'Web Development',
    ],
  };

  return (
    <html
      lang="en"
      className={`h-full bg-neutral-950 text-base antialiased text-neutral-100 ${inter.variable} ${playfair.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <ServiceWorkerRegistration />
        <InstallPrompt />
        <RootLayout>{children}</RootLayout>
        <SpeedInsights />
      </body>
    </html>
  );
}
