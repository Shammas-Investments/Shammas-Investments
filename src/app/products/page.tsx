import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import PageIntro from "@/components/PageIntro";
import { GridList, GridListItem } from "@/components/GridList";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
]);

export const metadata: Metadata = {
  title: "Products | Shammas Development",
  description:
    "Discover Roop - our premium gaming and branding platform designed for the gaming and gambling industry. Engage, compete, and build your digital presence.",
  keywords: [
    "roop gaming platform",
    "gaming software",
    "branding platform",
    "digital gaming ecosystem",
    "shammas development products",
  ],
  openGraph: {
    title: "Products | Shammas Development",
    description:
      "Discover Roop - our premium gaming and branding platform designed for the gaming and gambling industry.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Shammas Development",
    description:
      "Discover Roop - our premium gaming and branding platform designed for the gaming and gambling industry.",
    images: ["/web-app-manifest-512x512.png"],
  },
  alternates: {
    canonical: "/products",
  },
};

const ProductsPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageIntro eyebrow="Our Products" title="Roop - Premium Gaming & Branding Platform">
        <p>
          A comprehensive web and mobile platform designed for the gaming and gambling industry. Roop empowers players and brands to engage, compete, and build their presence in the digital gaming ecosystem.
        </p>
      </PageIntro>

      {/* Main Product Showcase */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-4xl bg-gradient-to-br from-neutral-900 to-neutral-950 p-12 sm:p-16 lg:p-20">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-5xl">
                  🎰
                </div>
                <div>
                  <h2 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                    Roop
                  </h2>
                  <p className="mt-2 text-lg text-neutral-300">
                    The Ultimate Gaming & Branding Platform
                  </p>
                </div>
              </div>

              <div className="mt-12 space-y-6 text-lg text-neutral-200">
                <p>
                  Roop is a cutting-edge web and mobile application platform designed specifically for the gaming and gambling industry. Whether you&apos;re a player looking for an immersive gaming experience or a brand seeking to establish your presence in the gaming world, Roop provides the tools and infrastructure you need.
                </p>
                <p>
                  Built with enterprise-grade security, real-time performance, and seamless user experience, Roop is the go-to platform for modern gaming enthusiasts and gaming brands.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-white px-8 py-4 font-semibold text-neutral-950 transition hover:bg-neutral-200"
                >
                  Request Demo
                </a>
                <a
                  href="/contact"
                  className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-neutral-950"
                >
                  Get Early Access
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Key Features */}
        <div className="mt-24">
          <FadeIn>
            <h3 className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
              Platform Features
            </h3>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-4xl bg-neutral-50 p-8 ring-1 ring-neutral-950/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-950 text-2xl">
                  🎮
                </div>
                <h4 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                  Gaming Platform
                </h4>
                <p className="mt-4 text-base text-neutral-600">
                  Advanced gaming infrastructure with real-time gameplay, secure transactions, and seamless user experience across web and mobile platforms.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-950">✓</span>
                    <span>Real-time multiplayer gaming engine</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-950">✓</span>
                    <span>Secure payment processing and payouts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-950">✓</span>
                    <span>Cross-platform compatibility (Web, iOS, Android)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-950">✓</span>
                    <span>Live tournaments and competitions</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="rounded-4xl bg-neutral-50 p-8 ring-1 ring-neutral-950/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-950 text-2xl">
                  🏆
                </div>
                <h4 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                  Brand Building Tools
                </h4>
                <p className="mt-4 text-base text-neutral-600">
                  Comprehensive branding and marketing tools for players and organizations to establish and grow their presence in the gaming community.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-950">✓</span>
                    <span>Custom player profiles and portfolios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-950">✓</span>
                    <span>Brand sponsorship and partnership tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-950">✓</span>
                    <span>Social media integration and sharing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-950">✓</span>
                    <span>Analytics and performance tracking</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="rounded-4xl bg-neutral-50 p-8 ring-1 ring-neutral-950/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-950 text-2xl">
                  🔒
                </div>
                <h4 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                  Enterprise Security
                </h4>
                <p className="mt-4 text-base text-neutral-600">
                  Built with security best practices and compliance-ready architecture. Designed to support regulated environments depending on implementation.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-950">✓</span>
                    <span>End-to-end encryption for all transactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-950">✓</span>
                    <span>Multi-factor authentication (MFA)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-950">✓</span>
                    <span>Access controls and audit logging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-950">✓</span>
                    <span>Continuous monitoring and threat detection</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="rounded-4xl bg-neutral-50 p-8 ring-1 ring-neutral-950/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-950 text-2xl">
                  📊
                </div>
                <h4 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                  Advanced Analytics
                </h4>
                <p className="mt-4 text-base text-neutral-600">
                  Comprehensive analytics dashboard providing insights into player performance, engagement metrics, and revenue analytics.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-950">✓</span>
                    <span>Real-time performance dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-950">✓</span>
                    <span>Player behavior and engagement tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-950">✓</span>
                    <span>Revenue and transaction reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-950">✓</span>
                    <span>Customizable KPI tracking</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Technology Stack */}
        <FadeIn className="mt-24">
          <div className="rounded-4xl bg-neutral-50 p-12">
            <h3 className="font-display text-2xl font-semibold text-neutral-950 sm:text-3xl">
              Built with Cutting-Edge Technology
            </h3>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "React Native",
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "Redis",
                "WebSocket",
                "Stripe",
                "AWS",
                "Google Cloud",
                "Azure",
                "Docker",
                "Kubernetes",
                "GraphQL",
                "TypeScript"
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Why Choose Roop */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="rounded-4xl bg-neutral-950 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl text-center">
              Why Choose Roop?
            </h2>
            <GridList className="mt-12">
              <GridListItem title="Scalable Infrastructure" invert>
                Built on cloud-native architecture that scales seamlessly from hundreds to millions of concurrent users.
              </GridListItem>
              <GridListItem title="Compliance-Ready" invert>
                Designed to support common regulatory requirements depending on implementation.
              </GridListItem>
              <GridListItem title="24/7 Support" invert>
                Round-the-clock technical support and platform monitoring to ensure uninterrupted service.
              </GridListItem>
            </GridList>
          </div>
        </div>
      </Container>

      {/* CTA Section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-4xl bg-gradient-to-r from-neutral-900 to-neutral-800 p-12 text-center">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Ready to Launch Your Gaming Platform?
            </h2>
            <p className="mt-4 text-lg text-neutral-300">
              Contact us to learn more about Roop and how we can customize it for your gaming business.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-full bg-white px-8 py-4 font-semibold text-neutral-950 transition hover:bg-neutral-200"
              >
                Schedule a Demo
              </a>
              <a
                href="/services"
                className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-neutral-950"
              >
                View Our Services
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  );
};

export default ProductsPage;
