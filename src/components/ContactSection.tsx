import Container from "./Container";
import FadeIn from "./FadeIn";
import Offices from "./Offices";
import CalendlyButton from "./CalendlyButton";

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
            Ready to build something that actually moves your business forward?
          </h2>
          <div className="mt-6 flex justify-center">
            <CalendlyButton invert>
              Book a free strategy call
            </CalendlyButton>
          </div>
          <div className="mt-10 border-t border-white/10 pt-10">
            <h3 className="font-display text-base font-semibold text-white">
              Location
            </h3>
            <Offices
              invert
              className="mt-6"
            />
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
