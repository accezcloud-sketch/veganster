"use client";

import { useState } from "react";

// Paste your deployed Apps Script Web App URL here (ends in /exec)
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwgmdMgt4ElAW-9NpeXKb8qgBi-z3UQAU0ZYDivWLG3JGtkVrO-8v45BrUkZf9Tobwu/exec";

type Status = "idle" | "submitting" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || status === "submitting") return;

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch(WEB_APP_URL, {
        method: "POST",
        body: new URLSearchParams({ email }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Subscription failed");

      setStatus("success");
      setMessage("You're in — check your inbox soon.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <form
        className="flex flex-col sm:flex-row gap-3"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "submitting"}
          placeholder="Your email address"
          className="flex-1 px-5 py-3 rounded-full border border-cream-dark bg-white text-charcoal placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-forest/30 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-7 py-3 bg-forest text-white font-semibold rounded-full hover:bg-forest-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 text-sm ${
            status === "success" ? "text-forest" : "text-red-600"
          }`}
          role="status"
        >
          {message}
        </p>
      )}
    </div>
  );
}
