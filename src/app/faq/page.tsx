import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import Accordion from "@/components/Accordion";
import SocialShare from "@/components/SocialShare";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
]);

export const metadata: Metadata = {
  title: "FAQ | Shammas Development",
  description:
    "Frequently asked questions about our software development, AI, e-commerce, and digital transformation services. Find answers to common questions.",
  keywords: [
    "FAQ",
    "frequently asked questions",
    "software development questions",
    "web development FAQ",
    "app development questions",
    "shammas development FAQ",
  ],
  openGraph: {
    title: "FAQ | Shammas Development",
    description: "Find answers to frequently asked questions about our services.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Shammas Development",
    description: "Find answers to frequently asked questions about our services.",
    images: ["/web-app-manifest-512x512.png"],
  },
};

const faqItems = [
  {
    question: "What services does Shammas Development offer?",
    answer:
      "We offer a comprehensive range of IT services including custom software development, web and mobile app development, AI/ML solutions, e-commerce platforms (Amazon, Shopify, Walmart), cloud management, game development, graphics design, and digital marketing services.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex enterprise application could take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer:
      "We work with businesses of all sizes, from early-stage startups to established enterprises. Our flexible engagement models allow us to tailor our services to meet your specific needs and budget constraints.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile development methodology with regular sprints and client check-ins. Our process includes discovery, design, development, testing, deployment, and ongoing support. You'll have full visibility into progress through regular updates and demos.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We maintain transparent communication through dedicated project managers, regular video calls, and collaborative tools like Slack or Microsoft Teams. You'll have direct access to your development team throughout the project.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Our team is proficient in modern technologies including React, Next.js, Node.js, Python, TypeScript, AWS, Google Cloud, and various AI/ML frameworks. We select the best technology stack based on your project requirements.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer comprehensive post-launch support and maintenance packages. This includes bug fixes, security updates, performance optimization, and feature enhancements to ensure your solution continues to perform optimally.",
  },
  {
    question: "How do you ensure the security of my project?",
    answer:
      "Security is a priority in all our projects. We implement industry best practices including secure coding standards, regular security audits, data encryption, and compliance with relevant regulations like GDPR and SOC 2.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Absolutely! We offer flexible engagement models including team augmentation, where our developers integrate seamlessly with your existing team, as well as dedicated team and project-based arrangements.",
  },
  {
    question: "How do I get started with Shammas Development?",
    answer:
      "Getting started is easy! Simply reach out through our contact form or schedule a free consultation call. We'll discuss your project requirements, provide recommendations, and create a customized proposal for your review.",
  },
];

// Generate JSON-LD structured data for FAQ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const FAQPage = () => {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageIntro eyebrow="FAQ" title="Frequently Asked Questions">
        <p>
          Find answers to common questions about our services, process, and how we can
          help bring your project to life.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-20 lg:mt-24 mb-24">
        <div className="mx-auto max-w-3xl">
          <Accordion items={faqItems} />

          {/* CTA Section */}
          <div className="mt-16 rounded-2xl bg-neutral-50 p-8 text-center">
            <h2 className="font-display text-xl font-semibold text-neutral-950">
              Still have questions?
            </h2>
            <p className="mt-2 text-neutral-600">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-neutral-950 px-6 py-3 font-semibold text-white transition hover:bg-neutral-800"
              >
                Contact Us
              </a>
              <a
                href="/get-quote"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-neutral-950 px-6 py-3 font-semibold text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* Social Share */}
          <div className="mt-12 flex justify-center">
            <SocialShare
              title="FAQ - Shammas Development"
              description="Find answers to frequently asked questions about our software development services."
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default FAQPage;
