import Link from "next/link";
import clsx from "clsx";
import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { IconType } from "react-icons";

interface SocialMediaProfile {
  title: string;
  href: string;
  icon: IconType;
}

export const SocialMediaProfiles: SocialMediaProfile[] = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/shammas-development",
    icon: BsLinkedin,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/shammasdev",
    icon: BsTwitter,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/shammasdevelopment",
    icon: BsFacebook,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/shammasdevelopment",
    icon: BsInstagram,
  },
];

interface SocialMediaProps {
  className?: string;
  invert?: boolean;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "flex items-center justify-center min-h-[44px] min-w-[44px] -m-2 p-2 transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
