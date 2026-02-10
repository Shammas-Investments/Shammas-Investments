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
  alternates: {
    canonical: "/about",
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
        title="A Small Senior Team That Builds Software the Right Way"
      >
        <p>
          We are a small senior team that builds software the way operators expect it to be built.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            No outsourcing. No bait and switch. No junior handoffs.
          </p>
          <p>
            Shammas Development was founded on the idea that technology should
            feel supportive — not overwhelming. We help companies replace manual work
            with reliable internal software and AI automation.
          </p>
          <p>
            Every project is scoped clearly, delivered in weekly milestones, and
            documented for full handoff. The engineers you meet during scoping are
            the same engineers who build your system.
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
