"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

interface BreadcrumbItem {
  name: string;
  href: string;
}

// Map of routes to readable names
const routeNames: Record<string, string> = {
  about: "About Us",
  services: "Services",
  products: "Products",
  process: "How We Work",
  contact: "Contact",
  blog: "Blog",
  work: "Our Work",
  "get-quote": "Get a Quote",
  "privacy-policy": "Privacy Policy",
  "terms-and-conditions": "Terms & Conditions",
};

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Don't show breadcrumbs on home page
  if (pathname === "/") {
    return null;
  }

  // Build breadcrumb items from path
  const pathSegments = pathname.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      const name = routeNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
      return { name, href };
    }),
  ];

  // JSON-LD structured data for breadcrumbs
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://shammasdevelopment.io"}${item.href}`,
    })),
  };

  return (
    <>
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Visual Breadcrumbs */}
      <Container className="print:hidden">
        <nav aria-label="Breadcrumb" className="py-4">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <li key={item.href} className="flex items-center gap-2">
                  {index > 0 && (
                    <svg
                      className="h-4 w-4 text-neutral-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                  {isLast ? (
                    <span className="font-medium text-neutral-950" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="transition hover:text-neutral-950"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </>
  );
};

export default Breadcrumbs;
