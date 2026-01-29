import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import ContactSection from "@/components/ContactSection";
import React from "react";
import type { Metadata } from "next";

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
};

interface CaseStudyCardProps {
  title: string;
  client: string;
  industry: string;
  description: string;
  results?: string[];
  comingSoon?: boolean;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, client, industry, description, results, comingSoon }) => {
  return (
    <FadeIn>
      <div className="relative overflow-hidden rounded-4xl bg-neutral-50 p-8 ring-1 ring-neutral-950/5 transition hover:bg-neutral-100 sm:p-10">
        {comingSoon && (
          <div className="absolute right-4 top-4 rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold text-white">
            Coming Soon
          </div>
        )}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-semibold text-neutral-950">{industry}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-neutral-950">
              {title}
            </h3>
            <p className="mt-1 text-sm text-neutral-600">{client}</p>
          </div>
        </div>
        <p className="mt-6 text-base text-neutral-600">{description}</p>
        {results && results.length > 0 && (
          <div className="mt-6">
            <p className="font-semibold text-neutral-950">Results:</p>
            <ul className="mt-3 space-y-2">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-neutral-600">
                  <span className="text-neutral-950">→</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </FadeIn>
  );
};

const WorkPage = () => {
  const caseStudies = [
    {
      title: "Enterprise E-Commerce Platform",
      client: "Fortune 500 Retailer",
      industry: "Retail & E-Commerce",
      description: "Developed a comprehensive multi-channel e-commerce platform integrating Amazon, Walmart, and Shopify with centralized inventory management and automated order processing.",
      results: [
        "300% increase in online sales within 6 months",
        "Reduced order processing time by 75%",
        "Improved inventory accuracy to 99.8%"
      ],
      comingSoon: true
    },
    {
      title: "AI-Powered Customer Support System",
      client: "SaaS Technology Company",
      industry: "Technology & Software",
      description: "Built an intelligent chatbot system using LLM technology to handle customer inquiries, reducing support ticket volume and improving response times.",
      results: [
        "65% reduction in support ticket volume",
        "24/7 automated customer support",
        "Customer satisfaction score increased to 4.8/5"
      ],
      comingSoon: true
    },
    {
      title: "Cloud Infrastructure Migration",
      client: "Financial Services Firm",
      industry: "Finance & Banking",
      description: "Migrated legacy on-premise infrastructure to AWS with improved security, scalability, and 99.99% uptime guarantee.",
      results: [
        "40% reduction in infrastructure costs",
        "Zero downtime during migration",
        "Enhanced security compliance (SOC 2, PCI DSS)"
      ],
      comingSoon: true
    },
    {
      title: "Mobile Gaming Application",
      client: "Entertainment Startup",
      industry: "Gaming & Entertainment",
      description: "Developed a multiplayer mobile game with real-time gameplay, in-app purchases, and social features for iOS and Android platforms.",
      results: [
        "500K+ downloads in first 3 months",
        "4.6-star rating on App Store and Google Play",
        "Featured in App Store 'New Games We Love'"
      ],
      comingSoon: true
    },
    {
      title: "Healthcare Data Analytics Platform",
      client: "Healthcare Provider Network",
      industry: "Healthcare",
      description: "Created a HIPAA-compliant analytics dashboard for healthcare providers to track patient outcomes, resource utilization, and operational efficiency.",
      results: [
        "Improved patient care coordination by 45%",
        "Reduced administrative overhead by 30%",
        "Full HIPAA compliance certification"
      ],
      comingSoon: true
    },
    {
      title: "Social Media Management Suite",
      client: "Marketing Agency",
      industry: "Marketing & Advertising",
      description: "Developed a comprehensive social media management platform with scheduling, analytics, and AI-powered content recommendations.",
      results: [
        "Managed 100+ client accounts efficiently",
        "Increased engagement rates by 85% on average",
        "Saved 20+ hours per week in manual posting"
      ],
      comingSoon: true
    }
  ];

  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Proven Solutions That Drive Real Results"
      >
        <p>
          We partner with businesses across industries to deliver transformative technology solutions. Explore our case studies to see how we&apos;ve helped clients achieve their goals and overcome complex challenges.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>

        <FadeIn className="mt-24">
          <div className="rounded-4xl bg-neutral-950 p-12 text-center">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-lg text-neutral-300">
              Let&apos;s discuss how we can help transform your business with technology.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/contact"
                className="rounded-full bg-white px-6 py-3 font-semibold text-neutral-950 transition hover:bg-neutral-200"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-neutral-950"
              >
                Our Services
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  );
};

export default WorkPage;
