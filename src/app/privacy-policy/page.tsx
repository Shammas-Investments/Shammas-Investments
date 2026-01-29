import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Shammas Development",
  description:
    "Privacy Policy for Shammas Development LLC - Learn how we collect, use, and protect your information.",
  keywords: [
    "privacy policy",
    "data protection",
    "shammas development privacy",
    "information security",
  ],
  openGraph: {
    title: "Privacy Policy | Shammas Development",
    description:
      "Privacy Policy for Shammas Development LLC - Learn how we collect, use, and protect your information.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Shammas Development",
    description:
      "Privacy Policy for Shammas Development LLC - Learn how we collect, use, and protect your information.",
    images: ["/web-app-manifest-512x512.png"],
  },
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy Policy">
        <p>Effective Date: January 27, 2026 | Last Updated: January 27, 2026</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="prose prose-neutral max-w-3xl mx-auto">
          <section className="mb-12">
            <p className="text-neutral-600 mb-4">
              Shammas Development LLC (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates https://shammasdevelopment.io (the &quot;Site&quot;). We respect your privacy and are committed to protecting any personal information you share with us. This Privacy Policy explains how we collect, use, and protect information collected through the Site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Information We Collect</h2>
            <p className="text-neutral-600 mb-4">
              We may collect basic contact information such as your name, email address, phone number, and project details when you contact us. We also collect limited technical data such as IP address and browser type to improve our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">How We Use Your Information</h2>
            <p className="text-neutral-600 mb-4">
              We use your information only to respond to inquiries, provide services, improve our website, and comply with legal obligations. We do not sell your personal information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Cookies Disclosure</h2>
            <p className="text-neutral-600 mb-4">
              We use cookies and similar technologies to operate the Site, remember preferences, analyze traffic, and improve performance. You may control cookies through your browser settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Third-Party Services</h2>
            <p className="text-neutral-600 mb-4">
              We may use third-party providers for hosting, analytics, forms, email, scheduling, and payment processing. These providers operate under their own privacy policies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Data Retention</h2>
            <p className="text-neutral-600 mb-4">
              We retain personal information only as long as necessary to provide services, comply with legal obligations, and resolve disputes. Data is deleted or anonymized when no longer required.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">International Users</h2>
            <p className="text-neutral-600 mb-4">
              Information may be transferred to and processed in the United States or other jurisdictions. By using the Site, you consent to this transfer.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Do Not Track</h2>
            <p className="text-neutral-600 mb-4">
              The Site does not respond to Do Not Track signals due to the lack of a uniform industry standard.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Your Privacy Rights</h2>
            <p className="text-neutral-600 mb-4">
              California residents may request access to or deletion of their personal information under the CCPA/CPRA. Michigan and other U.S. residents may request similar rights where permitted by law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Data Security</h2>
            <p className="text-neutral-600 mb-4">
              We use reasonable security measures to protect your data. Our website is not intended for children under 13.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Contact Us</h2>
            <p className="text-neutral-600 mb-4">
              If you have questions about this Privacy Policy, contact us at:
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

export default PrivacyPolicyPage;
