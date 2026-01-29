"use client";

import { useState, useCallback } from "react";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import StepIndicator from "./StepIndicator";
import ServiceSelection from "./ServiceSelection";
import ServiceDetails from "./ServiceDetails";
import AssetRequirements from "./AssetRequirements";
import ContactInfo, { type ContactData } from "./ContactInfo";
import PlanSummary from "./PlanSummary";
import { serviceSubOptions } from "./data/services";

const TOTAL_STEPS = 5;

interface PlanState {
  selectedServices: string[];
  serviceDetails: Record<string, Record<string, string>>;
  assets: Record<string, string>;
  contact: ContactData;
}

const initialContact: ContactData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  timeline: "flexible",
};

const PlanBuilder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [planState, setPlanState] = useState<PlanState>({
    selectedServices: [],
    serviceDetails: {},
    assets: {},
    contact: initialContact,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactData, string>>>({});

  // Service selection handlers
  const handleServiceToggle = useCallback((serviceId: string) => {
    setPlanState((prev) => {
      const isSelected = prev.selectedServices.includes(serviceId);
      let newSelected: string[];
      let newDetails = { ...prev.serviceDetails };

      if (isSelected) {
        // Remove service and its details
        newSelected = prev.selectedServices.filter((id) => id !== serviceId);
        delete newDetails[serviceId];
      } else {
        // Add service
        newSelected = [...prev.selectedServices, serviceId];
      }

      return {
        ...prev,
        selectedServices: newSelected,
        serviceDetails: newDetails,
      };
    });
  }, []);

  // Service details handlers
  const handleDetailChange = useCallback(
    (serviceId: string, optionId: string, value: string) => {
      setPlanState((prev) => ({
        ...prev,
        serviceDetails: {
          ...prev.serviceDetails,
          [serviceId]: {
            ...prev.serviceDetails[serviceId],
            [optionId]: value,
          },
        },
      }));
    },
    []
  );

  // Asset handlers
  const handleAssetChange = useCallback((questionId: string, value: string) => {
    setPlanState((prev) => ({
      ...prev,
      assets: {
        ...prev.assets,
        [questionId]: value,
      },
    }));
  }, []);

  // Contact handlers
  const handleContactChange = useCallback(
    (field: keyof ContactData, value: string) => {
      setPlanState((prev) => ({
        ...prev,
        contact: {
          ...prev.contact,
          [field]: value,
        },
      }));
      // Clear error when user types
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    },
    [errors]
  );

  // Validation
  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return planState.selectedServices.length > 0;
      case 2:
        // Check if all required service details are filled
        const servicesWithOptions = planState.selectedServices.filter(
          (id) => serviceSubOptions[id] && serviceSubOptions[id].length > 0
        );
        return servicesWithOptions.every((serviceId) => {
          const options = serviceSubOptions[serviceId];
          const details = planState.serviceDetails[serviceId] || {};
          return options.every((opt) => details[opt.id]);
        });
      case 3:
        return true; // Assets are optional
      case 4:
        const newErrors: Partial<Record<keyof ContactData, string>> = {};
        if (!planState.contact.fullName.trim()) {
          newErrors.fullName = "Name is required";
        }
        if (!planState.contact.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(planState.contact.email)) {
          newErrors.email = "Please enter a valid email";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const canProceed = (): boolean => {
    switch (currentStep) {
      case 1:
        return planState.selectedServices.length > 0;
      case 2:
        const servicesWithOptions = planState.selectedServices.filter(
          (id) => serviceSubOptions[id] && serviceSubOptions[id].length > 0
        );
        if (servicesWithOptions.length === 0) return true;
        return servicesWithOptions.every((serviceId) => {
          const options = serviceSubOptions[serviceId];
          const details = planState.serviceDetails[serviceId] || {};
          return options.every((opt) => details[opt.id]);
        });
      case 3:
        return true;
      case 4:
        return (
          planState.contact.fullName.trim() !== "" &&
          planState.contact.email.trim() !== "" &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(planState.contact.email)
        );
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ServiceSelection
            selectedServices={planState.selectedServices}
            onServiceToggle={handleServiceToggle}
          />
        );
      case 2:
        return (
          <ServiceDetails
            selectedServices={planState.selectedServices}
            serviceDetails={planState.serviceDetails}
            onDetailChange={handleDetailChange}
          />
        );
      case 3:
        return (
          <AssetRequirements
            assets={planState.assets}
            onAssetChange={handleAssetChange}
          />
        );
      case 4:
        return (
          <ContactInfo
            contact={planState.contact}
            onContactChange={handleContactChange}
            errors={errors}
          />
        );
      case 5:
        return (
          <PlanSummary
            selectedServices={planState.selectedServices}
            serviceDetails={planState.serviceDetails}
            assets={planState.assets}
            contact={planState.contact}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="print:hidden">
        <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
      </div>

      <FadeIn key={currentStep}>
        <div className="min-h-[400px]">{renderStep()}</div>
      </FadeIn>

      {/* Navigation Buttons */}
      <div className="mt-8 flex items-center justify-between print:hidden">
        <div>
          {currentStep > 1 && currentStep < 5 && (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition hover:text-neutral-950"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </button>
          )}
        </div>

        <div>
          {currentStep < 5 && (
            <Button
              type="button"
              onClick={handleNext}
              disabled={!canProceed()}
              className={!canProceed() ? "cursor-not-allowed opacity-50" : ""}
            >
              {currentStep === 4 ? "View Summary" : "Next"}
            </Button>
          )}
          {currentStep === 5 && (
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition hover:text-neutral-950"
            >
              Start Over
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanBuilder;
