import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import SectionIntro from "./SectionIntro";
import CalendlyButton from "./CalendlyButton";

const steps = [
  {
    step: "1",
    title: "Introductory Call",
    description:
      "A focused conversation to understand your goals, constraints, and what success looks like for your project.",
  },
  {
    step: "2",
    title: "Technical Breakdown",
    description:
      "We analyze your requirements and provide a recommended approach with realistic timeline estimates.",
  },
  {
    step: "3",
    title: "Clear Proposal",
    description:
      "A detailed proposal outlining scope, milestones, and delivery plan — no surprises, no hidden costs.",
  },
];

const WhatHappensNext = () => {
  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="What Happens Next"
        title="A clear path from conversation to kickoff"
      >
        <p>
          We keep the process simple and transparent so you can make informed decisions.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeInStagger faster>
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-px bg-neutral-200 md:left-1/2 md:block md:-translate-x-1/2" />

            <div className="space-y-8 md:space-y-12">
              {steps.map((item, index) => (
                <FadeIn key={index}>
                  <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-12">
                    {/* Left content (odd items) / Right content (even items) */}
                    <div
                      className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:order-last md:text-left"}`}
                    >
                      <div
                        className={`inline-block rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-950/5 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
                      >
                        <h3 className="font-display text-lg font-semibold text-neutral-950">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-sm text-sm text-neutral-600">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Step number */}
                    <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-neutral-950 text-2xl font-semibold text-white md:order-none">
                      {item.step}
                    </div>

                    {/* Empty space for alignment */}
                    <div className="hidden flex-1 md:block" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeInStagger>

        <FadeIn>
          <div className="mt-16 text-center">
            <CalendlyButton>Book Your Strategy Call</CalendlyButton>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
};

export default WhatHappensNext;
