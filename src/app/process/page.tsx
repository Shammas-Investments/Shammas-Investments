import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Discover from "@/components/Discover";
import Launch from "@/components/Launch";
import PageIntro from "@/components/PageIntro";
import Plan from "@/components/Plan";
import Support from "@/components/Support";
import Values from "@/components/Values";
import React from "react";

const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="Our process" title="Transparent and Reliable Execution">
        <p>
          We follow a structured process designed for clarity, accountability, and results. You always know what&apos;s happening, and we deliver systems built to last.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Plan */}
        <Plan />
        {/* Build */}
        <Build />
        {/* Launch */}
        <Launch />
        {/* Support */}
        <Support />
      </div>
      {/* Values */}
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;
