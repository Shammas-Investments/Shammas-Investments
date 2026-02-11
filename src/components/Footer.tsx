"use client";
import React, { useState } from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Link from "next/link";
import Image from "next/image";
import appLogo from "@/appLogo.png";
import { trackNewsletterSignup } from "@/lib/analytics";
import Trustpilot from "./Trustpilot";

interface StatusState {
  type: string;
  message: string;
}

const ArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
};

const NewsletterForm = () => {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<StatusState>({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: data.message || "Thank you for subscribing!",
        });
        setEmail("");
        trackNewsletterSignup(true);
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
        trackNewsletterSignup(false);
      }
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
      trackNewsletterSignup(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Stay Updated
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Practical insights on software, AI, and automation. No spam.
      </p>

      {status.message && (
        <div
          role="alert"
          aria-live="polite"
          className={`mt-4 rounded-xl p-3 text-sm ${
            status.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 disabled:opacity-50"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Subscribe to newsletter"
            disabled={isSubmitting}
            className="flex aspect-square h-full min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2"
          >
            {isSubmitting ? (
              <span className="text-xs">...</span>
            ) : (
              <ArrowIcon className="w-4" />
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <FooterNavigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-16 border-t border-neutral-950/10 pt-8">
          <Trustpilot />
        </div>
        <div className="mb-20 mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-6 border-t border-neutral-950/10 pt-12">
          <Link href={"/"} aria-label="Home" className="flex-shrink-0">
            <Image
              src={appLogo}
              alt="Shammas Development"
              width={650}
              height={195}
              className="h-32 w-auto sm:h-40 md:h-44 lg:h-48 grayscale"
            />
          </Link>
          <div className="flex flex-col items-end gap-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-700">
              <Link href="/privacy-policy" className="hover:text-neutral-950 transition">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-neutral-950 transition">
                Terms & Conditions
              </Link>
              <Link href="/sitemap.xml" className="hover:text-neutral-950 transition">
                Sitemap
              </Link>
            </div>
            <p className="text-sm text-neutral-700">
              © Shammas Development LLC. {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;
