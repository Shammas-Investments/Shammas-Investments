import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Transforming Vision Into Digital Reality
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Shammas Investments delivers comprehensive IT solutions across every domain of technology. From AI-powered applications to e-commerce platforms, we partner with businesses to drive innovation and achieve measurable results.
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
