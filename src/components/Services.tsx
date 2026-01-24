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
          From development to automation and cloud, we focus on execution and results. Our services are designed to help businesses build reliable technology that solves real operational problems.
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
              Web apps, mobile apps, internal tools, and integrations built to your specifications with clean code, testing, and documentation.
            </ListItem>
            <ListItem title="AI Automation & LLM Solutions">
              Chatbots, copilots, and workflow automation powered by modern AI. We help you leverage LLMs to streamline operations and reduce manual work.
            </ListItem>
            <ListItem title="Cloud & DevOps Engineering">
              Migrations, CI/CD pipelines, monitoring, security, and cost optimization. We build and maintain infrastructure that scales reliably.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
