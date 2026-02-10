import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import ContactSection from "@/components/ContactSection";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
]);

export const metadata: Metadata = {
  title: "Blog | Shammas Development",
  description:
    "Insights on software development, AI automation, cloud architecture, and digital transformation. Practical advice for founders and operators.",
  keywords: [
    "software development blog",
    "AI automation insights",
    "tech blog",
    "development best practices",
    "startup technology",
  ],
  openGraph: {
    title: "Blog | Shammas Development",
    description:
      "Insights on software development, AI automation, cloud architecture, and digital transformation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Shammas Development",
    description:
      "Insights on software development, AI automation, cloud architecture, and digital transformation.",
    images: ["/web-app-manifest-512x512.png"],
  },
  alternates: {
    canonical: "/blog",
  },
};

const BlogPage = () => {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro eyebrow="Blog" title="Insights & Updates">
        <p>
          Practical insights on software development, AI automation, and building technology that scales.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-4xl bg-neutral-50 p-12 text-center ring-1 ring-neutral-950/5 sm:p-16">
            <div className="mx-auto max-w-xl">
              <span className="text-6xl">📝</span>
              <h2 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Coming Soon
              </h2>
              <p className="mt-4 text-base text-neutral-600">
                We&apos;re working on valuable content about software development, AI automation, and scaling technology. Subscribe to our newsletter to be notified when we publish.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  );
};

export default BlogPage;
