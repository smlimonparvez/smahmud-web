"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const QUADS = [
  {
    title: "Attention",
    text: "What makes people stop and look",
    icon: (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    title: "Emotion",
    text: "What makes them care enough to act",
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    ),
  },
  {
    title: "Behaviour",
    text: "The patterns behind real buying habits",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
  {
    title: "Decision",
    text: "The final nudge that turns interest into a sale",
    icon: (
      <>
        <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </>
    ),
  },
];

export default function NeuroSection() {
  const { ref: leftRef, inView: leftInView } = useReveal<HTMLDivElement>();
  const { ref: rightRef, inView: rightInView } = useReveal<HTMLDivElement>();

  return (
    <section className="neuro-section" id="neuro-marketing">
      <div className="wrap neuro-grid">
        <div
          ref={leftRef}
          data-reveal
          className={`neuro-left${leftInView ? " in" : ""}`}
        >
          <div className="eyebrow">The Science Behind The Sale</div>
          <h2>Neuro-Marketing</h2>
          <p>
            People rarely buy for purely rational reasons. Understanding
            customer psychology, emotion, behaviour, and the way buying
            decisions are actually made is what separates marketing that
            gets seen from marketing that converts.
          </p>
          <p>
            By mapping how your audience notices, feels, and chooses, we
            design the message, offer, and journey around the real decision
            — turning attention into action.
          </p>
          <div className="neuro-quad">
            {QUADS.map((q) => (
              <div className="quad-card" key={q.title}>
                <div className="quad-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {q.icon}
                  </svg>
                </div>
                <h4>{q.title}</h4>
                <p>{q.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          ref={rightRef}
          data-reveal
          className={`neuro-right${rightInView ? " in" : ""}`}
        >
          <div className="img-frame">
            <Image
              src="/images/neuro-team.jpg"
              alt="Xenone Studio team at work"
              width={800}
              height={736}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="quote-bar">
            <div className="qicon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#11150A"
                strokeWidth="2.4"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
            </div>
            <span>
              Attention is easy to buy. <span className="lime">Action</span>{" "}
              is what we engineer.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
