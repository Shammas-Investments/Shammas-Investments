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
    "Frequently asked questions about internal tools development, AI automation, MVP builds, pricing, and how we work. Get clear answers before you start.",
  keywords: [
    "FAQ",
    "internal tools cost",
    "AI automation pricing",
    "MVP development FAQ",
    "software development questions",
    "shammas development FAQ",
  ],
  openGraph: {
    title: "FAQ | Shammas Development",
    description: "Frequently asked questions about our services, pricing, and how we work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Shammas Development",
    description: "Frequently asked questions about our services, pricing, and how we work.",
    images: ["/web-app-manifest-512x512.png"],
  },
  alternates: {
    canonical: "/faq",
  },
};

const faqItems = [
  {
    question: "What does internal tools development cost?",
    answer:
      "Projects typically start at five thousand dollars for internal tools and scale based on scope and complexity. We provide a detailed, no-obligation estimate before any work begins so you know exactly what to expect. Every project is scoped individually — fill out our estimate form or book a strategy call to get your personalized quote.",
  },
  {
    question: "What services does Shammas Development offer?",
    answer:
      "We focus on internal tools development, AI automation, MVP and SaaS builds, cloud and DevOps, and e-commerce platform management. We do not offer graphic design, social media management, or marketing services. Everything we build is custom software for teams that need reliable, production-grade systems.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most internal tools and AI automation projects take four to twelve weeks. MVPs typically take six to sixteen weeks depending on complexity. We provide a detailed timeline during scoping and deliver working software in weekly milestones so you can see progress throughout.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow a milestone-based delivery process with weekly demos. Every project starts with a scoping phase where we define requirements, architecture, and timeline. From there, we build in one-week sprints and show you working software at the end of each sprint. No black box development.",
  },
  {
    question: "Do you outsource any of the work?",
    answer:
      "No. All work is done by our in-house senior team. There is no outsourcing, no bait and switch, and no junior handoffs. The engineers you meet during scoping are the same engineers who build your system.",
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer:
      "We work with both. Startups typically engage us for MVP and SaaS builds. Established businesses usually need internal tools or AI automation to replace manual processes. Our engagement models are flexible and we scope projects to fit your budget and timeline.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Our core stack includes React, Next.js, Node.js, Python, TypeScript, PostgreSQL, and AWS. For AI work we use OpenAI, Anthropic Claude, Google Gemini, Mistral, DeepSeek, Ollama, LangChain, Hugging Face, Qdrant, and Neo4j. We select the best tools for each project rather than forcing a one-size-fits-all stack.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes. Every project includes clean documentation and a full handoff so your team can maintain the system independently. We also offer ongoing support and maintenance packages for teams that want us to continue managing updates, bug fixes, and feature enhancements.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "You get a dedicated point of contact, weekly demo calls, and async communication through Slack or your preferred tool. We share progress in real time and you always have direct access to the engineering team building your system.",
  },
  {
    question: "How do I get started?",
    answer:
      "Submit a build plan request through our contact form or get-a-quote page. Tell us what you are building and we will respond within twenty-four hours with next steps. From there we schedule a scoping call to define requirements, timeline, and budget.",
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
