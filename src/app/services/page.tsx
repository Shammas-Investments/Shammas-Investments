import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import PageIntro from "@/components/PageIntro";
import Button from "@/components/Button";
import SocialShare from "@/components/SocialShare";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import React from "react";
import type { Metadata } from "next";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

export const metadata: Metadata = {
  title: "Services | Shammas Development",
  description:
    "Custom software and AI automation services. Internal tools development, AI automation, MVP and SaaS development, cloud and DevOps, e-commerce platforms, and digital transformation consulting.",
  keywords: [
    "internal tools development",
    "AI automation services",
    "MVP development",
    "SaaS development",
    "cloud and DevOps",
    "custom software solutions",
    "e-commerce development",
    "digital transformation",
  ],
  openGraph: {
    title: "Services | Shammas Development",
    description:
      "Custom software and AI automation services. Internal tools, AI workflows, MVP development, cloud and DevOps.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Shammas Development",
    description:
      "Custom software and AI automation services. Internal tools, AI workflows, MVP development, cloud and DevOps.",
    images: ["/web-app-manifest-512x512.png"],
  },
  alternates: {
    canonical: "/services",
  },
};

// Individual Service Component
interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: string;
  id: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ title, description, features, technologies, icon, id }) => {
  return (
    <div id={id} className="scroll-mt-24">
      <FadeIn>
        <article className="rounded-4xl bg-neutral-50 p-8 ring-1 ring-neutral-950/5 transition hover:bg-neutral-100 sm:p-10">
          <div className="flex items-start gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 text-4xl">
              {icon}
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl font-semibold text-neutral-950 sm:text-3xl">
                {title}
              </h3>
              <p className="mt-4 text-base text-neutral-600">{description}</p>

              {features && features.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-neutral-950">Key Features:</h4>
                  <ul className="mt-3 space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-neutral-600">
                        <span className="mt-1 text-neutral-950">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {technologies && technologies.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-neutral-950">Technologies:</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
      </FadeIn>
    </div>
  );
};

const ServicesPage = () => {
  // Breadcrumb schema is rendered in the component
  const services = [
    {
      id: "internal-tools",
      title: "Internal Tools Development",
      icon: "💻",
      description: "Replace spreadsheets and manual workflows with purpose-built internal software. We build dashboards, admin panels, and workflow tools that streamline your operations and give your team the systems they actually need.",
      features: [
        "Custom admin panels and dashboards",
        "Workflow automation and approval systems",
        "Data management and reporting tools",
        "Role-based access and team collaboration features",
        "Integration with existing tools and APIs",
        "Real-time data syncing and notifications",
        "Custom CRM and internal portals",
        "Legacy system replacement and migration"
      ],
      technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB", "Neo4j", "Redis", "Docker", "AWS", "Google Cloud", "Azure"]
    },
    {
      id: "ai-automation",
      title: "AI Automation",
      icon: "🤖",
      description: "Automate repetitive work with AI-powered workflows. From document processing to intelligent routing, we build LLM-powered systems that handle the tasks your team shouldn't be doing manually.",
      features: [
        "LLM-powered document processing and extraction",
        "Intelligent workflow automation",
        "Custom AI chatbots for internal and customer-facing use",
        "Natural Language Processing pipelines",
        "AI-powered data classification and routing",
        "Predictive analytics and forecasting",
        "Automated reporting and summarization",
        "Integration with OpenAI, Claude, Gemini, Mistral, DeepSeek, and open-source models"
      ],
      technologies: ["Python", "OpenAI API", "Anthropic Claude", "Google Gemini", "Mistral", "DeepSeek", "Ollama", "LangChain", "Hugging Face", "Pinecone", "Qdrant", "Neo4j", "TensorFlow", "FastAPI"]
    },
    {
      id: "mvp-saas",
      title: "MVP and SaaS Development",
      icon: "🚀",
      description: "Build scalable MVPs and SaaS products that are production-ready from day one. We take your idea from concept to launch with clean architecture, modern tooling, and a focus on getting to market fast.",
      features: [
        "Rapid MVP development and validation",
        "Full-stack SaaS product builds",
        "Multi-tenant architecture and user management",
        "Billing and subscription integration (Stripe)",
        "Mobile-responsive web applications",
        "Progressive Web Apps (PWAs)",
        "API development and third-party integrations",
        "Scalable architecture designed for growth"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Stripe", "Vercel", "AWS", "Google Cloud", "Azure", "Docker"]
    },
    {
      id: "cloud",
      title: "Cloud and DevOps",
      icon: "☁️",
      description: "CI/CD pipelines, infrastructure, and security hardening. We set up and manage your cloud environment so your team can ship faster without worrying about infrastructure.",
      features: [
        "CI/CD pipeline setup and automation",
        "AWS, Azure, and Google Cloud Platform expertise",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Container orchestration with Kubernetes",
        "Cloud migration and modernization",
        "24/7 monitoring, alerting, and incident response",
        "Cost optimization and resource management",
        "Security hardening and compliance"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Cloudera", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "GitLab CI", "Prometheus", "Grafana"]
    },
    {
      id: "ecommerce",
      title: "E-Commerce Platform Management",
      icon: "🛒",
      description: "Comprehensive e-commerce solutions to maximize your online sales. We specialize in Amazon Seller Central, Walmart Marketplace, and Shopify, helping you optimize listings, manage inventory, and scale your online business.",
      features: [
        "Amazon Seller Central account setup and optimization",
        "Walmart Marketplace integration and management",
        "Shopify store development and customization",
        "Product listing optimization with SEO best practices",
        "Inventory management and order fulfillment systems",
        "Multi-channel selling strategy and automation",
        "Payment gateway integration and security",
        "Analytics and reporting dashboards"
      ],
      technologies: ["Shopify", "Amazon MWS API", "Walmart API", "Stripe", "PayPal", "WooCommerce", "BigCommerce"]
    },
    {
      id: "consulting",
      title: "Digital Transformation Consulting",
      icon: "📋",
      description: "Technology strategy and roadmap planning for teams that need to modernize. We assess your current stack, identify bottlenecks, and build a plan to get you where you need to be.",
      features: [
        "Technology stack assessment and recommendations",
        "Process automation and workflow optimization",
        "Legacy system modernization planning",
        "Cybersecurity assessment and implementation",
        "Data strategy and analytics implementation",
        "Agile transformation and DevOps adoption",
        "Architecture review and scalability planning"
      ],
      technologies: ["Enterprise Architecture", "Agile", "Scrum", "DevOps", "ITIL"]
    }
  ];

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro eyebrow="Our Services" title="Custom Software and AI Automation Services">
        <p>
          We help teams replace manual work with reliable software. Internal tools, AI automation, MVPs, and cloud infrastructure — built to spec, delivered on time.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-12 sm:space-y-16">
          {services.map((service, index) => (
            <ServiceDetail key={index} {...service} />
          ))}
        </div>

        {/* CTA Section */}
        <FadeIn>
          <div className="mt-16 rounded-4xl bg-neutral-950 p-8 text-center sm:mt-20 sm:p-12">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-neutral-300">
              Tell us what you need built. We will scope it and get back to you within twenty-four hours.
            </p>
            <div className="mt-8">
              <Button href="/get-quote" invert>
                Get a Build Plan
              </Button>
            </div>
          </div>
        </FadeIn>

        {/* Social Share */}
        <FadeIn>
          <div className="mt-12 flex justify-center">
            <SocialShare
              title="Services - Shammas Development"
              description="Explore our software development, AI/ML, e-commerce, and cloud services."
            />
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  );
};

export default ServicesPage;
