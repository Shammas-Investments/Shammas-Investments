import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import WhatWeBuild from "@/components/WhatWeBuild";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import WhyShammas from "@/components/WhyShammas";
import BusinessOutcomes from "@/components/BusinessOutcomes";
import WhatHappensNext from "@/components/WhatHappensNext";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shammas Development - Internal Tools, AI Automation & MVP Development',
  description: 'Custom internal tools, AI automation, and MVP development for teams that have outgrown spreadsheets and manual workflows. Clear scope, weekly demos, production-grade systems.',
  keywords: [
    'shammas development',
    'shammasdev',
    'internal tools development',
    'AI automation',
    'MVP development',
    'custom software development',
    'workflow automation',
    'LLM automation',
    'SaaS development',
    'software development company',
    'custom dashboards',
    'admin panels',
  ],
  openGraph: {
    title: 'Shammas Development - Internal Tools, AI Automation & MVP Development',
    description: 'Custom internal tools, AI automation, and MVP development for teams that have outgrown spreadsheets and manual workflows.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shammas Development - Internal Tools, AI Automation & MVP Development',
    description: 'Custom internal tools, AI automation, and MVP development for teams that have outgrown spreadsheets and manual workflows.',
    images: ['/web-app-manifest-512x512.png'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main className="text-black">
      {/* Hero Section */}
      <Container className="mt-32 sm:mt-40 md:mt-48 lg:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-banner text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Internal Tools & AI Automation That Replace Manual Work
          </h1>
          <p className="mt-6 text-xl font-medium text-neutral-800">
            We build custom internal software and AI workflows for teams that have outgrown spreadsheets, duct-taped tools, and busywork.
          </p>
          <p className="mt-4 text-lg text-neutral-600">
            Clear scope. Weekly demos. Production-grade systems.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/get-quote">Get a Build Plan</Button>
            <Button href="/process" className="bg-white !text-neutral-950 border-2 border-neutral-950 hover:!bg-neutral-100">
              See How We Work
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
