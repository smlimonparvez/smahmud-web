"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const ITEMS = [
  {
    title: "Business Analysis",
    idx: "01",
    text: "Reading the numbers behind the business to surface what is really driving performance.",
    icon: <path d="M3 17l6-6 4 4 8-8M21 7v6M21 7h-6" />,
  },
  {
    title: "Operational Improvement",
    idx: "02",
    text: "Removing friction from day-to-day processes so teams move faster with fewer wasted hours.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </>
    ),
  },
  {
    title: "Business Planning",
    idx: "03",
    text: "Turning ambition into a clear, sequenced plan with milestones you can actually follow.",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </>
    ),
  },
  {
    title: "Go-To-Market Strategy",
    idx: "04",
    text: "Positioning, pricing, and channel choices that get your offer in front of the right buyers.",
    icon: (
      <>
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
      </>
    ),
  },
  {
    title: "Strategic Decision-Making",
    idx: "05",
    text: "A structured way to weigh options so big calls are made with evidence, not instinct alone.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z" />
      </>
    ),
  },
];

export default function WhatHeDoesSection() {
  const { ref: leftRef, inView: leftInView } = useReveal<HTMLDivElement>();
  const { ref: listRef, inView: listInView } = useReveal<HTMLDivElement>();
  const [activeIdx, setActiveIdx] = useState(3);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % ITEMS.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="wthd-section" id="what-he-does">
      <div className="wrap wthd-grid">
        <div
          ref={leftRef}
          data-reveal
          className={`wthd-left${leftInView ? " in" : ""}`}
        >
          <div className="eyebrow">What He Does</div>
          <h2>Practical work that moves the business forward.</h2>
          <p>
            Every engagement blends analysis, planning and strategy so the
            thinking never stays on the whiteboard, it turns into decisions
            your team can act on.
          </p>
          <div className="img-frame">
            <Image
              src="/images/what-he-does.jpg"
              alt="Shaheen Mahmud, business analyst"
              width={800}
              height={620}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div
          ref={listRef}
          data-reveal-stagger
          className={`wthd-list${listInView ? " in" : ""}`}
        >
          {ITEMS.map((item, i) => (
            <div
              key={item.idx}
              className={`wthd-item${i === activeIdx ? " active" : ""}`}
            >
              <div className="wthd-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {item.icon}
                </svg>
              </div>
              <div className="wthd-text">
                <div className="row">
                  <h3>
                    {item.title} <span className="pulse-dot"></span>
                  </h3>
                  <span className="wthd-idx">{item.idx}</span>
                </div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
