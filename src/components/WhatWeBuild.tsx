import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import SectionIntro from "./SectionIntro";

const items = [
  {
    number: "01",
    title: "Custom Internal Tools",
    description:
      "Replace manual processes and spreadsheets with purpose-built applications that streamline your operations.",
  },
  {
    number: "02",
    title: "Automation & AI Workflows",
    description:
      "Reduce operational overhead with intelligent systems that handle repetitive tasks and surface insights.",
  },
  {
    number: "03",
    title: "Scalable Web Applications",
    description:
      "MVPs and production systems designed for growth, built on modern architecture that evolves with your business.",
  },
];

const WhatWeBuild = () => {
  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="What We Build"
        title="Practical technology that solves real problems"
      >
        <p>
          We focus on execution and results building systems that work the way your business works.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeInStagger faster>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <FadeIn key={item.number}>
                <div className="relative flex flex-col rounded-3xl bg-neutral-50 p-8 ring-1 ring-neutral-950/5 transition hover:bg-neutral-100">
                  <span className="font-display text-5xl font-light text-neutral-300">
                    {item.number}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default WhatWeBuild;
