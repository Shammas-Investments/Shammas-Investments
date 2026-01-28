import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
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
      <Container className="mt-32 sm:mt-40 md:mt-48 lg:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-banner text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            We design and build custom software, AI, and automation that eliminate manual work and help businesses scale faster.
          </h1>
          <p className="mt-8 text-xl text-neutral-600">
            From MVPs to enterprise-grade systems, we help teams ship faster, operate smarter, and grow with confidence.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Services />
      <ContactSection />
    </main>
  );
}
