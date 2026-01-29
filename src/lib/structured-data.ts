/**
 * Structured Data (JSON-LD) generators for SEO
 */

const SITE_URL = 'https://shammasdevelopment.io';
const SITE_NAME = 'Shammas Development';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * Generate BreadcrumbList JSON-LD schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * Generate Article JSON-LD schema for case studies
 */
export function generateArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  author = SITE_NAME,
  keywords = [],
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: `${SITE_URL}/work/${slug}`,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/web-app-manifest-512x512.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/work/${slug}`,
    },
    keywords: keywords.join(', '),
  };
}

/**
 * Generate Organization JSON-LD schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/web-app-manifest-512x512.png`,
    sameAs: [
      'https://www.linkedin.com/company/shammas-development',
      'https://twitter.com/shammasdev',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-555-0199',
      contactType: 'customer service',
      email: 'info@shammasdevelopment.io',
      availableLanguage: 'English',
    },
  };
}

/**
 * Generate WebPage JSON-LD schema
 */
export function generateWebPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: `${SITE_URL}${path}`,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/**
 * Generate Service JSON-LD schema
 */
export function generateServiceSchema({
  name,
  description,
  provider = SITE_NAME,
}: {
  name: string;
  description: string;
  provider?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    description: description,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: SITE_URL,
    },
  };
}
