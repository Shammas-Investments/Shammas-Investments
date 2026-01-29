"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  services,
  serviceSubOptions,
  assetQuestions,
  formatPrice,
  timelineOptions,
} from "./data/services";
import type { ContactData } from "./ContactInfo";
import clsx from "clsx";
import LoadingSpinner from "@/components/LoadingSpinner";
import { trackPrintPlan, trackEmailPlan, trackScheduleCall } from "@/lib/analytics";
import { useCSRF } from "@/hooks/useCSRF";

interface PlanSummaryProps {
  selectedServices: string[];
  serviceDetails: Record<string, Record<string, string>>;
  assets: Record<string, string>;
  contact: ContactData;
}

type EmailStatus = "idle" | "loading" | "success" | "error";

const PlanSummary: React.FC<PlanSummaryProps> = ({
  selectedServices,
  serviceDetails,
  assets,
  contact,
}) => {
  const { csrfFetch, isReady: csrfReady } = useCSRF();
  const [emailStatus, setEmailStatus] = useState<EmailStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com";

  // Calculate totals
  const selectedServiceData = services.filter((s) =>
    selectedServices.includes(s.id)
  );
  const oneTimeTotal = selectedServiceData
    .filter((s) => s.priceType === "one-time")
    .reduce((sum, s) => sum + s.price, 0);
  const monthlyTotal = selectedServiceData
    .filter((s) => s.priceType === "monthly")
    .reduce((sum, s) => sum + s.price, 0);

  // Get label for option value
  const getOptionLabel = (
    serviceId: string,
    optionId: string,
    value: string
  ) => {
    const options = serviceSubOptions[serviceId]?.find(
      (o) => o.id === optionId
    )?.options;
    return options?.find((o) => o.value === value)?.label || value;
  };

  const getAssetLabel = (questionId: string, value: string) => {
    const question = assetQuestions.find((q) => q.id === questionId);
    return question?.options.find((o) => o.value === value)?.label || value;
  };

  const getTimelineLabel = (value: string) => {
    return timelineOptions.find((o) => o.value === value)?.label || value;
  };

  // Generate plain text summary for email/print
  const generateSummaryText = () => {
    let text = `SERVICE PLAN SUMMARY\n`;
    text += `Generated on ${new Date().toLocaleDateString()}\n\n`;

    text += `CONTACT INFORMATION\n`;
    text += `-------------------\n`;
    text += `Name: ${contact.fullName}\n`;
    text += `Email: ${contact.email}\n`;
    if (contact.phone) text += `Phone: ${contact.phone}\n`;
    if (contact.company) text += `Company: ${contact.company}\n`;
    text += `Timeline: ${getTimelineLabel(contact.timeline)}\n\n`;

    text += `SELECTED SERVICES\n`;
    text += `-----------------\n`;
    selectedServiceData.forEach((service) => {
      text += `- ${service.name}: ${formatPrice(service.price, service.priceType)}\n`;
      const details = serviceDetails[service.id];
      if (details) {
        Object.entries(details).forEach(([optionId, value]) => {
          const optionLabel =
            serviceSubOptions[service.id]?.find((o) => o.id === optionId)
              ?.label || optionId;
          text += `  ${optionLabel}: ${getOptionLabel(service.id, optionId, value)}\n`;
        });
      }
    });
    text += `\n`;

    text += `ASSETS & REQUIREMENTS\n`;
    text += `---------------------\n`;
    Object.entries(assets).forEach(([questionId, value]) => {
      const question = assetQuestions.find((q) => q.id === questionId);
      if (question) {
        text += `${question.question}\n`;
        text += `  ${getAssetLabel(questionId, value)}\n`;
      }
    });
    text += `\n`;

    text += `ESTIMATED PRICING\n`;
    text += `-----------------\n`;
    if (oneTimeTotal > 0) {
      text += `One-time: Starting from $${oneTimeTotal.toLocaleString()}\n`;
    }
    if (monthlyTotal > 0) {
      text += `Monthly: Starting from $${monthlyTotal.toLocaleString()}/mo\n`;
    }
    text += `\n* Final pricing may vary based on project scope and requirements.\n`;

    return text;
  };

  const handlePrint = () => {
    trackPrintPlan();
    window.print();
  };

  const handleEmail = async () => {
    setEmailStatus("loading");
    setErrorMessage("");

    try {
      const summaryText = generateSummaryText();
      const response = await csrfFetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contact.fullName,
          email: contact.email,
          summary: summaryText,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setEmailStatus("success");
        trackEmailPlan(true);
      } else {
        setEmailStatus("error");
        setErrorMessage(result.error || "Failed to send email. Please try again.");
        trackEmailPlan(false);
      }
    } catch {
      setEmailStatus("error");
      setErrorMessage("Unable to send email. Please try again or contact us directly.");
      trackEmailPlan(false);
    }
  };

  const handleScheduleCall = () => {
    trackScheduleCall();
    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      {/* Print-only header with logo */}
      <div className="hidden print:block print:mb-4">
        <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-6">
          <div className="flex items-center gap-4">
            <Image
              src="/appLogo.png"
              alt="Shammas Development"
              width={180}
              height={50}
              className="h-12 w-auto"
              style={{ filter: 'none' }}
            />
          </div>
          <div className="text-right text-sm">
            <p className="font-semibold">Service Plan Summary</p>
            <p className="text-gray-600">Generated on {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Screen-only header */}
      <div className="mb-6 print:hidden">
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Your Service Plan Summary
        </h2>
        <p className="mt-2 text-base text-neutral-600">
          Review your selections below. You can print, email, or schedule a call
          to discuss further.
        </p>
      </div>

      <div className="space-y-6 print:space-y-3">
        {/* Contact Info */}
        <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-950/5 print:rounded-none print:bg-white print:p-0 print:ring-0 print:border-b print:border-gray-200 print:pb-4">
          <h3 className="mb-4 font-display text-lg font-semibold text-neutral-950 print:text-base print:mb-2">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 print:gap-1">
            <div>
              <span className="text-neutral-500 print:text-gray-600">Name:</span>{" "}
              <span className="font-medium text-neutral-950">
                {contact.fullName}
              </span>
            </div>
            <div>
              <span className="text-neutral-500 print:text-gray-600">Email:</span>{" "}
              <span className="font-medium text-neutral-950">
                {contact.email}
              </span>
            </div>
            {contact.phone && (
              <div>
                <span className="text-neutral-500 print:text-gray-600">Phone:</span>{" "}
                <span className="font-medium text-neutral-950">
                  {contact.phone}
                </span>
              </div>
            )}
            {contact.company && (
              <div>
                <span className="text-neutral-500 print:text-gray-600">Company:</span>{" "}
                <span className="font-medium text-neutral-950">
                  {contact.company}
                </span>
              </div>
            )}
            <div>
              <span className="text-neutral-500 print:text-gray-600">Timeline:</span>{" "}
              <span className="font-medium text-neutral-950">
                {getTimelineLabel(contact.timeline)}
              </span>
            </div>
          </div>
        </div>

        {/* Selected Services */}
        <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-950/5 print:rounded-none print:bg-white print:p-0 print:ring-0 print:border-b print:border-gray-200 print:pb-4 print:break-inside-avoid">
          <h3 className="mb-4 font-display text-lg font-semibold text-neutral-950 print:text-base print:mb-2">
            Selected Services
          </h3>
          <div className="space-y-4 print:space-y-2">
            {selectedServiceData.map((service) => (
              <div
                key={service.id}
                className="border-b border-neutral-200 pb-4 last:border-0 last:pb-0 print:pb-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-neutral-950 print:text-sm">
                      {service.name}
                    </p>
                    {serviceDetails[service.id] && (
                      <div className="mt-1 space-y-0.5">
                        {Object.entries(serviceDetails[service.id]).map(
                          ([optionId, value]) => {
                            const optionLabel =
                              serviceSubOptions[service.id]?.find(
                                (o) => o.id === optionId
                              )?.label || optionId;
                            return (
                              <p
                                key={optionId}
                                className="text-sm text-neutral-500 print:text-xs"
                              >
                                {optionLabel}:{" "}
                                <span className="text-neutral-700">
                                  {getOptionLabel(service.id, optionId, value)}
                                </span>
                              </p>
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>
                  <span className="flex-shrink-0 text-sm font-medium text-neutral-950">
                    {formatPrice(service.price, service.priceType)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assets */}
        {Object.keys(assets).length > 0 && (
          <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-950/5 print:rounded-none print:bg-white print:p-0 print:ring-0 print:border-b print:border-gray-200 print:pb-4 print:break-inside-avoid">
            <h3 className="mb-4 font-display text-lg font-semibold text-neutral-950 print:text-base print:mb-2">
              Assets & Requirements
            </h3>
            <div className="space-y-2 text-sm print:space-y-1">
              {Object.entries(assets).map(([questionId, value]) => {
                const question = assetQuestions.find(
                  (q) => q.id === questionId
                );
                if (!question) return null;
                return (
                  <div key={questionId}>
                    <span className="text-neutral-500 print:text-gray-600 print:text-xs">{question.question}</span>
                    <p className="font-medium text-neutral-950 print:text-sm">
                      {getAssetLabel(questionId, value)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Pricing Summary */}
        <div className="rounded-2xl bg-neutral-950 p-6 text-white print:rounded-none print:bg-gray-100 print:text-black print:p-4 print:border-2 print:border-black print:break-inside-avoid">
          <h3 className="mb-4 font-display text-lg font-semibold print:text-base print:mb-2">
            Estimated Pricing
          </h3>
          <div className="space-y-2">
            {oneTimeTotal > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-neutral-300 print:text-gray-700">One-time services</span>
                <span className="text-xl font-semibold print:text-lg">
                  Starting from ${oneTimeTotal.toLocaleString()}
                </span>
              </div>
            )}
            {monthlyTotal > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-neutral-300 print:text-gray-700">Monthly services</span>
                <span className="text-xl font-semibold print:text-lg">
                  Starting from ${monthlyTotal.toLocaleString()}/mo
                </span>
              </div>
            )}
          </div>
          <p className="mt-4 text-xs text-neutral-400 print:text-gray-600">
            * Final pricing may vary based on project scope and requirements.
            Schedule a call to discuss your specific needs.
          </p>
        </div>

        {/* Print-only footer */}
        <div className="hidden print:block print:mt-4 print:pt-2 print:border-t print:border-gray-300">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div>
              <p className="font-semibold text-black">Shammas Development LLC</p>
              <p>info@shammasdevelopment.io | shammasdevelopment.io</p>
            </div>
            <div className="text-right">
              <p>Remote-first</p>
              <p>Serving clients across the United States</p>
            </div>
          </div>
        </div>

        {/* Action Buttons - Screen only */}
        <div className="flex flex-col gap-3 print:hidden sm:flex-row sm:flex-wrap">
          <button
            onClick={handlePrint}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-neutral-950 px-6 py-3 font-semibold text-neutral-950 transition hover:bg-neutral-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2"
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
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            Print Plan
          </button>

          <button
            onClick={handleEmail}
            disabled={emailStatus === "loading" || emailStatus === "success" || !csrfReady}
            className={clsx(
              "inline-flex items-center justify-center gap-2 rounded-full border-2 px-6 py-3 font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2",
              emailStatus === "success"
                ? "border-green-500 bg-green-500 text-white"
                : emailStatus === "loading"
                  ? "cursor-not-allowed border-neutral-300 bg-neutral-100 text-neutral-400"
                  : "border-neutral-950 text-neutral-950 hover:bg-neutral-950 hover:text-white focus:ring-neutral-950"
            )}
          >
            {emailStatus === "loading" ? (
              <>
                <LoadingSpinner size="sm" color="gray" />
                Sending...
              </>
            ) : emailStatus === "success" ? (
              <>
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
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
                </motion.svg>
                Sent to Your Email!
              </>
            ) : (
              <>
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Plan
              </>
            )}
          </button>

          <button
            onClick={handleScheduleCall}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 font-semibold text-white transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2"
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Schedule a Call
          </button>
        </div>

        {/* Status Messages - Screen only */}
        <AnimatePresence>
          {emailStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3 rounded-2xl bg-green-50 p-4 text-green-800 print:hidden"
            >
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Plan sent successfully!</p>
                <p className="text-sm text-green-600">Check your inbox at {contact.email}</p>
              </div>
            </motion.div>
          )}

          {emailStatus === "error" && errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="rounded-2xl bg-red-50 p-4 text-red-800 print:hidden"
            >
              {errorMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PlanSummary;
