"use client";

import { FormEvent, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const initialValues = {
  schoolName: "",
  contactName: "",
  email: "",
  phone: "",
  studentCount: "Less than 500",
  challenge: "",
};

export default function LeadCaptureForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Unable to submit your request right now.");
      }

      setStatus("success");
      setValues(initialValues);
      setMessage(data.message ?? "Thanks! We will contact you shortly.");

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", {
          method: "website_form",
          event_category: "engagement",
          event_label: "audit_form_submit",
        });
      }
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Submission failed. Please try again.");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="schoolName">
          School Name
        </label>
        <input
          id="schoolName"
          name="schoolName"
          className="w-full rounded-lg border-white/20 bg-white/10 text-white placeholder-white/40 focus:border-secondary focus:ring-secondary"
          placeholder="e.g. St. Mary\'s Academy"
          value={values.schoolName}
          onChange={(event) => setValues((prev) => ({ ...prev, schoolName: event.target.value }))}
          required
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="contactName">
          Contact Person
        </label>
        <input
          id="contactName"
          name="contactName"
          className="w-full rounded-lg border-white/20 bg-white/10 text-white placeholder-white/40 focus:border-secondary focus:ring-secondary"
          placeholder="Principal / Admin Name"
          value={values.contactName}
          onChange={(event) => setValues((prev) => ({ ...prev, contactName: event.target.value }))}
          required
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="studentCount">
          Estimated Student Count
        </label>
        <select
          id="studentCount"
          name="studentCount"
          className="w-full rounded-lg border-white/20 bg-white/10 text-white focus:border-secondary focus:ring-secondary"
          value={values.studentCount}
          onChange={(event) => setValues((prev) => ({ ...prev, studentCount: event.target.value }))}
        >
          <option className="text-slate-900">Less than 500</option>
          <option className="text-slate-900">500 - 1500</option>
          <option className="text-slate-900">1500+</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="challenge">
          Primary Challenge
        </label>
        <input
          id="challenge"
          name="challenge"
          className="w-full rounded-lg border-white/20 bg-white/10 text-white placeholder-white/40 focus:border-secondary focus:ring-secondary"
          placeholder="e.g. Fee collection, Attendance..."
          value={values.challenge}
          onChange={(event) => setValues((prev) => ({ ...prev, challenge: event.target.value }))}
          required
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          className="w-full rounded-lg border-white/20 bg-white/10 text-white placeholder-white/40 focus:border-secondary focus:ring-secondary"
          placeholder="principal@schoolname.com"
          type="email"
          value={values.email}
          onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
          required
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          className="w-full rounded-lg border-white/20 bg-white/10 text-white placeholder-white/40 focus:border-secondary focus:ring-secondary"
          placeholder="+91 9XXXXXXXXX"
          type="tel"
          value={values.phone}
          onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
          required
        />
      </div>
      <button
        className="w-full rounded-xl bg-secondary py-4 font-bold shadow-lg shadow-secondary/30 transition-all hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:cursor-not-allowed disabled:opacity-70"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting..." : "Get My Free Audit"}
      </button>
      {message ? (
        <p className={`text-sm ${status === "success" ? "text-emerald-300" : "text-rose-300"}`}>{message}</p>
      ) : null}
    </form>
  );
}
