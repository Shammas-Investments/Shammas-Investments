import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Terms and Conditions", path: "/terms-and-conditions" },
]);

export const metadata: Metadata = {
  title: "Terms and Conditions | Shammas Development",
  description:
    "Terms and Conditions for Shammas Development LLC - Read our terms of service and usage policies.",
  keywords: [
    "terms and conditions",
    "terms of service",
    "shammas development terms",
    "legal",
  ],
  openGraph: {
    title: "Terms and Conditions | Shammas Development",
    description:
      "Terms and Conditions for Shammas Development LLC - Read our terms of service and usage policies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Shammas Development",
    description:
      "Terms and Conditions for Shammas Development LLC - Read our terms of service and usage policies.",
    images: ["/web-app-manifest-512x512.png"],
  },
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

const TermsAndConditionsPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageIntro eyebrow="Legal" title="Terms and Conditions">
        <p>Effective Date: January 27, 2026 | Last Updated: January 27, 2026</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="prose prose-neutral max-w-3xl mx-auto">
          <section className="mb-12">
            <p className="text-neutral-600 mb-4">
              By using this website or our services, you agree to these Terms and Conditions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Services</h2>
            <p className="text-neutral-600 mb-4">
              Shammas Development LLC provides software development, web and mobile development, AI solutions, e-commerce systems, and technology consulting services. Project-specific terms may be governed by separate agreements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Intellectual Property</h2>
            <p className="text-neutral-600 mb-4">
              All content on this website is owned by Shammas Development LLC and may not be copied or used without permission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Intellectual Property Transfer</h2>
            <p className="text-neutral-600 mb-4">
              Ownership of final deliverables transfers upon full payment. Pre-existing materials remain the Company&apos;s property.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">User Responsibilities</h2>
            <p className="text-neutral-600 mb-4">
              You agree not to misuse the website, attempt unauthorized access, or engage in unlawful activity.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Payment Terms</h2>
            <p className="text-neutral-600 mb-4">
              Payment terms will be outlined in a written agreement or invoice. Late payments may result in paused work or termination.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Project Cancellation / Refund Policy</h2>
            <p className="text-neutral-600 mb-4">
              Work completed prior to cancellation is non-refundable. Deposits are non-refundable unless otherwise stated.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Disclaimer of Warranties</h2>
            <p className="text-neutral-600 mb-4">
              Our services and website are provided &quot;as is&quot; without warranties. To the fullest extent allowed by law, we are not liable for damages arising from use of this website or our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Limitation of Liability</h2>
            <p className="text-neutral-600 mb-4">
              Total liability shall not exceed the total fees paid for the services giving rise to the claim.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Indemnification</h2>
            <p className="text-neutral-600 mb-4">
              The Client agrees to indemnify and hold harmless the Company from claims arising from misuse of deliverables or breach of these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Dispute Resolution</h2>
            <p className="text-neutral-600 mb-4">
              Disputes will be resolved through binding arbitration in the applicable jurisdiction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Force Majeure</h2>
            <p className="text-neutral-600 mb-4">
              The Company is not liable for delays caused by events beyond reasonable control.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Confidentiality</h2>
            <p className="text-neutral-600 mb-4">
              Both parties agree to maintain confidentiality of non-public information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Governing Law</h2>
            <p className="text-neutral-600 mb-4">
              These Terms are governed by the laws of the State of Michigan. Any disputes shall be resolved in Michigan courts.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Contact Us</h2>
            <p className="text-neutral-600 mb-4">
              For questions, contact Shammas Development LLC at:
            </p>
            <p className="text-neutral-600">
              <strong>Email:</strong> contact@shammasdevelopment.io<br />
              <strong>Company:</strong> Shammas Development LLC
            </p>
          </section>
        </div>
      </Container>
    </>
  );
};

export default TermsAndConditionsPage;
