"use client";

import clsx from "clsx";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const steps = [
  { number: 1, label: "Services" },
  { number: 2, label: "Details" },
  { number: 3, label: "Assets" },
  { number: 4, label: "Contact" },
  { number: 5, label: "Summary" },
];

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="mb-8">
      {/* Mobile view - simplified */}
      <div className="flex items-center justify-between sm:hidden">
        <span className="text-sm font-medium text-neutral-950">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm text-neutral-600">{steps[currentStep - 1]?.label}</span>
      </div>

      {/* Desktop view - full steps */}
      <div className="hidden sm:block">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={clsx(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all",
                    currentStep > step.number
                      ? "border-neutral-950 bg-neutral-950 text-white"
                      : currentStep === step.number
                        ? "border-neutral-950 bg-white text-neutral-950"
                        : "border-neutral-300 bg-white text-neutral-400"
                  )}
                >
                  {currentStep > step.number ? (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>
                <span
                  className={clsx(
                    "mt-2 text-xs font-medium",
                    currentStep >= step.number ? "text-neutral-950" : "text-neutral-400"
                  )}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={clsx(
                    "mx-2 h-0.5 w-12 lg:w-20",
                    currentStep > step.number ? "bg-neutral-950" : "bg-neutral-200"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar for mobile */}
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-neutral-200 sm:hidden">
        <div
          className="h-full rounded-full bg-neutral-950 transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default StepIndicator;
