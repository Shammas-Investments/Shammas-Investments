import ContactSection from "@/components/ContactSection";
import Cultures from "@/components/Cultures";
import Founders from "@/components/Founders";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import SocialShare from "@/components/SocialShare";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
]);

export const metadata: Metadata = {
  title: "About Us | Shammas Development",
  description:
    "Learn about Shammas Development - a technology partner focused on building reliable software, AI automation, and cloud systems for growing teams.",
  keywords: [
    "about shammas development",
    "software development company",
    "technology partner",
    "AI automation company",
    "custom software team",
  ],
  openGraph: {
    title: "About Us | Shammas Development",
    description:
      "Learn about Shammas Development - a technology partner focused on building reliable software, AI automation, and cloud systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Shammas Development",
    description:
      "Learn about Shammas Development - a technology partner focused on building reliable software, AI automation, and cloud systems.",
    images: ["/web-app-manifest-512x512.png"],
  },
};

const AboutPage = () => {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro
        eyebrow="About us"
        title="Technology Partner for Growing Teams"
      >
        <p>
          We believe the best software is practical, well-designed, and aligned with real business outcomes.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Shammas Development was founded on the idea that technology should
            feel supportive — not overwhelming. We help companies simplify operations
            and scale through well-built technology.
          </p>
          <p>
            Every project is approached as a long-term investment in our
            client&apos;s success. We build solutions teams trust, understand, and
            confidently use long after launch.
          </p>
          <p>
            As founders, we hold ourselves accountable for the quality of our
            work and the outcomes we deliver.
          </p>
        </div>
      </PageIntro>
      <Founders />
      <Cultures />

      {/* Social Share */}
      <Container className="mt-16 sm:mt-20">
        <div className="flex justify-center">
          <SocialShare
            title="About Shammas Development"
            description="Learn about our team and how we help businesses build reliable software and AI solutions."
          />
        </div>
      </Container>

      <ContactSection />
    </>
  );
};

export default AboutPage;
