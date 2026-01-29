import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import SectionIntro from "./SectionIntro";

const clients = [
  {
    icon: "🚀",
    title: "Founders building or scaling a product",
    description:
      "Whether you're validating an MVP or scaling to your next milestone, we help you build with confidence.",
  },
  {
    icon: "⚙️",
    title: "Operations teams managing complex workflows",
    description:
      "Replace fragmented tools and manual processes with unified systems designed for your team.",
  },
  {
    icon: "🏢",
    title: "Businesses requiring tailored systems",
    description:
      "When off-the-shelf solutions fall short, we build maintainable, custom technology that fits.",
  },
];

const WhoWeWorkWith = () => {
  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Who We Work With"
        title="Partners who have outgrown off-the-shelf tools"
      >
        <p>
          We partner with startups and growing companies that need custom systems to support scale.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeInStagger faster>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {clients.map((client, index) => (
              <FadeIn key={index}>
                <div className="flex flex-col items-start rounded-3xl border border-neutral-200 bg-white p-8 transition hover:border-neutral-300 hover:shadow-sm">
                  <span className="text-4xl">{client.icon}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-neutral-950">
                    {client.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    {client.description}
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

export default WhoWeWorkWith;
