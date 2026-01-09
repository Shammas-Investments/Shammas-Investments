"use client";
import React, { useState } from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  budget: string;
}

interface StatusState {
  type: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "",
  });
  const [status, setStatus] = useState<StatusState>({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // Web3Forms API endpoint - FREE unlimited submissions
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
          budget: formData.budget,
          subject: "New Contact Form Submission - Shammas Investments",
          from_name: "Shammas Investments Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
          budget: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again or email us directly at info@shammasinvestments.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FadeIn>
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>

        {status.message && (
          <div
            className={`mt-4 rounded-2xl p-4 ${
              status.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {status.message}
          </div>
        )}

        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextInput
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput
                label="$25K – $50K"
                name="budget"
                value="$25K – $50K"
                checked={formData.budget === "$25K – $50K"}
                onChange={handleChange}
              />
              <RadioInput
                label="$50K – $100K"
                name="budget"
                value="$50K – $100K"
                checked={formData.budget === "$50K – $100K"}
                onChange={handleChange}
              />
              <RadioInput
                label="$100K – $150K"
                name="budget"
                value="$100K – $150K"
                checked={formData.budget === "$100K – $150K"}
                onChange={handleChange}
              />
              <RadioInput
                label="More than $150K"
                name="budget"
                value="More than $150K"
                checked={formData.budget === "More than $150K"}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Let's work together"}
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
