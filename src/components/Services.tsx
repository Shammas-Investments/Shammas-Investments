import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Build, Automate, and Scale with Confidence"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We focus on execution and results — building technology that solves real problems, not just checks boxes.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Custom Software Development">
              Web apps, mobile apps, internal tools, and integrations — built to spec with clean architecture and long-term maintainability in mind.
            </ListItem>
            <ListItem title="AI Automation & LLM Solutions">
              We build intelligent systems — chatbots, copilots, and automated workflows — that reduce busywork and help your team focus on what matters.
            </ListItem>
            <ListItem title="Cloud & DevOps Engineering">
              From migrations to CI/CD and monitoring, we set up infrastructure that's secure, scalable, and cost-efficient.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
