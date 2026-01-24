import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based on the discovery phase insights, we create a detailed development roadmap and begin iterative development using agile methodologies. Our team works in focused sprints to deliver incremental value while maintaining flexibility for evolving requirements.
        </p>
        <p>
          Each client is assigned a dedicated project manager who serves as your primary point of contact, ensuring transparent communication throughout development. Regular progress updates, sprint reviews, and demos keep you informed and engaged at every stage.
        </p>
        <p>
          Our development team follows industry best practices including code reviews, continuous integration, and automated testing to ensure the highest quality standards. We leverage modern frameworks and proven architectures to build scalable, maintainable solutions.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        What you can expect
      </h3>
      <ul className="mt-4 space-y-2 text-base text-neutral-600">
        <li className="flex items-start gap-3">
          <span className="text-neutral-950">•</span>
          <span>Weekly updates, demos, and documentation</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-neutral-950">•</span>
          <span>Dedicated project manager as your point of contact</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-neutral-950">•</span>
          <span>Code reviews and continuous integration</span>
        </li>
      </ul>
    </Section>
  );
};

export default Build;
