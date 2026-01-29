import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import CalendlyButton from "@/components/CalendlyButton";
import WhatWeBuild from "@/components/WhatWeBuild";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import WhyShammas from "@/components/WhyShammas";
import BusinessOutcomes from "@/components/BusinessOutcomes";
import WhatHappensNext from "@/components/WhatHappensNext";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shammas Development - Complete IT Solutions & Technology Services | shammasdev',
  description: 'Shammas Development LLC - Expert IT solutions provider. Search shammas, shammasdev, shammas investments for software development, AI/ML, e-commerce, cloud management, and digital transformation services. Technology investment and consulting worldwide.',
  keywords: [
    'shammas',
    'shammas investments',
    'shammasdev',
    'shammas invest',
    'shammas LLC',
    'shammas technology',
    'IT solutions',
    'technology services',
    'software development company',
    'AI development',
    'digital transformation',
  ],
  openGraph: {
    title: 'Shammas Development - Complete IT Solutions & Technology Services',
    description: 'Leading IT solutions provider specializing in software development, AI/ML, e-commerce platforms, and digital transformation. Expert technology consulting.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="text-black">
      {/* Hero Section */}
      <Container className="mt-32 sm:mt-40 md:mt-48 lg:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-banner text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            We design and build custom software, automation, and AI systems that help businesses scale with confidence.
          </h1>
          <p className="mt-6 text-xl font-medium text-neutral-800">
            Built for founders and operators who need reliable, well-architected systems tailored to how their business actually works.
          </p>
          <p className="mt-4 text-lg text-neutral-600">
            From MVPs to internal platforms, we focus on practical solutions that deliver measurable, long-term value.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CalendlyButton>Book a Strategy Call</CalendlyButton>
            <Button href="/get-quote" className="bg-white !text-neutral-950 border-2 border-neutral-950 hover:!bg-neutral-100">
              Get a Custom Quote
            </Button>
          </div>
        </FadeIn>
      </Container>

      <Clients />

      {/* What We Build */}
      <WhatWeBuild />

      {/* Who We Work With */}
      <WhoWeWorkWith />

      {/* Why Shammas Development */}
      <WhyShammas />

      {/* Business Outcomes */}
      <BusinessOutcomes />

      {/* What Happens Next */}
      <WhatHappensNext />

      <ContactSection />
    </main>
  );
}
