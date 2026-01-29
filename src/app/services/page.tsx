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
    "Explore our services: custom software development, AI/ML solutions, e-commerce platforms, cloud management, game development, and digital transformation consulting.",
  keywords: [
    "software development services",
    "AI ML development",
    "e-commerce development",
    "cloud management services",
    "custom software solutions",
    "game development",
    "digital transformation",
  ],
  openGraph: {
    title: "Services | Shammas Development",
    description:
      "Custom software development, AI/ML solutions, e-commerce platforms, cloud management, and digital transformation consulting.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Shammas Development",
    description:
      "Custom software development, AI/ML solutions, e-commerce platforms, cloud management, and digital transformation consulting.",
    images: ["/web-app-manifest-512x512.png"],
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
      id: "software",
      title: "Software & Application Development",
      icon: "💻",
      description: "We build custom software solutions tailored to your unique business needs. From enterprise applications to lightweight tools, our development team delivers scalable, maintainable, and high-performance software that drives your business forward.",
      features: [
        "Custom web applications with modern frameworks (React, Next.js, Vue.js)",
        "Mobile applications for iOS and Android (React Native, Flutter, Swift, Kotlin)",
        "Enterprise software solutions with complex business logic",
        "Progressive Web Apps (PWAs) for cross-platform compatibility",
        "API development and third-party integrations",
        "Legacy system modernization and migration",
        "Microservices architecture and cloud-native applications",
        "Real-time applications with WebSockets and server-sent events"
      ],
      technologies: ["React", "Next.js", "Node.js", "Python", "Django", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes"]
    },
    {
      id: "game",
      title: "Game Development",
      icon: "🎮",
      description: "Create immersive gaming experiences across all platforms. Our game development team brings your creative vision to life with cutting-edge graphics, engaging gameplay mechanics, and seamless performance across mobile, desktop, and console platforms.",
      features: [
        "2D and 3D game development for all platforms",
        "Mobile games (iOS and Android)",
        "PC and console game development",
        "Multiplayer and online gaming systems",
        "Game engine customization (Unity, Unreal Engine)",
        "Virtual Reality (VR) and Augmented Reality (AR) experiences",
        "Game monetization strategies and in-app purchases",
        "Performance optimization and quality assurance"
      ],
      technologies: ["Unity", "Unreal Engine", "C#", "C++", "Blender", "Photon", "PlayFab", "WebGL"]
    },
    {
      id: "ecommerce",
      title: "E-Commerce Platform Management",
      icon: "🛒",
      description: "Comprehensive e-commerce solutions to maximize your online sales. We specialize in Amazon Seller Central, Walmart Marketplace, and Shopify, helping you optimize listings, manage inventory, and scale your online business profitably.",
      features: [
        "Amazon Seller Central account setup and optimization",
        "Walmart Marketplace integration and management",
        "Shopify store development and customization",
        "Product listing optimization with SEO best practices",
        "Inventory management and order fulfillment systems",
        "Multi-channel selling strategy and automation",
        "Payment gateway integration and security",
        "Analytics and reporting dashboards",
        "Customer review management and reputation building"
      ],
      technologies: ["Shopify", "Amazon MWS API", "Walmart API", "Stripe", "PayPal", "WooCommerce", "BigCommerce", "Google Analytics"]
    },
    {
      id: "ai-ml",
      title: "AI/ML & LLM Chatbot Development",
      icon: "🤖",
      description: "Harness the power of artificial intelligence and machine learning to automate processes, gain insights from data, and create intelligent chatbots that enhance customer experience. We build AI solutions that deliver real business value.",
      features: [
        "Custom AI/ML model development and training",
        "Large Language Model (LLM) integration (GPT, Claude, Llama)",
        "Intelligent chatbots for customer support and sales",
        "Natural Language Processing (NLP) applications",
        "Computer vision and image recognition systems",
        "Predictive analytics and forecasting models",
        "Recommendation engines and personalization",
        "AI-powered automation and workflow optimization",
        "Voice assistants and speech recognition"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "Anthropic Claude", "Hugging Face", "LangChain", "Pinecone", "Scikit-learn"]
    },
    {
      id: "cloud",
      title: "Cloud Management & Infrastructure",
      icon: "☁️",
      description: "Expert cloud infrastructure management across AWS, Azure, and Google Cloud. We design, deploy, and manage scalable cloud architectures that ensure high availability, security, and cost-efficiency for your applications and data.",
      features: [
        "Cloud architecture design and implementation",
        "AWS, Azure, and Google Cloud Platform expertise",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Container orchestration with Kubernetes",
        "CI/CD pipeline setup and automation",
        "Cloud migration from on-premise to cloud",
        "24/7 monitoring, alerting, and incident response",
        "Cost optimization and resource management",
        "Disaster recovery and backup strategies",
        "Security compliance and governance"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Docker", "Kubernetes", "Jenkins", "GitLab CI", "Prometheus", "Grafana"]
    },
    {
      id: "graphics",
      title: "Graphics Design & Content Management",
      icon: "🎨",
      description: "Professional graphic design services and comprehensive content management solutions. We create stunning visuals that communicate your brand message and implement CMS systems that make content updates simple and efficient.",
      features: [
        "Brand identity design (logos, color schemes, typography)",
        "Marketing materials (brochures, flyers, presentations)",
        "Social media graphics and templates",
        "UI/UX design for web and mobile applications",
        "Infographics and data visualization",
        "Content Management System (CMS) implementation",
        "WordPress, Contentful, Strapi customization",
        "Digital asset management and organization",
        "Print design and production-ready files"
      ],
      technologies: ["Adobe Creative Suite", "Figma", "Sketch", "WordPress", "Contentful", "Strapi", "Sanity", "Webflow"]
    },
    {
      id: "social-media",
      title: "Social Media Management",
      icon: "📱",
      description: "Strategic social media management to build your brand presence and engage your audience. We handle everything from content creation to community management, analytics, and paid advertising campaigns across all major platforms.",
      features: [
        "Social media strategy development",
        "Content creation and scheduling",
        "Community management and engagement",
        "Paid advertising campaigns (Facebook, Instagram, LinkedIn, Twitter)",
        "Influencer partnership coordination",
        "Analytics and performance reporting",
        "Brand reputation monitoring",
        "Social media crisis management",
        "Multi-platform management and automation"
      ],
      technologies: ["Hootsuite", "Buffer", "Sprout Social", "Meta Business Suite", "LinkedIn Campaign Manager", "Canva", "Later"]
    },
    {
      id: "consulting",
      title: "Digital Transformation Consulting",
      icon: "🚀",
      description: "End-to-end IT consulting services to modernize your business operations and accelerate your digital transformation journey. We assess your current infrastructure, identify opportunities, and implement solutions that drive efficiency and innovation.",
      features: [
        "Digital strategy development and roadmap planning",
        "Technology stack assessment and recommendations",
        "Process automation and workflow optimization",
        "Legacy system modernization",
        "Change management and training programs",
        "Cybersecurity assessment and implementation",
        "Data strategy and analytics implementation",
        "Agile transformation and DevOps adoption",
        "Vendor selection and technology evaluation"
      ],
      technologies: ["Enterprise Architecture", "Business Process Management", "Agile", "Scrum", "DevOps", "ITIL", "Six Sigma"]
    }
  ];

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro eyebrow="Our Services" title="Practical Engineering Solutions">
        <p>
          Our services are designed to help businesses build, automate, and scale technology with confidence. We deliver practical engineering solutions that solve real operational problems.
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
              Build your custom service plan and get an instant quote for your project.
            </p>
            <div className="mt-8">
              <Button href="/get-quote" invert>
                Get a Custom Quote
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
