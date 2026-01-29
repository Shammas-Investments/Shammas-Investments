"use client";

import { motion } from "framer-motion";

interface SuccessAnimationProps {
  title: string;
  message: string;
  onReset?: () => void;
  resetLabel?: string;
}

const SuccessAnimation = ({
  title,
  message,
  onReset,
  resetLabel = "Send another message",
}: SuccessAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center py-12 text-center"
    >
      {/* Animated checkmark circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
        className="relative mb-6"
      >
        {/* Outer ring animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-green-500"
        />

        {/* Main circle */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-green-500">
          {/* Checkmark SVG */}
          <motion.svg
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </motion.svg>
        </div>
      </motion.div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="font-display text-2xl font-semibold text-neutral-950"
      >
        {title}
      </motion.h3>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="mt-3 max-w-md text-base text-neutral-600"
      >
        {message}
      </motion.p>

      {/* Confetti particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0,
              x: "50%",
              y: "40%",
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0.5],
              x: `${50 + (Math.random() - 0.5) * 80}%`,
              y: `${40 + (Math.random() - 0.5) * 60}%`,
            }}
            transition={{
              delay: 0.3 + i * 0.05,
              duration: 1,
              ease: "easeOut",
            }}
            className={`absolute h-2 w-2 rounded-full ${
              i % 3 === 0
                ? "bg-green-400"
                : i % 3 === 1
                  ? "bg-neutral-400"
                  : "bg-neutral-300"
            }`}
          />
        ))}
      </div>

      {/* Reset button */}
      {onReset && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          onClick={onReset}
          className="mt-8 text-sm font-medium text-neutral-600 underline-offset-4 hover:text-neutral-950 hover:underline"
        >
          {resetLabel}
        </motion.button>
      )}
    </motion.div>
  );
};

export default SuccessAnimation;
