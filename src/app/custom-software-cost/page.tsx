import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import PageIntro from "@/components/PageIntro";
import Button from "@/components/Button";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Custom Software Cost", path: "/custom-software-cost" },
]);

export const metadata: Metadata = {
  title: "Custom Software Development Cost | Shammas Development",
  description:
    "Custom software development pricing. Internal tools starting at $5K, AI automation starting at $10K, MVP builds starting at $20K. Get a free estimate.",
  keywords: [
    "custom software cost",
    "software development pricing",
    "internal tools cost",
    "AI automation pricing",
    "MVP development cost",
    "software development budget",
    "how much does custom software cost",
  ],
  openGraph: {
    title: "Custom Software Development Cost | Shammas Development",
    description:
      "Custom software pricing. Get a free estimate for internal tools, AI automation, and MVP builds.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Cost | Shammas Development",
    description:
      "Custom software pricing. Get a free estimate for internal tools, AI automation, and MVP builds.",
    images: ["/web-app-manifest-512x512.png"],
  },
  alternates: {
    canonical: "/custom-software-cost",
  },
};

const pricingTiers = [
  {
    name: "Internal Tools",
    startingAt: "$5K",
    timeline: "Starting at 4 weeks",
    description: "Dashboards, admin panels, and workflow tools that replace manual processes. Final cost depends on scope and integrations.",
    includes: [
      "Custom UI built for your team",
      "Database design and API development",
      "Role-based access control",
      "Integration with existing systems",
      "Documentation and handoff",
    ],
    href: "/internal-tools",
  },
  {
    name: "AI Automation",
    startingAt: "$10K",
    timeline: "Starting at 4 weeks",
    description: "LLM-powered workflows that automate document processing, classification, and reporting. Scoped to your specific use case.",
    includes: [
      "Workflow mapping and scoping",
      "AI pipeline development",
      "Testing against your real data",
      "Monitoring and error handling",
      "Deployment to your infrastructure",
    ],
    href: "/ai-automation",
  },
  {
    name: "MVP and SaaS Products",
    startingAt: "$20K",
    timeline: "Starting at 6 weeks",
    description: "Full-stack products with authentication, payments, and scalable architecture. We scope every project individually.",
    includes: [
      "Full-stack development (frontend + backend)",
      "Authentication and user management",
      "Stripe billing integration",
      "Production deployment and CI/CD",
      "Clean documentation and source code ownership",
    ],
    href: "/mvp-development",
  },
];

const CustomSoftwareCostPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro
        eyebrow="Pricing"
        title="Custom Software, Priced for Your Scope"
      >
        <p>
          Every project is different. Below are starting points to give you a
          sense of investment. We scope every project individually and provide a
          detailed estimate before any work begins — no surprises, no lock-in.
        </p>
      </PageIntro>

      {/* Pricing Tiers */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <FadeIn key={tier.name}>
              <div className="flex h-full flex-col rounded-3xl bg-neutral-50 p-8 ring-1 ring-neutral-950/5">
                <h3 className="font-display text-xl font-semibold text-neutral-950">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-neutral-500">
                  Starting at
                </p>
                <p className="mt-1 text-4xl font-bold text-neutral-950">
                  {tier.startingAt}
                </p>
                <p className="mt-1 text-sm text-neutral-500">
                  {tier.timeline}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {tier.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-neutral-600"
                    >
                      <span className="mt-0.5 text-neutral-950">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/get-quote" className="w-full justify-center">
                    Get Your Estimate
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* What Affects Cost */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="rounded-4xl bg-neutral-950 px-8 py-16 sm:px-16 sm:py-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                What affects the cost
              </h2>
              <div className="mt-8 space-y-6 text-neutral-300">
                <p>
                  <strong className="text-white">Scope and complexity.</strong>{" "}
                  A simple dashboard with five views costs less than a
                  multi-tenant SaaS platform with billing, notifications, and
                  third-party integrations.
                </p>
                <p>
                  <strong className="text-white">Integrations.</strong>{" "}
                  Connecting to external APIs, legacy systems, or third-party
                  services adds development time depending on the quality of
                  their documentation and APIs.
                </p>
                <p>
                  <strong className="text-white">AI components.</strong> AI
                  automation projects include model evaluation, prompt
                  engineering, testing against real data, and monitoring — all of
                  which require additional engineering effort.
                </p>
                <p>
                  <strong className="text-white">Timeline.</strong> Faster
                  delivery may require a larger team, which affects cost. We
                  always recommend a realistic timeline that balances speed with
                  quality.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* What's Included */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Every project includes
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              "Detailed estimate before any work begins",
              "Weekly demo calls with working software",
              "Clean documentation and full source code",
              "Production deployment and CI/CD setup",
              "Thirty days of post-launch bug fixes",
              "Full ownership of code and intellectual property",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 text-neutral-950">&#10003;</span>
                <p className="text-base text-neutral-600">{item}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>

      {/* CTA */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="rounded-4xl bg-neutral-50 p-8 text-center ring-1 ring-neutral-950/5 sm:p-16">
            <h2 className="font-display text-2xl font-semibold text-neutral-950 sm:text-3xl">
              Get a free estimate for your project
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-600">
              Tell us what you need built and we will send you a detailed
              estimate within twenty-four hours. No commitment required.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/get-quote">Get Your Estimate</Button>
              <Button href="/contact" className="bg-white !text-neutral-950 border-2 border-neutral-950 hover:!bg-neutral-100">
                Book a Strategy Call
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  );
};

export default CustomSoftwareCostPage;
