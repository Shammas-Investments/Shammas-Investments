import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Services",
    links: [
      { title: "Internal Tools", href: "/internal-tools" },
      { title: "AI Automation", href: "/ai-automation" },
      { title: "MVP Development", href: "/mvp-development" },
      { title: "Pricing", href: "/custom-software-cost" },
      {
        title: (
          <>
            View all services <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/services",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Products", href: "/products" },
      { title: "FAQ", href: "/faq" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
