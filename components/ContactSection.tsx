"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const HELP_OPTIONS = [
  "Strategic Business Planning",
  "Business Analysis",
  "Go-To-Market Strategy",
  "Operational Improvement",
  "Customer Psychology & Neuro-Marketing",
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const { ref: leftRef, inView: leftInView } = useReveal<HTMLDivElement>();
  const { ref: formRef, inView: formInView } = useReveal<HTMLDivElement>();
  const [goals, setGoals] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending" || status === "success") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      service: String(data.get("service") || ""),
      goals: String(data.get("goals") || ""),
    };

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
      setGoals("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="wrap contact-grid">
        <div
          ref={leftRef}
          data-reveal
          className={`contact-left${leftInView ? " in" : ""}`}
        >
          <div className="eyebrow">Get In Touch</div>
          <h2>Let&apos;s talk about your next move.</h2>
          <p>
            Share a little about your business and what you&apos;re working
            through. You will get a considered reply — not a sales pitch.
          </p>
          <div className="info-card">
            <div className="info-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16v16H4z" opacity="0" />
                <path d="M22 6l-10 7L2 6" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </div>
            <div>
              <div className="label">Email</div>
              <div className="value">shaheen1052@gmail.com</div>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div>
              <div className="label">Response time</div>
              <div className="value">Within 1-2 business days</div>
            </div>
          </div>
        </div>
        <div ref={formRef} data-reveal className={formInView ? "in" : ""}>
          <form className="form-card" onSubmit={onSubmit}>
            <div className="form-row">
              <div className="field">
                <label>Full name</label>
                <input type="text" name="name" placeholder="Your name" required />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label>Company / startup</label>
                <input type="text" name="company" placeholder="Your business name" />
              </div>
              <div className="field">
                <label>What do you need help with?</label>
                <select name="service" defaultValue={HELP_OPTIONS[0]}>
                  {HELP_OPTIONS.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="field">
              <label>Tell me about your goals</label>
              <textarea
                name="goals"
                maxLength={500}
                placeholder="A few lines about where the business is and what you are trying to solve."
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
              />
            </div>
            <div className="char-count">
              <span>{goals.length}</span>/500
            </div>
            <button
              type="submit"
              className="btn btn-lime submit-btn"
              disabled={status === "sending" || status === "success"}
            >
              {status === "sending" ? "Sending…" : "Send message"}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
              </svg>
            </button>
            <div className={`form-success${status === "success" ? " show" : ""}`}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Thanks — your message is on its way. Expect a reply within 1-2
              business days.
            </div>
            <div className={`form-error${status === "error" ? " show" : ""}`}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v5M12 16h.01" />
              </svg>
              {errorMsg}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
