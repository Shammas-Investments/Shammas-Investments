export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  duration: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  services: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
  image: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-ecommerce-platform",
    title: "Enterprise E-Commerce Platform",
    client: "Fortune 500 Retailer",
    industry: "Retail & E-Commerce",
    year: "2024",
    duration: "8 months",
    description:
      "Developed a comprehensive multi-channel e-commerce platform integrating Amazon, Walmart, and Shopify with centralized inventory management and automated order processing.",
    longDescription:
      "Our client, a Fortune 500 retailer, was struggling with fragmented sales channels, inventory discrepancies, and manual order processing that cost them millions in lost revenue and operational inefficiencies. They needed a unified platform that could handle their multi-channel presence while providing real-time visibility into inventory and orders.",
    challenge:
      "The retailer was managing inventory across 12 warehouses, selling on 5 different marketplaces, and processing over 50,000 orders daily. Their legacy systems couldn't keep up, leading to overselling, stockouts, and customer complaints. They needed a solution that could scale with their growth while reducing operational overhead.",
    solution:
      "We designed and built a custom enterprise platform that unified all sales channels into a single dashboard. The solution included real-time inventory synchronization across all warehouses, automated order routing based on proximity and stock levels, AI-powered demand forecasting, and seamless integration with their existing ERP and WMS systems.",
    results: [
      "300% increase in online sales within 6 months",
      "Reduced order processing time by 75%",
      "Improved inventory accuracy to 99.8%",
      "Eliminated overselling incidents completely",
      "$2.4M annual savings in operational costs",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Kafka",
      "Elasticsearch",
    ],
    services: [
      "Custom Software Development",
      "E-Commerce Integration",
      "Cloud Architecture",
      "API Development",
    ],
    testimonial: {
      quote:
        "Shammas Development transformed our entire e-commerce operation. The platform they built has become the backbone of our digital strategy.",
      author: "Michael Chen",
      role: "VP of Digital Commerce",
    },
    metrics: [
      { label: "Sales Increase", value: "300%" },
      { label: "Processing Time", value: "-75%" },
      { label: "Inventory Accuracy", value: "99.8%" },
      { label: "Annual Savings", value: "$2.4M" },
    ],
    image: "/images/case-studies/ecommerce-platform.jpg",
    featured: true,
  },
  {
    slug: "ai-customer-support-system",
    title: "AI-Powered Customer Support System",
    client: "SaaS Technology Company",
    industry: "Technology & Software",
    year: "2024",
    duration: "5 months",
    description:
      "Built an intelligent chatbot system using LLM technology to handle customer inquiries, reducing support ticket volume and improving response times.",
    longDescription:
      "A fast-growing SaaS company was experiencing exponential growth in customer support requests. Their small support team was overwhelmed, leading to long response times and declining customer satisfaction. They needed an AI solution that could handle routine inquiries while maintaining the quality of human interaction.",
    challenge:
      "The support team was handling 3,000+ tickets per week with only 8 agents. Average response time had grown to 18 hours, and customer satisfaction scores were dropping. They needed to scale support without proportionally increasing headcount.",
    solution:
      "We developed a custom AI chatbot powered by GPT-4 and Claude, trained on their knowledge base and support history. The system includes natural language understanding, context-aware responses, seamless human handoff, and continuous learning from resolved tickets.",
    results: [
      "65% reduction in support ticket volume",
      "24/7 automated customer support",
      "Customer satisfaction score increased to 4.8/5",
      "Average response time reduced to under 30 seconds",
      "Support team now focuses on complex issues",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "OpenAI GPT-4",
      "Claude API",
      "Pinecone",
      "LangChain",
      "PostgreSQL",
    ],
    services: [
      "AI/ML Development",
      "Chatbot Development",
      "NLP Solutions",
      "API Integration",
    ],
    testimonial: {
      quote:
        "The AI support system feels like magic. Our customers get instant, accurate responses, and our team can finally focus on what matters.",
      author: "Sarah Johnson",
      role: "Head of Customer Success",
    },
    metrics: [
      { label: "Ticket Reduction", value: "65%" },
      { label: "Response Time", value: "<30s" },
      { label: "CSAT Score", value: "4.8/5" },
      { label: "Availability", value: "24/7" },
    ],
    image: "/images/case-studies/ai-support.jpg",
    featured: true,
  },
  {
    slug: "cloud-infrastructure-migration",
    title: "Cloud Infrastructure Migration",
    client: "Financial Services Firm",
    industry: "Finance & Banking",
    year: "2023",
    duration: "6 months",
    description:
      "Migrated legacy on-premise infrastructure to AWS with improved security, scalability, and 99.99% uptime guarantee.",
    longDescription:
      "A mid-sized financial services firm was running critical applications on aging on-premise infrastructure. The hardware was approaching end-of-life, and the firm faced compliance challenges with upcoming regulatory requirements. They needed to modernize their infrastructure while ensuring zero disruption to their 24/7 trading operations.",
    challenge:
      "The migration involved 47 servers running mission-critical financial applications, strict regulatory requirements (SOC 2, PCI DSS), zero tolerance for downtime during trading hours, and complex data residency requirements across multiple jurisdictions.",
    solution:
      "We executed a phased migration strategy with comprehensive disaster recovery, implemented infrastructure as code using Terraform, set up multi-region deployment for high availability, established automated compliance monitoring, and created detailed runbooks for operations.",
    results: [
      "40% reduction in infrastructure costs",
      "Zero downtime during migration",
      "Enhanced security compliance (SOC 2, PCI DSS)",
      "99.99% uptime achieved post-migration",
      "Disaster recovery time reduced from 4 hours to 15 minutes",
    ],
    technologies: [
      "AWS",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Prometheus",
      "Grafana",
    ],
    services: [
      "Cloud Migration",
      "Infrastructure Design",
      "DevOps",
      "Security Implementation",
    ],
    metrics: [
      { label: "Cost Reduction", value: "40%" },
      { label: "Uptime", value: "99.99%" },
      { label: "DR Time", value: "15min" },
      { label: "Servers Migrated", value: "47" },
    ],
    image: "/images/case-studies/cloud-migration.jpg",
    featured: true,
  },
  {
    slug: "mobile-gaming-application",
    title: "Mobile Gaming Application",
    client: "Entertainment Startup",
    industry: "Gaming & Entertainment",
    year: "2024",
    duration: "10 months",
    description:
      "Developed a multiplayer mobile game with real-time gameplay, in-app purchases, and social features for iOS and Android platforms.",
    longDescription:
      "An entertainment startup had a unique game concept but lacked the technical expertise to bring it to life. They envisioned a casual multiplayer game that could compete with established titles while offering innovative gameplay mechanics and strong social features.",
    challenge:
      "The game required real-time multiplayer functionality with sub-100ms latency, cross-platform play between iOS and Android, scalable infrastructure to handle viral growth, and a monetization strategy that didn't compromise the player experience.",
    solution:
      "We built the game using Unity with custom networking solutions for real-time play. The backend runs on AWS with auto-scaling game servers. We implemented a fair free-to-play model with cosmetic-only purchases and designed social features that encourage organic sharing.",
    results: [
      "500K+ downloads in first 3 months",
      "4.6-star rating on App Store and Google Play",
      "Featured in App Store 'New Games We Love'",
      "20% day-30 retention rate",
      "Organic growth through social features",
    ],
    technologies: [
      "Unity",
      "C#",
      "AWS GameLift",
      "PlayFab",
      "Firebase",
      "Node.js",
    ],
    services: [
      "Game Development",
      "Mobile Development",
      "Backend Development",
      "UI/UX Design",
    ],
    testimonial: {
      quote:
        "Shammas Development didn't just build our game - they helped us create an experience players love. The quality exceeded our expectations.",
      author: "David Park",
      role: "Founder & CEO",
    },
    metrics: [
      { label: "Downloads", value: "500K+" },
      { label: "App Rating", value: "4.6" },
      { label: "D30 Retention", value: "20%" },
      { label: "Development Time", value: "10mo" },
    ],
    image: "/images/case-studies/mobile-game.jpg",
    featured: false,
  },
  {
    slug: "healthcare-analytics-platform",
    title: "Healthcare Data Analytics Platform",
    client: "Healthcare Provider Network",
    industry: "Healthcare",
    year: "2023",
    duration: "7 months",
    description:
      "Created a HIPAA-compliant analytics dashboard for healthcare providers to track patient outcomes, resource utilization, and operational efficiency.",
    longDescription:
      "A network of healthcare providers across 15 facilities was drowning in data but starving for insights. Each facility used different systems, making it impossible to get a unified view of patient outcomes or operational performance. They needed a solution that could aggregate data while meeting strict HIPAA requirements.",
    challenge:
      "Data was siloed across 8 different EHR systems, strict HIPAA compliance required for all data handling, providers needed real-time insights for clinical decisions, and the solution had to work for users with varying technical expertise.",
    solution:
      "We built a HIPAA-compliant data platform that securely aggregates data from all sources. The analytics dashboard provides real-time insights on patient outcomes, resource utilization, and operational metrics. Role-based access ensures appropriate data visibility for different user types.",
    results: [
      "Improved patient care coordination by 45%",
      "Reduced administrative overhead by 30%",
      "Full HIPAA compliance certification",
      "Unified view across all 15 facilities",
      "Predictive analytics for patient readmission risk",
    ],
    technologies: [
      "Python",
      "Apache Spark",
      "Snowflake",
      "React",
      "D3.js",
      "AWS",
      "Tableau",
    ],
    services: [
      "Data Analytics",
      "Dashboard Development",
      "HIPAA Compliance",
      "Data Integration",
    ],
    metrics: [
      { label: "Care Coordination", value: "+45%" },
      { label: "Admin Overhead", value: "-30%" },
      { label: "Facilities", value: "15" },
      { label: "EHRs Integrated", value: "8" },
    ],
    image: "/images/case-studies/healthcare-analytics.jpg",
    featured: false,
  },
  {
    slug: "social-media-management-suite",
    title: "Social Media Management Suite",
    client: "Marketing Agency",
    industry: "Marketing & Advertising",
    year: "2024",
    duration: "4 months",
    description:
      "Developed a comprehensive social media management platform with scheduling, analytics, and AI-powered content recommendations.",
    longDescription:
      "A growing marketing agency was using multiple tools to manage their clients' social media presence. The fragmented toolset led to inefficiencies, missed posts, and difficulty demonstrating ROI to clients. They needed a unified platform built specifically for agency workflows.",
    challenge:
      "Managing 100+ client accounts across 5 social platforms, demonstrating clear ROI to clients, maintaining consistent posting schedules, and generating engaging content ideas at scale.",
    solution:
      "We developed a custom platform that consolidates all social media management into one interface. Features include multi-account scheduling, AI-powered content suggestions, comprehensive analytics with white-label reporting, and team collaboration tools.",
    results: [
      "Managed 100+ client accounts efficiently",
      "Increased engagement rates by 85% on average",
      "Saved 20+ hours per week in manual posting",
      "Improved client retention through better reporting",
      "AI suggestions adopted for 60% of posts",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Redis",
      "OpenAI API",
      "Meta API",
      "Twitter API",
    ],
    services: [
      "Custom Software Development",
      "AI Integration",
      "API Development",
      "Dashboard Design",
    ],
    metrics: [
      { label: "Accounts Managed", value: "100+" },
      { label: "Engagement Increase", value: "85%" },
      { label: "Time Saved Weekly", value: "20hrs" },
      { label: "AI Adoption", value: "60%" },
    ],
    image: "/images/case-studies/social-media.jpg",
    featured: false,
  },
];

export const getFeaturedCaseStudies = () =>
  caseStudies.filter((study) => study.featured);

export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);

export const getAllCaseStudySlugs = () =>
  caseStudies.map((study) => study.slug);
