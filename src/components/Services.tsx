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
        title="Complete IT Solutions for Your Digital Transformation"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From software development to AI/ML solutions, we provide comprehensive technology services that drive innovation and growth across every domain of the IT industry.
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
            <ListItem title="Software & Application Development">
              Custom software solutions, web applications, mobile apps, and enterprise systems built with cutting-edge technologies to meet your unique business requirements.
            </ListItem>
            <ListItem title="Game Development">
              Immersive gaming experiences across platforms, from concept to launch, utilizing the latest game engines and interactive technologies.
            </ListItem>
            <ListItem title="E-Commerce Platform Management">
              Complete e-commerce solutions including Amazon Seller Central, Walmart Marketplace, and Shopify store development, optimization, and management.
            </ListItem>
            <ListItem title="AI/ML & LLM Chatbot Development">
              Advanced AI and machine learning solutions, intelligent chatbots, natural language processing, and LLM integration for business automation.
            </ListItem>
            <ListItem title="Cloud Management & Infrastructure">
              Cloud architecture, migration, optimization, and management across AWS, Azure, and Google Cloud platforms with 24/7 monitoring.
            </ListItem>
            <ListItem title="Graphics Design & Content Management">
              Professional graphic design, brand identity, content creation, and comprehensive content management system implementation.
            </ListItem>
            <ListItem title="Social Media Management">
              Strategic social media profile management, content scheduling, engagement tracking, and digital marketing campaigns across all platforms.
            </ListItem>
            <ListItem title="Digital Transformation Consulting">
              End-to-end IT consulting services to modernize your infrastructure, optimize processes, and accelerate your digital transformation journey.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
