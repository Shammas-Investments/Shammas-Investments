"use client";

import { useState } from "react";
import {
  services,
  serviceSubOptions,
  assetQuestions,
  formatPrice,
  timelineOptions,
} from "./data/services";
import type { ContactData } from "./ContactInfo";
import clsx from "clsx";

interface PlanSummaryProps {
  selectedServices: string[];
  serviceDetails: Record<string, Record<string, string>>;
  assets: Record<string, string>;
  contact: ContactData;
}

const PlanSummary: React.FC<PlanSummaryProps> = ({
  selectedServices,
  serviceDetails,
  assets,
  contact,
}) => {
  const [emailStatus, setEmailStatus] = useState<{
    type: "" | "success" | "error" | "loading";
    message: string;
  }>({ type: "", message: "" });

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
    window.print();
  };

  const handleEmail = async () => {
    setEmailStatus({ type: "loading", message: "Sending email..." });

    try {
      const summaryText = generateSummaryText();
      // Use secure server-side API route
      const response = await fetch("/api/quote", {
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
        setEmailStatus({
          type: "success",
          message: "Summary sent to your email!",
        });
      } else {
        setEmailStatus({
          type: "error",
          message: result.error || "Failed to send email. Please try again.",
        });
      }
    } catch {
      setEmailStatus({
        type: "error",
        message: "Error sending email. Please try again.",
      });
    }
  };

  const handleScheduleCall = () => {
    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="print:p-0">
      <div className="mb-6 print:hidden">
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Your Service Plan Summary
        </h2>
        <p className="mt-2 text-base text-neutral-600">
          Review your selections below. You can print, email, or schedule a call
          to discuss further.
        </p>
      </div>

      {/* Print header */}
      <div className="mb-8 hidden print:block">
        <h1 className="text-2xl font-bold">Service Plan Summary</h1>
        <p className="text-sm text-neutral-500">
          Generated on {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-6">
        {/* Contact Info */}
        <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-950/5 print:bg-white print:ring-0">
          <h3 className="mb-4 font-display text-lg font-semibold text-neutral-950">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            <div>
              <span className="text-neutral-500">Name:</span>{" "}
              <span className="font-medium text-neutral-950">
                {contact.fullName}
              </span>
            </div>
            <div>
              <span className="text-neutral-500">Email:</span>{" "}
              <span className="font-medium text-neutral-950">
                {contact.email}
              </span>
            </div>
            {contact.phone && (
              <div>
                <span className="text-neutral-500">Phone:</span>{" "}
                <span className="font-medium text-neutral-950">
                  {contact.phone}
                </span>
              </div>
            )}
            {contact.company && (
              <div>
                <span className="text-neutral-500">Company:</span>{" "}
                <span className="font-medium text-neutral-950">
                  {contact.company}
                </span>
              </div>
            )}
            <div>
              <span className="text-neutral-500">Timeline:</span>{" "}
              <span className="font-medium text-neutral-950">
                {getTimelineLabel(contact.timeline)}
              </span>
            </div>
          </div>
        </div>

        {/* Selected Services */}
        <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-950/5 print:bg-white print:ring-0">
          <h3 className="mb-4 font-display text-lg font-semibold text-neutral-950">
            Selected Services
          </h3>
          <div className="space-y-4">
            {selectedServiceData.map((service) => (
              <div
                key={service.id}
                className="border-b border-neutral-200 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-neutral-950">
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
                                className="text-sm text-neutral-500"
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
          <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-950/5 print:bg-white print:ring-0">
            <h3 className="mb-4 font-display text-lg font-semibold text-neutral-950">
              Assets & Requirements
            </h3>
            <div className="space-y-2 text-sm">
              {Object.entries(assets).map(([questionId, value]) => {
                const question = assetQuestions.find(
                  (q) => q.id === questionId
                );
                if (!question) return null;
                return (
                  <div key={questionId}>
                    <span className="text-neutral-500">{question.question}</span>
                    <p className="font-medium text-neutral-950">
                      {getAssetLabel(questionId, value)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Pricing Summary */}
        <div className="rounded-2xl bg-neutral-950 p-6 text-white">
          <h3 className="mb-4 font-display text-lg font-semibold">
            Estimated Pricing
          </h3>
          <div className="space-y-2">
            {oneTimeTotal > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">One-time services</span>
                <span className="text-xl font-semibold">
                  Starting from $
                  {oneTimeTotal.toLocaleString()}
                </span>
              </div>
            )}
            {monthlyTotal > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">Monthly services</span>
                <span className="text-xl font-semibold">
                  Starting from ${monthlyTotal.toLocaleString()}/mo
                </span>
              </div>
            )}
          </div>
          <p className="mt-4 text-xs text-neutral-400">
            * Final pricing may vary based on project scope and requirements.
            Schedule a call to discuss your specific needs.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 print:hidden sm:flex-row sm:flex-wrap">
          <button
            onClick={handlePrint}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-neutral-950 px-6 py-3 font-semibold text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
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
            disabled={emailStatus.type === "loading"}
            className={clsx(
              "inline-flex items-center justify-center gap-2 rounded-full border-2 border-neutral-950 px-6 py-3 font-semibold transition",
              emailStatus.type === "loading"
                ? "cursor-not-allowed bg-neutral-200 text-neutral-500"
                : "text-neutral-950 hover:bg-neutral-950 hover:text-white"
            )}
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {emailStatus.type === "loading" ? "Sending..." : "Email Plan"}
          </button>

          <button
            onClick={handleScheduleCall}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 font-semibold text-white transition hover:bg-neutral-800"
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

        {/* Email Status */}
        {emailStatus.message && (
          <div
            role="alert"
            aria-live="polite"
            className={clsx(
              "rounded-2xl p-4 print:hidden",
              emailStatus.type === "success"
                ? "bg-green-50 text-green-800"
                : emailStatus.type === "error"
                  ? "bg-red-50 text-red-800"
                  : "bg-neutral-50 text-neutral-600"
            )}
          >
            {emailStatus.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanSummary;
