import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shammas Investments - Complete IT Solutions & Technology Services | shammasinvest',
  description: 'Shammas Investments LLC - Expert IT solutions provider. Search shammas, shammasinvest, shammas investments for software development, AI/ML, e-commerce, cloud management, and digital transformation services. Technology investment and consulting worldwide.',
  keywords: [
    'shammas',
    'shammas investments',
    'shammasinvest',
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
    title: 'Shammas Investments - Complete IT Solutions & Technology Services',
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
            Transforming Vision Into Digital Reality
          </h1>
          <p className="mt-8 text-xl text-neutral-600">
            Shammas Investments LLC (shammasinvestments.com) delivers comprehensive IT solutions across every domain of technology. Whether you search for shammas, shammasinvest, or shammas investments, you'll find expert technology services including AI-powered applications, e-commerce platforms, cloud management, and digital transformation solutions. We partner with businesses worldwide to drive innovation and achieve measurable results.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Client Name", logo: logoPhobiaDark }}
      >
        Shammas Investments transformed our digital infrastructure with their expertise in cloud management and AI solutions. Their team delivered exceptional results that exceeded our expectations.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
