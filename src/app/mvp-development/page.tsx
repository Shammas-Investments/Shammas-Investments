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
  { name: "MVP Development", path: "/mvp-development" },
]);

export const metadata: Metadata = {
  title: "MVP Development | Shammas Development",
  description:
    "Production-ready MVPs built to scale. We take your idea from concept to launch with clean architecture, modern tooling, and a focus on getting to market fast.",
  keywords: [
    "MVP development",
    "minimum viable product",
    "SaaS development",
    "startup MVP",
    "product development",
    "rapid prototyping",
    "MVP builder",
    "launch MVP fast",
  ],
  openGraph: {
    title: "MVP Development | Shammas Development",
    description:
      "Production-ready MVPs built to scale. From concept to launch with clean architecture and modern tooling.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Development | Shammas Development",
    description:
      "Production-ready MVPs built to scale. From concept to launch with clean architecture and modern tooling.",
    images: ["/web-app-manifest-512x512.png"],
  },
  alternates: {
    canonical: "/mvp-development",
  },
};

const features = [
  {
    title: "Rapid MVP Development",
    description:
      "Go from idea to working product in six to sixteen weeks. We validate assumptions early, ship fast, and build on a foundation that scales when you need it to.",
  },
  {
    title: "Full-Stack Product Builds",
    description:
      "Frontend, backend, database, authentication, payments, and deployment. We build the entire product — not just a prototype that needs to be rebuilt later.",
  },
  {
    title: "Multi-Tenant SaaS Architecture",
    description:
      "User management, team workspaces, role-based access, and data isolation built in from day one. Ready for your first ten customers or your first ten thousand.",
  },
  {
    title: "Billing and Subscriptions",
    description:
      "Stripe integration with subscription management, usage-based billing, free trials, and upgrade flows. Revenue infrastructure that works out of the box.",
  },
  {
    title: "Mobile-Responsive and PWA",
    description:
      "Every product we build works on desktop and mobile. Progressive Web App support means your users can install it on their phone without an app store.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Clean code, proper database design, caching, and infrastructure that grows with your user base. No rewrites needed when traction hits.",
  },
];

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Stripe",
  "Vercel",
  "Docker",
  "Kubernetes",
  "AWS",
  "Google Cloud",
  "Azure",
  "Tailwind CSS",
  "Prisma",
  "GraphQL",
  "REST APIs",
  "GitHub Actions",
  "Sentry",
];

const MvpDevelopmentPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro
        eyebrow="MVP Development"
        title="Production-Ready MVPs Built to Scale"
      >
        <p>
          We build MVPs and SaaS products that are ready for real users from day
          one. Clean architecture, modern tooling, and a focus on getting to
          market fast — without cutting corners that cost you later.
        </p>
      </PageIntro>

      {/* What We Build */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            What you get
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Not a clickable prototype. Not a proof of concept. A working product
            with real authentication, real data, and real infrastructure that you
            can put in front of customers.
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
                From idea to launch
              </h2>
              <div className="mt-8 space-y-6 text-neutral-300">
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-neutral-950">
                    1
                  </span>
                  <p>
                    <strong className="text-white">Scope and plan.</strong> We
                    define the feature set, user flows, architecture, and
                    timeline. You know exactly what you are getting and when.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-neutral-950">
                    2
                  </span>
                  <p>
                    <strong className="text-white">Build in sprints.</strong> We
                    ship working features every week. You test with real users
                    early and iterate based on feedback — not assumptions.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-neutral-950">
                    3
                  </span>
                  <p>
                    <strong className="text-white">Launch and grow.</strong>{" "}
                    Deployed, documented, and ready for customers. We can stay on
                    for ongoing development or hand off completely.
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
              Ready to build your product?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-600">
              Most MVPs take six to sixteen weeks. Tell us what you are building
              and we will scope it within twenty-four hours.
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

export default MvpDevelopmentPage;
