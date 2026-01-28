// Service definitions with categories, options, and pricing

export interface ServiceOption {
  id: string;
  name: string;
  price: number;
  priceType: "one-time" | "monthly";
  category: string;
  hasSubOptions: boolean;
}

export interface SubOption {
  id: string;
  label: string;
  options: { value: string; label: string }[];
}

export interface ServiceSubOptions {
  [serviceId: string]: SubOption[];
}

export interface AssetQuestion {
  id: string;
  question: string;
  options: { value: string; label: string; addService?: string }[];
}

// All available services grouped by category
export const services: ServiceOption[] = [
  // Development Services
  {
    id: "website-dev",
    name: "Website Development",
    price: 3000,
    priceType: "one-time",
    category: "Development",
    hasSubOptions: true,
  },
  {
    id: "mobile-app",
    name: "Mobile App Development",
    price: 8000,
    priceType: "one-time",
    category: "Development",
    hasSubOptions: true,
  },
  {
    id: "custom-software",
    name: "Custom Software Development",
    price: 15000,
    priceType: "one-time",
    category: "Development",
    hasSubOptions: false,
  },
  {
    id: "ecommerce-dev",
    name: "E-Commerce Development",
    price: 5000,
    priceType: "one-time",
    category: "Development",
    hasSubOptions: true,
  },
  {
    id: "api-dev",
    name: "API Development & Integration",
    price: 4000,
    priceType: "one-time",
    category: "Development",
    hasSubOptions: false,
  },

  // Design Services
  {
    id: "ui-ux",
    name: "UI/UX Design",
    price: 2500,
    priceType: "one-time",
    category: "Design",
    hasSubOptions: true,
  },
  {
    id: "logo-brand",
    name: "Logo & Brand Identity",
    price: 800,
    priceType: "one-time",
    category: "Design",
    hasSubOptions: false,
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    price: 500,
    priceType: "one-time",
    category: "Design",
    hasSubOptions: false,
  },
  {
    id: "3d-animation",
    name: "3D Animation",
    price: 3000,
    priceType: "one-time",
    category: "Design",
    hasSubOptions: true,
  },
  {
    id: "video-animation",
    name: "Video Animation/Motion Graphics",
    price: 1500,
    priceType: "one-time",
    category: "Design",
    hasSubOptions: true,
  },

  // Marketing Services
  {
    id: "seo",
    name: "SEO (Search Engine Optimization)",
    price: 1000,
    priceType: "monthly",
    category: "Marketing",
    hasSubOptions: true,
  },
  {
    id: "social-media-marketing",
    name: "Social Media Marketing",
    price: 800,
    priceType: "monthly",
    category: "Marketing",
    hasSubOptions: true,
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing/PPC",
    price: 1500,
    priceType: "monthly",
    category: "Marketing",
    hasSubOptions: true,
  },
  {
    id: "content-marketing",
    name: "Content Marketing",
    price: 1200,
    priceType: "monthly",
    category: "Marketing",
    hasSubOptions: true,
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    price: 500,
    priceType: "monthly",
    category: "Marketing",
    hasSubOptions: true,
  },

  // AI & Automation
  {
    id: "ai-ml",
    name: "AI/ML Solutions",
    price: 10000,
    priceType: "one-time",
    category: "AI & Automation",
    hasSubOptions: false,
  },
  {
    id: "chatbot",
    name: "Chatbot Development",
    price: 3000,
    priceType: "one-time",
    category: "AI & Automation",
    hasSubOptions: false,
  },
  {
    id: "process-automation",
    name: "Process Automation",
    price: 5000,
    priceType: "one-time",
    category: "AI & Automation",
    hasSubOptions: false,
  },

  // Cloud & DevOps
  {
    id: "cloud-migration",
    name: "Cloud Migration",
    price: 4000,
    priceType: "one-time",
    category: "Cloud & DevOps",
    hasSubOptions: false,
  },
  {
    id: "devops",
    name: "DevOps & CI/CD Setup",
    price: 3000,
    priceType: "one-time",
    category: "Cloud & DevOps",
    hasSubOptions: false,
  },
  {
    id: "cloud-management",
    name: "Cloud Management",
    price: 1500,
    priceType: "monthly",
    category: "Cloud & DevOps",
    hasSubOptions: false,
  },
];

