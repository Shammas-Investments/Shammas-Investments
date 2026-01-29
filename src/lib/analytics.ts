// Google Analytics 4 utility functions

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

// Check if GA is available
export const isGAEnabled = (): boolean => {
  return typeof window !== "undefined" && !!GA_MEASUREMENT_ID;
};

// Page view tracking
export const pageview = (url: string) => {
  if (!isGAEnabled()) return;
  window.gtag("config", GA_MEASUREMENT_ID!, {
    page_path: url,
  });
};

// Custom event tracking
interface EventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: string | number | undefined;
}

export const event = ({ action, category, label, value, ...rest }: EventParams) => {
  if (!isGAEnabled()) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
    ...rest,
  });
};

// Pre-defined events for common actions
export const trackFormSubmission = (formName: string, success: boolean = true) => {
  event({
    action: success ? "form_submission_success" : "form_submission_error",
    category: "Form",
    label: formName,
  });
};

export const trackButtonClick = (buttonName: string, location?: string) => {
  event({
    action: "button_click",
    category: "Engagement",
    label: buttonName,
    button_location: location,
  });
};

export const trackCTAClick = (ctaName: string, destination?: string) => {
  event({
    action: "cta_click",
    category: "Conversion",
    label: ctaName,
    destination: destination,
  });
};

export const trackServiceSelection = (serviceName: string) => {
  event({
    action: "service_selected",
    category: "Quote Builder",
    label: serviceName,
  });
};

export const trackQuoteGenerated = (totalValue: number, services: string[]) => {
  event({
    action: "quote_generated",
    category: "Conversion",
    value: totalValue,
    services_count: services.length,
    services: services.join(", "),
  });
};

export const trackNewsletterSignup = (success: boolean = true) => {
  event({
    action: success ? "newsletter_signup_success" : "newsletter_signup_error",
    category: "Conversion",
    label: "Newsletter",
  });
};

export const trackContactFormSubmit = (success: boolean = true) => {
  event({
    action: success ? "contact_form_success" : "contact_form_error",
    category: "Conversion",
    label: "Contact Form",
  });
};

export const trackExternalLink = (url: string, linkText?: string) => {
  event({
    action: "external_link_click",
    category: "Outbound",
    label: linkText || url,
    destination_url: url,
  });
};

export const trackScheduleCall = () => {
  event({
    action: "schedule_call_click",
    category: "Conversion",
    label: "Calendly",
  });
};

export const trackPrintPlan = () => {
  event({
    action: "print_plan",
    category: "Engagement",
    label: "Quote Summary",
  });
};

export const trackEmailPlan = (success: boolean = true) => {
  event({
    action: success ? "email_plan_success" : "email_plan_error",
    category: "Conversion",
    label: "Quote Summary Email",
  });
};

// Declare gtag on window
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "consent",
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}
