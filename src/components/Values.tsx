import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our values"
        title="Built on trust and execution"
      >
        <p>
          We believe that great partnerships are built on honest communication,
          consistent delivery, and a shared commitment to quality. These values
          guide every project we take on.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Integrity">
            Honest timelines and clear scope. We set realistic expectations
            from day one and communicate proactively throughout every engagement.
          </GridListItem>
          <GridListItem title="Quality">
            Clean code, thorough testing, and comprehensive documentation.
            We build systems designed to last and scale with your business.
          </GridListItem>
          <GridListItem title="Partnership">
            Proactive communication and true ownership. We invest in understanding
            your business goals and treat your success as our own.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
