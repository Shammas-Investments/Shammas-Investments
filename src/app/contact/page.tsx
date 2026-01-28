import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import CalendlySection from "@/components/CalendlySection";

const ContactPage = () => {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let&apos;s work together">
        <p>Share what you&apos;re working on and we&apos;ll follow up with next steps. Expect a reply within one business day.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>

      {/* Calendly Booking Section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <CalendlySection
          title="Prefer to Schedule a Call?"
          description="Book a free consultation to discuss your project in detail. We'll walk through your requirements, timeline, and how we can deliver the perfect solution."
        />
      </Container>
    </>
  );
};

export default ContactPage;
