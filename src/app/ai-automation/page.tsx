import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import PageIntro from "@/components/PageIntro";
import Button from "@/components/Button";
import TechCarousel from "@/components/TechCarousel";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "AI Automation", path: "/ai-automation" },
]);

export const metadata: Metadata = {
  title: "AI Automation Services | Shammas Development",
  description:
    "LLM-powered workflows and document processing. We build AI automation systems that replace manual, repetitive work with intelligent software.",
  keywords: [
    "AI automation",
    "LLM workflows",
    "document processing AI",
    "AI-powered automation",
    "intelligent workflow automation",
    "custom AI development",
    "ChatGPT integration",
    "Claude AI integration",
    "Gemini AI",
    "Mistral AI",
    "DeepSeek",
    "Ollama",
    "Qdrant vector database",
    "Neo4j graph database",
  ],
  openGraph: {
    title: "AI Automation Services | Shammas Development",
    description:
      "LLM-powered workflows and document processing that replace manual, repetitive work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services | Shammas Development",
    description:
      "LLM-powered workflows and document processing that replace manual, repetitive work.",
    images: ["/web-app-manifest-512x512.png"],
  },
  alternates: {
    canonical: "/ai-automation",
  },
};

const useCases = [
  {
    title: "Document Processing",
    description:
      "Extract, classify, and route data from invoices, contracts, emails, PDFs, and forms. Replace hours of manual data entry with an AI pipeline that runs in seconds.",
  },
  {
    title: "Intelligent Workflow Automation",
    description:
      "Build AI-powered workflows that triage support tickets, route requests, generate responses, and escalate edge cases to your team automatically.",
  },
  {
    title: "Custom AI Chatbots",
    description:
      "Internal knowledge bots and customer-facing chat systems built on your data. Trained on your documentation, SOPs, and knowledge base — not generic responses.",
  },
  {
    title: "Data Classification and Routing",
    description:
      "Automatically categorize incoming data, tag records, and route items to the right team or process based on content, urgency, or custom rules.",
  },
  {
    title: "Automated Reporting and Summarization",
    description:
      "Turn raw data into executive summaries, weekly reports, and structured insights. AI reads through the noise so your team gets what matters.",
  },
  {
    title: "Predictive Analytics",
    description:
      "Forecast demand, churn, revenue, or resource needs based on your historical data. Make decisions based on data, not gut feeling.",
  },
];

const techStack = [
  "Python",
  "OpenAI API",
  "Anthropic Claude",
  "Google Gemini",
  "Mistral",
  "DeepSeek",
  "Ollama",
  "LangChain",
  "Hugging Face",
  "Pinecone",
  "Qdrant",
  "Neo4j",
  "TensorFlow",
  "PyTorch",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
  "Google Cloud",
  "Azure",
  "Kubernetes",
  "Cloudera",
];

const AiAutomationPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro
        eyebrow="AI Automation"
        title="LLM-Powered Workflows That Replace Manual Work"
      >
        <p>
          We build AI automation systems for teams that are tired of doing
          repetitive work manually. Document processing, intelligent routing,
          automated reporting — powered by the latest language models and
          deployed as production-grade software.
        </p>
      </PageIntro>

      {/* Use Cases */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            What we automate
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Every AI system we build is custom. We do not sell pre-built bots or
            templates. We scope the workflow, build the pipeline, and deploy it
            into your environment.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-16" faster>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <FadeIn key={useCase.title}>
                <div className="rounded-3xl bg-neutral-50 p-8 ring-1 ring-neutral-950/5">
                  <h3 className="font-display text-lg font-semibold text-neutral-950">
                    {useCase.title}
                  </h3>
                  <p className="mt-3 text-base text-neutral-600">
                    {useCase.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>

      {/* How It Works */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="rounded-4xl bg-neutral-950 px-8 py-16 sm:px-16 sm:py-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                How we build AI automation
              </h2>
              <div className="mt-8 space-y-6 text-neutral-300">
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-neutral-950">
                    1
                  </span>
                  <p>
                    <strong className="text-white">Map the workflow.</strong> We
                    document the manual process end to end — what triggers it,
                    what decisions are made, and what the output looks like.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-neutral-950">
                    2
                  </span>
                  <p>
                    <strong className="text-white">
                      Build and validate.
                    </strong>{" "}
                    We build the AI pipeline, test it against your real data, and
                    iterate until accuracy meets your threshold.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-neutral-950">
                    3
                  </span>
                  <p>
                    <strong className="text-white">Deploy and monitor.</strong>{" "}
                    We deploy to your infrastructure with logging, error
                    handling, and monitoring so you know it is working.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Tech Stack */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Technology
          </h2>
          <div className="mt-6">
            <TechCarousel items={techStack} />
          </div>
        </FadeIn>
      </Container>

      {/* CTA */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="rounded-4xl bg-neutral-50 p-8 text-center ring-1 ring-neutral-950/5 sm:p-16">
            <h2 className="font-display text-2xl font-semibold text-neutral-950 sm:text-3xl">
              Stop doing it manually
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-600">
              Tell us what workflow you want to automate. We will scope it and
              get back to you within twenty-four hours.
            </p>
            <div className="mt-8">
              <Button href="/get-quote">Get a Build Plan</Button>
            </div>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  );
};

export default AiAutomationPage;
