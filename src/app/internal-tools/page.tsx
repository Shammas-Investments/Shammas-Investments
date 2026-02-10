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
  { name: "Internal Tools", path: "/internal-tools" },
]);

export const metadata: Metadata = {
  title: "Internal Tools Development | Shammas Development",
  description:
    "Custom internal tools that replace spreadsheets and manual workflows. Dashboards, admin panels, workflow software built for your team. Scope starts at $5K.",
  keywords: [
    "internal tools development",
    "custom dashboard development",
    "admin panel development",
    "workflow software",
    "replace spreadsheets",
    "custom business tools",
    "internal software development",
  ],
  openGraph: {
    title: "Internal Tools Development | Shammas Development",
    description:
      "Custom dashboards, admin panels, and workflow software that replace spreadsheets and manual processes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Internal Tools Development | Shammas Development",
    description:
      "Custom dashboards, admin panels, and workflow software that replace spreadsheets and manual processes.",
    images: ["/web-app-manifest-512x512.png"],
  },
  alternates: {
    canonical: "/internal-tools",
  },
};

const features = [
  {
    title: "Dashboards and Reporting",
    description:
      "Real-time dashboards that pull data from your existing systems and surface the metrics your team actually needs. No more exporting CSVs and building pivot tables.",
  },
  {
    title: "Admin Panels",
    description:
      "Custom admin interfaces for managing users, content, orders, inventory, or any data your team works with daily. Role-based access and audit logging included.",
  },
  {
    title: "Workflow Automation",
    description:
      "Approval flows, task routing, status tracking, and notifications. Replace the email chains and Slack threads with structured workflows that enforce your process.",
  },
  {
    title: "Data Management Tools",
    description:
      "Import, export, validate, and transform data across systems. Stop copying and pasting between spreadsheets and build tools that keep your data clean and connected.",
  },
  {
    title: "CRM and Internal Portals",
    description:
      "Custom CRM systems and internal portals built around the way your team actually works — not forced into a generic SaaS tool that requires workarounds.",
  },
  {
    title: "Integrations",
    description:
      "Connect your internal tools to the systems you already use: Slack, email, Stripe, Salesforce, Google Sheets, your database, or any API.",
  },
];

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Neo4j",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "Google Cloud",
  "Azure",
  "Terraform",
  "GraphQL",
  "REST APIs",
  "Tailwind CSS",
  "Prisma",
  "Drizzle ORM",
];

const InternalToolsPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro
        eyebrow="Internal Tools"
        title="Replace Spreadsheets and Manual Workflows"
      >
        <p>
          We build custom internal software for teams that have outgrown
          spreadsheets, duct-taped tools, and manual processes. Dashboards,
          admin panels, and workflow software — scoped clearly and delivered in
          weekly milestones.
        </p>
      </PageIntro>

      {/* What We Build */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            What we build
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Every internal tool is built to spec for your team. No templates, no
            drag-and-drop builders. Production-grade code with clean
            documentation and full handoff.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-16" faster>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FadeIn key={feature.title}>
                <div className="rounded-3xl bg-neutral-50 p-8 ring-1 ring-neutral-950/5">
                  <h3 className="font-display text-lg font-semibold text-neutral-950">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-base text-neutral-600">
                    {feature.description}
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
                How it works
              </h2>
              <div className="mt-8 space-y-6 text-neutral-300">
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-neutral-950">
                    1
                  </span>
                  <p>
                    <strong className="text-white">Scoping call.</strong> You
                    tell us what your team needs. We define requirements,
                    architecture, timeline, and budget.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-neutral-950">
                    2
                  </span>
                  <p>
                    <strong className="text-white">Weekly builds.</strong> We
                    deliver working software every week. You see real progress
                    and can give feedback as we go.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-neutral-950">
                    3
                  </span>
                  <p>
                    <strong className="text-white">Handoff.</strong> Clean
                    documentation, full source code, and deployment. Your team
                    owns everything.
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
              Ready to replace the spreadsheet?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-600">
              Projects start at $5K depending on scope. Tell us what you need
              and we will send you a free estimate within twenty-four hours.
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

export default InternalToolsPage;
