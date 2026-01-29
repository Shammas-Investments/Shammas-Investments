import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export const metadata: Metadata = {
  title: "Contact Us | Shammas Development",
  description:
    "Get in touch with Shammas Development. Share your project details and we'll follow up with next steps within one business day. Book a free strategy call.",
  keywords: [
    "contact shammas development",
    "software development inquiry",
    "book consultation",
    "project quote",
    "get in touch",
  ],
  openGraph: {
    title: "Contact Us | Shammas Development",
    description:
      "Get in touch with Shammas Development. Share your project details and we'll follow up within one business day.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Shammas Development",
    description:
      "Get in touch with Shammas Development. Share your project details and we'll follow up within one business day.",
    images: ["/web-app-manifest-512x512.png"],
  },
};

const ContactPage = () => {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageIntro eyebrow="Contact us" title="Let&apos;s work together">
        <p>Share what you&apos;re working on and we&apos;ll follow up with next steps. Expect a reply within one business day.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2 lg:gap-y-24">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>

      {/* Calendly Inline Booking */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <CalendlyEmbed
          title="Prefer to Schedule a Call?"
          description="Book a free 30-minute consultation to discuss your project in detail. Select a time that works for you."
        />
      </Container>
    </>
  );
};

export default ContactPage;
