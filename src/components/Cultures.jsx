import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our values"
        title="Built on a foundation of excellence and integrity."
        invert
      >
        <p>
          Our core values guide every decision we make and every solution we deliver.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Innovation" invert>
            We stay ahead of technology trends, constantly exploring new solutions and approaches to deliver cutting-edge results for our clients.
          </GridListItem>
          <GridListItem title="Excellence" invert>
            Quality is non-negotiable. We hold ourselves to the highest standards in every project, ensuring exceptional outcomes that exceed expectations.
          </GridListItem>
          <GridListItem title="Partnership" invert>
            Your success is our success. We build lasting relationships based on trust, transparency, and mutual growth.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
