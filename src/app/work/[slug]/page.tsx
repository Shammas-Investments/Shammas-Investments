import { notFound } from "next/navigation";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import { FadeInStagger } from "@/components/FadeIn";
import ContactSection from "@/components/ContactSection";
import SocialShare from "@/components/SocialShare";
import {
  caseStudies,
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
} from "@/data/case-studies";
import {
  generateBreadcrumbSchema,
  generateArticleSchema,
} from "@/lib/structured-data";
import type { Metadata } from "next";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Shammas Development",
    };
  }

  return {
    title: `${caseStudy.title} | Case Study | Shammas Development`,
    description: caseStudy.description,
    keywords: [
      caseStudy.industry,
      ...caseStudy.services,
      ...caseStudy.technologies.slice(0, 5),
      "case study",
      "portfolio",
    ],
    openGraph: {
      title: `${caseStudy.title} | Case Study`,
      description: caseStudy.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title} | Case Study`,
      description: caseStudy.description,
      images: ["/web-app-manifest-512x512.png"],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  // Get related case studies (same industry, excluding current)
  const relatedStudies = caseStudies
    .filter((s) => s.industry === caseStudy.industry && s.slug !== slug)
    .slice(0, 2);

  // Generate structured data schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Our Work", path: "/work" },
    { name: caseStudy.title, path: `/work/${slug}` },
  ]);

  const articleSchema = generateArticleSchema({
    title: caseStudy.title,
    description: caseStudy.description,
    slug: slug,
    datePublished: `${caseStudy.year}-01-01`,
    keywords: [
      caseStudy.industry,
      ...caseStudy.services,
      ...caseStudy.technologies.slice(0, 5),
    ],
  });

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Section */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-950 transition"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Case Studies
          </Link>
        </FadeIn>

        <FadeIn className="mt-8">
          <div className="flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white">
              {caseStudy.industry}
            </span>
            <span className="text-sm text-neutral-600">{caseStudy.year}</span>
            <span className="text-sm text-neutral-600">
              {caseStudy.duration}
            </span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold text-neutral-950 sm:text-5xl lg:text-6xl">
            {caseStudy.title}
          </h1>
          <p className="mt-4 text-xl text-neutral-600">{caseStudy.client}</p>
        </FadeIn>

        {/* Metrics Grid */}
        <FadeInStagger className="mt-16">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {caseStudy.metrics.map((metric, index) => (
              <FadeIn
                key={index}
                className="rounded-2xl bg-neutral-950 p-6 text-center"
              >
                <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-neutral-400">{metric.label}</p>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>

      {/* Overview */}
      <Container className="mt-24">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Overview
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            {caseStudy.longDescription}
          </p>
        </FadeIn>
      </Container>

      {/* Challenge & Solution */}
      <Container className="mt-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
          <FadeIn>
            <div className="rounded-4xl bg-red-50 p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                The Challenge
              </h3>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-4xl bg-green-50 p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                Our Solution
              </h3>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Results */}
      <Container className="mt-24">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Results & Impact
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-8">
          <ul className="space-y-4">
            {caseStudy.results.map((result, index) => (
              <FadeIn key={index}>
                <li className="flex items-start gap-4 rounded-2xl bg-neutral-50 p-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="text-lg text-neutral-600">{result}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </FadeInStagger>
      </Container>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <Container className="mt-24">
          <FadeIn>
            <div className="rounded-4xl bg-neutral-950 p-8 sm:p-12">
              <svg
                className="h-10 w-10 text-neutral-700"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="mt-6 text-xl text-white leading-relaxed sm:text-2xl">
                {caseStudy.testimonial.quote}
              </p>
              <div className="mt-8">
                <p className="font-semibold text-white">
                  {caseStudy.testimonial.author}
                </p>
                <p className="text-sm text-neutral-400">
                  {caseStudy.testimonial.role}
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      )}

      {/* Technologies & Services */}
      <Container className="mt-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
          <FadeIn>
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              Technologies Used
            </h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              Services Provided
            </h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {caseStudy.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium text-white"
                >
                  {service}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Social Share */}
      <Container className="mt-16">
        <FadeIn>
          <div className="flex justify-center">
            <SocialShare
              title={`${caseStudy.title} - Case Study`}
              description={caseStudy.description}
            />
          </div>
        </FadeIn>
      </Container>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <Container className="mt-24">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Related Case Studies
            </h2>
          </FadeIn>
          <FadeInStagger className="mt-8">
            <div className="grid gap-8 sm:grid-cols-2">
              {relatedStudies.map((study) => (
                <FadeIn key={study.slug}>
                  <Link
                    href={`/work/${study.slug}`}
                    className="group block rounded-4xl bg-neutral-50 p-8 transition hover:bg-neutral-100"
                  >
                    <p className="text-sm font-semibold text-neutral-600">
                      {study.industry}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-neutral-950 group-hover:text-neutral-600 transition">
                      {study.title}
                    </h3>
                    <p className="mt-4 text-neutral-600 line-clamp-2">
                      {study.description}
                    </p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </FadeInStagger>
        </Container>
      )}

      {/* CTA */}
      <Container className="mt-24 mb-24">
        <FadeIn>
          <div className="rounded-4xl bg-neutral-950 p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-300">
              Let&apos;s discuss how we can help transform your business with
              technology.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
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
      </Container>

      <ContactSection />
    </>
  );
}
