import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Services",
    links: [
      { title: "Software Development", href: "/services#software" },
      { title: "AI & ML Solutions", href: "/services#ai-ml" },
      { title: "E-Commerce", href: "/services#ecommerce" },
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
