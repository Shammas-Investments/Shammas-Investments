import { z } from "zod";

/**
 * Contact form schema
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name contains invalid characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email must be less than 254 characters"),
  company: z
    .string()
    .max(200, "Company name must be less than 200 characters")
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .max(20, "Phone number must be less than 20 characters")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters"),
  budget: z
    .string()
    .max(100, "Budget must be less than 100 characters")
    .optional()
    .or(z.literal("")),
  botcheck: z.string().optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

/**
 * Newsletter subscription schema
 */
export const newsletterSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email must be less than 254 characters"),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

/**
 * Quote request schema
 */
export const quoteSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email must be less than 254 characters"),
  summary: z
    .string()
    .min(10, "Summary must be at least 10 characters")
    .max(10000, "Summary must be less than 10000 characters"),
});

export type QuoteInput = z.infer<typeof quoteSchema>;

/**
 * Helper function to parse and validate input with Zod
 * Returns the validated data or throws a formatted error
 */
export function parseSchema<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; error: string } {
  const result = schema.safeParse(data);

  if (!result.success) {
    // Get the first error message
    const firstError = result.error.issues[0];
    return {
      success: false,
      error: firstError?.message || "Validation failed",
    };
  }

  return {
    success: true,
    data: result.data,
  };
}

/**
 * Sanitize string input
 */
export function sanitizeString(input: string, maxLength: number = 1000): string {
  if (!input || typeof input !== "string") return "";
  return input.trim().slice(0, maxLength);
}
