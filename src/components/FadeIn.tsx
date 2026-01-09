"use client";

import { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -200px" };

interface FadeInProps extends React.ComponentProps<typeof motion.div> {
  className?: string;
  children?: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = (props) => {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    />
  );
};

interface FadeInStaggerProps extends React.ComponentProps<typeof motion.div> {
  faster?: boolean;
}

export const FadeInStagger: React.FC<FadeInStaggerProps> = ({ faster = false, ...props }) => {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
};

export default FadeIn;
