import { navigation } from "@/constants";
import Link from "next/link";

const FooterNavigation = () => {
  const isExternalLink = (href: string) => {
    return href.startsWith("http://") || href.startsWith("https://");
  };

  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((item) => (
          <li key={item.title}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {item.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {item.links.map((link) => (
                <li key={link.href} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                    {...(isExternalLink(link.href) && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavigation;