// Sub-options for services that have them
export const serviceSubOptions: ServiceSubOptions = {
  "website-dev": [
    {
      id: "website-type",
      label: "Website Type",
      options: [
        { value: "landing", label: "Landing Page" },
        { value: "corporate", label: "Corporate Website" },
        { value: "web-app", label: "Web Application" },
        { value: "portal", label: "Portal" },
      ],
    },
    {
      id: "website-tech",
      label: "Tech Stack",
      options: [
        { value: "wordpress", label: "WordPress" },
        { value: "react-nextjs", label: "React/Next.js" },
        { value: "custom", label: "Custom" },
      ],
    },
  ],
  "mobile-app": [
    {
      id: "app-platform",
      label: "Platform",
      options: [
        { value: "ios", label: "iOS Only" },
        { value: "android", label: "Android Only" },
        { value: "both-native", label: "Both (Native)" },
        { value: "cross-platform", label: "Cross-Platform (React Native/Flutter)" },
      ],
    },
    {
      id: "app-features",
      label: "Features",
      options: [
        { value: "basic", label: "Basic" },
        { value: "standard", label: "Standard" },
        { value: "advanced", label: "Advanced (with backend)" },
      ],
    },
  ],
  "ecommerce-dev": [
    {
      id: "ecommerce-platform",
      label: "Platform",
      options: [
        { value: "shopify", label: "Shopify" },
        { value: "woocommerce", label: "WooCommerce" },
        { value: "custom", label: "Custom" },
        { value: "magento", label: "Magento" },
      ],
    },
    {
      id: "ecommerce-products",
      label: "Number of Products",
      options: [
        { value: "under-50", label: "< 50" },
        { value: "50-500", label: "50-500" },
        { value: "over-500", label: "500+" },
      ],
    },
  ],
  "ui-ux": [
    {
      id: "design-scope",
      label: "Scope",
      options: [
        { value: "single-page", label: "Single Page" },
        { value: "multi-page", label: "Multi-page (5-10)" },
        { value: "full-app", label: "Full Application" },
      ],
    },
  ],
  "3d-animation": [
    {
      id: "animation-duration",
      label: "Duration",
      options: [
        { value: "under-30", label: "< 30 seconds" },
        { value: "30-60", label: "30-60 seconds" },
        { value: "1-3min", label: "1-3 minutes" },
        { value: "over-3min", label: "3+ minutes" },
      ],
    },
    {
      id: "animation-style",
      label: "Style",
      options: [
        { value: "2d", label: "2D" },
        { value: "3d", label: "3D" },
        { value: "motion-graphics", label: "Motion Graphics" },
        { value: "mixed", label: "Mixed" },
      ],
    },
  ],
  "video-animation": [
    {
      id: "video-duration",
      label: "Duration",
      options: [
        { value: "under-30", label: "< 30 seconds" },
        { value: "30-60", label: "30-60 seconds" },
        { value: "1-3min", label: "1-3 minutes" },
        { value: "over-3min", label: "3+ minutes" },
      ],
    },
    {
      id: "video-style",
      label: "Style",
      options: [
        { value: "2d", label: "2D" },
        { value: "3d", label: "3D" },
        { value: "motion-graphics", label: "Motion Graphics" },
        { value: "mixed", label: "Mixed" },
      ],
    },
  ],
  seo: [
    {
      id: "marketing-duration",
      label: "Duration",
      options: [
        { value: "3-months", label: "3 months" },
        { value: "6-months", label: "6 months" },
        { value: "12-months", label: "12 months" },
        { value: "ongoing", label: "Ongoing" },
      ],
    },
  ],
  "social-media-marketing": [
    {
      id: "marketing-duration",
      label: "Duration",
      options: [
        { value: "3-months", label: "3 months" },
        { value: "6-months", label: "6 months" },
        { value: "12-months", label: "12 months" },
        { value: "ongoing", label: "Ongoing" },
      ],
    },
  ],
  "digital-marketing": [
    {
      id: "marketing-duration",
      label: "Duration",
      options: [
        { value: "3-months", label: "3 months" },
        { value: "6-months", label: "6 months" },
        { value: "12-months", label: "12 months" },
        { value: "ongoing", label: "Ongoing" },
      ],
    },
  ],
  "content-marketing": [
    {
      id: "marketing-duration",
      label: "Duration",
      options: [
        { value: "3-months", label: "3 months" },
        { value: "6-months", label: "6 months" },
        { value: "12-months", label: "12 months" },
        { value: "ongoing", label: "Ongoing" },
      ],
    },
  ],
  "email-marketing": [
    {
      id: "marketing-duration",
      label: "Duration",
      options: [
        { value: "3-months", label: "3 months" },
        { value: "6-months", label: "6 months" },
        { value: "12-months", label: "12 months" },
        { value: "ongoing", label: "Ongoing" },
      ],
    },
  ],
};

// Asset requirement questions
export const assetQuestions: AssetQuestion[] = [
  {
    id: "logo",
    question: "Do you have a logo?",
    options: [
      { value: "have-logo", label: "I have a logo" },
      { value: "need-logo", label: "I need a logo designed", addService: "logo-brand" },
    ],
  },
  {
    id: "brand-guidelines",
    question: "Do you have brand guidelines?",
    options: [
      { value: "have-brand", label: "I have brand guidelines" },
      { value: "need-brand", label: "I need brand identity created", addService: "logo-brand" },
    ],
  },
  {
    id: "design-mockups",
    question: "Do you have design mockups or wireframes?",
    options: [
      { value: "have-mockups", label: "I have mockups/wireframes" },
      { value: "need-mockups", label: "I need designs created", addService: "ui-ux" },
    ],
  },
  {
    id: "content",
    question: "Will you provide written content?",
    options: [
      { value: "have-content", label: "I will provide content" },
      { value: "need-content", label: "I need copywriting services" },
    ],
  },
  {
    id: "images-media",
    question: "Do you have images and media assets?",
    options: [
      { value: "have-media", label: "I have images/media" },
      { value: "need-media", label: "I need stock images/custom media" },
    ],
  },
];

// Get unique categories
export const getCategories = (): string[] => {
  return [...new Set(services.map((s) => s.category))];
};

// Get services by category
export const getServicesByCategory = (category: string): ServiceOption[] => {
  return services.filter((s) => s.category === category);
};

// Format price for display
export const formatPrice = (price: number, priceType: "one-time" | "monthly"): string => {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
  return priceType === "monthly" ? `${formatted}/mo` : formatted;
};

// Timeline options
export const timelineOptions = [
  { value: "asap", label: "ASAP" },
  { value: "1-3-months", label: "1-3 months" },
  { value: "3-6-months", label: "3-6 months" },
  { value: "flexible", label: "Flexible" },
];
