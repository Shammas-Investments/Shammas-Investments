import React from "react";
import Image, { StaticImageData } from "next/image";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import SectionIntro from "./SectionIntro";

// Placeholder images - replace with actual founder photos
import founderImage1 from "@/images/team/ceo.jpeg";
import founderImage2 from "@/images/team/cto.jpeg";

interface FounderProps {
  name: string;
  role: string;
  image: StaticImageData;
  bio: string;
}

const FounderCard: React.FC<FounderProps> = ({ name, role, image, bio }) => {
  return (
    <FadeIn>
      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
        <div className="aspect-[3/4] w-full">
          <Image
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 sm:p-8">
          <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
            {name}
          </h3>
          <p className="mt-1 text-sm font-medium text-neutral-300">{role}</p>
          <p className="mt-4 text-sm text-neutral-200 line-clamp-3">{bio}</p>
        </div>
      </div>
    </FadeIn>
  );
};

const founders: FounderProps[] = [
  {
    name: "Joe Shammas",
    role: "Founder & CEO",
    image: founderImage2,
    bio: "Joe oversees our technical direction and engineering excellence, ensuring every solution we deliver meets the highest standards of quality and reliability.",
  },
  {
    name: "Hassan Naeem",
    role: "Co-Founder & CTO",
    image: founderImage1,
    bio: "Hassan leads our vision and strategy, bringing years of experience in technology leadership and a commitment to building solutions that create lasting value for clients.",
  },
];

const Founders = () => {
  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Leadership"
        title="Meet the founders"
      >
        <p>
          We started Shammas Development with a simple belief: technology should
          empower businesses, not complicate them. Our mission is to build reliable,
          scalable solutions that our clients can trust and depend on.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
          {founders.map((founder) => (
            <FounderCard key={founder.name} {...founder} />
          ))}
        </FadeInStagger>
      </Container>

      {/* Mission Statement */}
      <Container className="mt-24">
        <FadeIn>
          <div className="rounded-4xl bg-neutral-950 px-8 py-16 sm:px-16 sm:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Our Mission
              </h3>
              <p className="mt-6 text-lg text-neutral-300">
                To deliver technology solutions that are built to last. We believe in
                honest timelines, clear communication, and taking ownership of the work
                we do. Every project is an investment in our client&apos;s long-term success.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
};

export default Founders;
