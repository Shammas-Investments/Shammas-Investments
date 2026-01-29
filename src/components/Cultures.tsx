import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="How We Work"
        title="Structured, transparent, and built to last."
        invert
      >
        <p>
          Our approach ensures clarity at every step and systems designed for the long term.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Structured Discovery" invert>
            We invest time upfront to understand your business, goals, and constraints before writing a single line of code.
          </GridListItem>
          <GridListItem title="Transparent Communication" invert>
            Regular progress updates, clear milestones, and honest conversations. You always know where things stand.
          </GridListItem>
          <GridListItem title="Long-term Maintainability" invert>
            Every engineering decision is made with the future in mind — clean architecture, documentation, and systems built to evolve.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
