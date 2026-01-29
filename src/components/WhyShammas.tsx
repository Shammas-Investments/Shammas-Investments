import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import SectionIntro from "./SectionIntro";

const reasons = [
  {
    title: "Operator-focused approach",
    description:
      "Every solution is grounded in real business needs, not technical vanity. We build what actually moves your business forward.",
  },
  {
    title: "Clear scope and communication",
    description:
      "Milestones, timelines, and progress updates you can count on. No surprises, no black boxes.",
  },
  {
    title: "Built for longevity",
    description:
      "Software designed for adoption, maintainability, and growth — not just launch day.",
  },
  {
    title: "Partnership mindset",
    description:
      "We focus on outcomes, not just output. Your success is how we measure ours.",
  },
];

const WhyShammas = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Why Shammas Development"
        title="A partner invested in your outcomes"
        invert
      >
        <p>
          We're not just developers we're operators who understand what it takes to build and scale a business.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeInStagger faster>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <FadeIn key={index}>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-neutral-950">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-400">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default WhyShammas;
