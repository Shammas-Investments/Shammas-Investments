import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Discover from "@/components/Discover";
import Launch from "@/components/Launch";
import PageIntro from "@/components/PageIntro";
import Plan from "@/components/Plan";
import Support from "@/components/Support";
import Values from "@/components/Values";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Our Process", path: "/process" },
]);

export const metadata: Metadata = {
  title: "Our Process | Shammas Development",
  description:
    "Learn about our structured, milestone-based development process: Discovery, Planning, Build, Launch, and Support. Transparent and reliable execution.",
  keywords: [
    "software development process",
    "agile development",
    "project methodology",
    "milestone-based delivery",
    "transparent development",
  ],
  openGraph: {
    title: "Our Process | Shammas Development",
    description:
      "Learn about our structured, milestone-based development process designed for clarity, accountability, and results.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Process | Shammas Development",
    description:
      "Learn about our structured, milestone-based development process designed for clarity, accountability, and results.",
    images: ["/web-app-manifest-512x512.png"],
  },
};

const ProcessPage = () => {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro eyebrow="Our Process" title="Structured, Milestone-Based Delivery">
        <p>
          Most projects follow a structured, milestone-based process designed to reduce risk and ensure alignment. You always know what&apos;s happening, and we deliver systems built to last.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Plan */}
        <Plan />
        {/* Build */}
        <Build />
        {/* Launch */}
        <Launch />
        {/* Support */}
        <Support />
      </div>
      {/* Values */}
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;
