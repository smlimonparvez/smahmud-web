"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const STEPS = [
  {
    num: "01",
    title: "Diagnose",
    text: "We begin by understanding your business, challenges, data, and context — surfacing problems that are not immediately visible.",
  },
  {
    num: "02",
    title: "Clarify",
    text: "We bring structure to complexity, defining what matters most and separating symptoms from root causes.",
  },
  {
    num: "03",
    title: "Strategize",
    text: "We build a focused plan with clear choices, sensible sequencing, and measures of success you can track.",
  },
  {
    num: "04",
    title: "Execute",
    text: "We stay close through roll-out, refining the approach as real-world results come in.",
  },
];

function Step({ num, title, text }: { num: string; title: string; text: string }) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.4);
  return (
    <div ref={ref} className={`step${inView ? " in" : ""}`}>
      <div className="step-num">{num}</div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="step-bar"></div>
    </div>
  );
}

export default function ApproachSection() {
  const { ref: headRef, inView: headInView } = useReveal<HTMLDivElement>();
  const { ref: leftRef, inView: leftInView } = useReveal<HTMLDivElement>();

  return (
    <section className="approach-section" id="approach">
      <div className="wrap">
        <div
          ref={headRef}
          data-reveal
          className={`approach-head${headInView ? " in" : ""}`}
        >
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            The Process
          </div>
          <h2>Our consulting approach</h2>
          <p>
            Consulting is not advice for its own sake — it is structured
            thinking, objective analysis, and practical execution.
          </p>
        </div>
        <div className="approach-grid">
          <div
            ref={leftRef}
            data-reveal
            className={`approach-left${leftInView ? " in" : ""}`}
          >
            <div className="img-frame">
              <Image
                src="/images/approach.jpg"
                alt="Shaheen Mahmud, business advisor"
                width={700}
                height={714}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="steps">
            {STEPS.map((s) => (
              <Step key={s.num} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
