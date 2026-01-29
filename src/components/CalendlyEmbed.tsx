"use client";

import { useEffect } from "react";
import FadeIn from "./FadeIn";

interface CalendlyEmbedProps {
  title?: string;
  description?: string;
}

const CalendlyEmbed = ({
  title = "Schedule a Free Consultation",
  description = "Book a 30-minute call to discuss your project requirements and explore how we can help.",
}: CalendlyEmbedProps) => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/shammasdevelopment/30min";

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <FadeIn>
      <div className="rounded-4xl bg-neutral-50 p-8 ring-1 ring-neutral-950/5 sm:p-10">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-950 text-3xl">
            📅
          </div>
          <h3 className="font-display text-2xl font-semibold text-neutral-950 sm:text-3xl">
            {title}
          </h3>
          <p className="mt-3 text-neutral-600 max-w-xl mx-auto">
            {description}
          </p>
        </div>

        {/* Calendly Inline Widget */}
        <div
          className="calendly-inline-widget rounded-2xl overflow-hidden"
          data-url={`${calendlyUrl}?hide_gdpr_banner=1&background_color=fafafa&text_color=0a0a0a&primary_color=0a0a0a`}
          style={{ minWidth: "320px", height: "700px" }}
        />

        <p className="mt-6 text-center text-sm text-neutral-500">
          Available Monday - Friday, 8 AM - 6 PM EST
        </p>
      </div>
    </FadeIn>
  );
};

export default CalendlyEmbed;
