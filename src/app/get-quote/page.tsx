import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import PlanBuilder from "./components/PlanBuilder";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Get a Quote", path: "/get-quote" },
]);

export const metadata: Metadata = {
  title: "Get a Quote | Shammas Development",
  description:
    "Build your custom service plan and get an instant quote for your project. Select from our range of development, design, marketing, and AI services.",
  keywords: [
    "get quote",
    "project estimate",
    "custom software quote",
    "web development pricing",
    "mobile app cost",
    "service pricing",
    "shammas development quote",
  ],
  openGraph: {
    title: "Get a Quote | Shammas Development",
    description:
      "Build your custom service plan and get an instant quote for your project.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Quote | Shammas Development",
    description:
      "Build your custom service plan and get an instant quote for your project.",
    images: ["/web-app-manifest-512x512.png"],
  },
};

const GetQuotePage = () => {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="print:hidden">
        <PageIntro eyebrow="Build Your Plan" title="Get a Custom Quote">
          <p>
            Select the services you need, provide some details, and get an instant
            estimate for your project. Our team will follow up to discuss your
            specific requirements.
          </p>
        </PageIntro>
      </div>

      <Container className="mt-16 sm:mt-20 lg:mt-24 mb-24 print:mt-0 print:mb-0">
        <PlanBuilder />
      </Container>
    </>
  );
};

export default GetQuotePage;
