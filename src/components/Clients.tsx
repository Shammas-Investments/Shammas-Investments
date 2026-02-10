"use client";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const trustPoints = [
  {
    title: "Milestone-based delivery with weekly demos",
    description:
      "You see working software every week. No surprises at the end.",
  },
  {
    title: "Clean documentation and full handoff. No black box",
    description:
      "Everything is documented so your team can maintain and extend the system after we deliver.",
  },
  {
    title: "Secure, maintainable systems built for long-term use",
    description:
      "We write production-grade code with security, testing, and scalability built in from day one.",
  },
];

const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-white sm:text-left sm:text-3xl">
            Built by operators. Delivered like an engineering partner.
          </h2>
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {trustPoints.map((point) => (
              <li key={point.title}>
                <FadeIn>
                  <div className="flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {point.title}
                    </h3>
                    <p className="mt-4 text-sm text-neutral-300">
                      {point.description}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
