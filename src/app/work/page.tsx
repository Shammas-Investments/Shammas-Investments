import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import { FadeInStagger } from "@/components/FadeIn";
import ContactSection from "@/components/ContactSection";
import SocialShare from "@/components/SocialShare";
import { caseStudies, getFeaturedCaseStudies } from "@/data/case-studies";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import Link from "next/link";
import type { Metadata } from "next";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Our Work", path: "/work" },
]);

export const metadata: Metadata = {
  title: "Our Work | Shammas Development",
  description:
    "Explore our portfolio of successful projects including e-commerce platforms, SaaS applications, AI automation systems, and custom software solutions.",
  keywords: [
    "software development portfolio",
    "case studies",
    "e-commerce projects",
    "SaaS development",
    "AI automation projects",
    "custom software examples",
  ],
  openGraph: {
    title: "Our Work | Shammas Development",
    description:
      "Explore our portfolio of successful projects including e-commerce platforms, SaaS applications, and AI automation systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Shammas Development",
    description:
      "Explore our portfolio of successful projects including e-commerce platforms, SaaS applications, and AI automation systems.",
    images: ["/web-app-manifest-512x512.png"],
  },
  alternates: {
    canonical: "/work",
  },
};

// Industry icons mapping
const industryIcons: Record<string, string> = {
  "Retail & E-Commerce": "🛒",
  "Technology & Software": "💻",
  "Finance & Banking": "🏦",
  "Gaming & Entertainment": "🎮",
  Healthcare: "🏥",
  "Marketing & Advertising": "📱",
};

const WorkPage = () => {
  const featuredStudies = getFeaturedCaseStudies();
  const otherStudies = caseStudies.filter((s) => !s.featured);

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro
        eyebrow="Our work"
        title="Proven Solutions That Drive Real Results"
      >
        <p>
          We partner with businesses across industries to deliver transformative
          technology solutions. Explore our case studies to see how we&apos;ve
          helped clients achieve their goals and overcome complex challenges.
        </p>
      </PageIntro>

      {/* Featured Case Studies */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Featured Projects
          </h2>
        </FadeIn>

        <FadeInStagger className="mt-10">
          <div className="grid gap-8">
            {featuredStudies.map((study) => (
              <FadeIn key={study.slug}>
                <Link
                  href={`/work/${study.slug}`}
                  className="group relative block overflow-hidden rounded-4xl bg-neutral-950 p-8 transition sm:p-10 lg:p-12"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">
                          {industryIcons[study.industry] || "📁"}
                        </span>
                        <span className="text-sm font-medium text-neutral-300">
                          {study.industry}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-2xl font-semibold text-white group-hover:text-neutral-300 transition sm:text-3xl">
                        {study.title}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-500">
                        {study.client} • {study.year}
                      </p>
                      <p className="mt-4 text-neutral-300 line-clamp-2">
                        {study.description}
                      </p>

                      {/* Key Metrics */}
                      <div className="mt-6 flex flex-wrap gap-4">
                        {study.metrics.slice(0, 3).map((metric, index) => (
                          <div key={index} className="text-center">
                            <p className="text-xl font-semibold text-white">
                              {metric.value}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 lg:mt-0">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-neutral-300 transition">
                        View Case Study
                        <svg
                          className="h-4 w-4 transition group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-900 to-neutral-950 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>

      {/* Other Case Studies */}
      <Container className="mt-24">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            More Projects
          </h2>
        </FadeIn>

        <FadeInStagger className="mt-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherStudies.map((study) => (
              <FadeIn key={study.slug}>
                <Link
                  href={`/work/${study.slug}`}
                  className="group block rounded-4xl bg-neutral-50 p-8 ring-1 ring-neutral-950/5 transition hover:bg-neutral-100"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">
                      {industryIcons[study.industry] || "📁"}
                    </span>
                    <span className="text-sm font-medium text-neutral-600">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950 group-hover:text-neutral-600 transition">
                    {study.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    {study.client} • {study.year}
                  </p>
                  <p className="mt-4 text-sm text-neutral-600 line-clamp-3">
                    {study.description}
                  </p>

                  {/* Technologies preview */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {study.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 4 && (
                      <span className="rounded bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600">
                        +{study.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-neutral-950">
                    View Details
                    <svg
                      className="h-4 w-4 transition group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>

      {/* Stats Section */}
      <Container className="mt-24">
        <FadeIn>
          <div className="rounded-4xl bg-neutral-100 p-8 sm:p-12">
            <h2 className="text-center font-display text-2xl font-semibold text-neutral-950">
              Our Track Record
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4">
              <div className="text-center">
                <p className="font-display text-4xl font-semibold text-neutral-950">
                  50+
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  Projects Delivered
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl font-semibold text-neutral-950">
                  98%
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  Client Satisfaction
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl font-semibold text-neutral-950">
                  12+
                </p>
                <p className="mt-2 text-sm text-neutral-600">Industries Served</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl font-semibold text-neutral-950">
                  $10M+
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  Client Revenue Generated
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* CTA Section */}
      <Container className="mt-24">
        <FadeIn>
          <div className="rounded-4xl bg-neutral-950 p-12 text-center">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-lg text-neutral-300">
              Let&apos;s discuss how we can help transform your business with
              technology.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 font-semibold text-neutral-950 transition hover:bg-neutral-200"
              >
                Contact Us
              </Link>
              <Link
                href="/get-quote"
                className="rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-neutral-950"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Social Share */}
        <FadeIn className="mt-12">
          <div className="flex justify-center">
            <SocialShare
              title="Our Work - Shammas Development"
              description="Explore our portfolio of successful software development projects."
            />
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  );
};

export default WorkPage;
