"use client";
import React from "react";
import FadeIn from "./FadeIn";

interface CalendlySectionProps {
  title?: string;
  description?: string;
  inline?: boolean;
}

const CalendlySection: React.FC<CalendlySectionProps> = ({ title, description, inline = false }) => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com";

  const handleBooking = () => {
    // Open Calendly in a new tab
    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  };

  if (inline) {
    // Inline embedded widget (requires Calendly embed script)
    return (
      <FadeIn>
        <div className="rounded-4xl bg-neutral-50 p-8 ring-1 ring-neutral-950/5">
          {title && (
            <h3 className="font-display text-2xl font-semibold text-neutral-950">
              {title}
            </h3>
          )}
          {description && (
            <p className="mt-4 text-base text-neutral-600">{description}</p>
          )}
          <div className="mt-6">
            <div
              className="calendly-inline-widget"
              data-url={calendlyUrl}
              style={{ minWidth: "320px", height: "630px" }}
            />
          </div>
        </div>
      </FadeIn>
    );
  }

  // Simple button/link version
  return (
    <FadeIn>
      <div className="rounded-4xl bg-gradient-to-br from-neutral-900 to-neutral-950 p-12 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="flex justify-center mb-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-5xl">
              📅
            </div>
          </div>
          <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            {title || "Schedule a Consultation"}
          </h3>
          <p className="mt-4 text-lg text-neutral-300">
            {description ||
              "Book a free 30-minute consultation to discuss your project requirements and explore how we can help transform your business."}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={handleBooking}
              className="rounded-full bg-white px-8 py-4 font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
              Schedule a Meeting
            </button>
            <a
              href="/contact"
              className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-neutral-950"
            >
              Contact Us Instead
            </a>
          </div>
          <p className="mt-6 text-sm text-neutral-400">
            Available Monday - Friday, 8 AM - 6 PM EST
          </p>
        </div>
      </div>
    </FadeIn>
  );
};

export default CalendlySection;
