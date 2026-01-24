import ContactSection from "@/components/ContactSection";
import Cultures from "@/components/Cultures";
import Founders from "@/components/Founders";
import PageIntro from "@/components/PageIntro";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="About us"
        title="Technology Partner for Growing Teams"
      >
        <p>
          Shammas Investments is a technology partner focused on building
          reliable software, AI automation, and cloud systems.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            {/* We help companies simplify operations and scale through well-built technology. Founded to deliver cleaner builds, clearer communication, and better outcomes. */}
            Shammas Investments was founded on the idea that technology should
            feel supportive not overwhelming.
          </p>
          <p>
            We believe strong systems come from thoughtful planning, clear
            communication, and respect for the people who depend on them every
            day.
          </p>
          <p>
            Our vision is to build solutions teams trust, understand, and
            confidently use long after launch.
          </p>
          <p>
            As founders, we hold ourselves accountable for the quality of our
            work.
          </p>
          <p>
            Every project is approached as a long-term investment in our
            client's success.
          </p>
          <p>
            Our goal is to build enduring partnerships and technology that
            scales with the businesses we serve.
          </p>
          {/* <p>
            We build custom software, AI automation, and cloud systems for teams that value execution. Our focus is on long-term success, not buzzwords.
          </p>
          <p>
            From startups to growing enterprises, we partner with organizations that need practical solutions delivered with discipline and transparency.
          </p> */}
        </div>
      </PageIntro>
      <Founders />
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
