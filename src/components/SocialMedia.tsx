import Link from "next/link";
import clsx from "clsx";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import { IconType } from "react-icons";

interface SocialMediaProfile {
  title: string;
  href: string | undefined;
  icon: IconType;
}

const allProfiles: SocialMediaProfile[] = [
  {
    title: "LinkedIn",
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    icon: BsLinkedin,
  },
  {
    title: "Facebook",
    href: process.env.NEXT_PUBLIC_FACEBOOK_URL,
    icon: BsFacebook,
  },
  {
    title: "Instagram",
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    icon: BsInstagram,
  },
  {
    title: "Twitter",
    href: process.env.NEXT_PUBLIC_TWITTER_URL,
    icon: BsTwitterX,
  },
];

// Only export profiles that have URLs configured
export const SocialMediaProfiles = allProfiles.filter(
  (profile): profile is SocialMediaProfile & { href: string } => !!profile.href
);

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
