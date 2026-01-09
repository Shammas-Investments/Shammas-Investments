import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Excellence Through Innovation">
        <p>
          We believe that our strength lies in our comprehensive approach to technology, delivering solutions that drive real business value across every IT domain.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Shammas Investments was founded by visionary entrepreneurs Jonathan Shammas and Joe Shammas, who recognized the growing need for a comprehensive IT solutions provider that could deliver excellence across all technology domains. Our mission is to empower businesses with cutting-edge technology solutions that drive growth and innovation.
          </p>
          <p>
            As a full-service IT company, we specialize in software development, AI/ML solutions, e-commerce platform management, cloud infrastructure, and digital transformation. Our team of expert developers, designers, and strategists work collaboratively to deliver solutions that exceed expectations and create lasting impact.
          </p>
          <p>
            From Fortune 500 companies to innovative startups, we partner with organizations that share our commitment to excellence and innovation. Our approach combines technical expertise with strategic thinking to solve complex challenges and unlock new opportunities.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="100+" label="Projects Delivered" />
          <StatListItem value="50+" label="Happy Clients" />
          <StatListItem value="15+" label="Technology Domains" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
