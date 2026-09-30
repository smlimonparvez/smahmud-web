"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function FinalCta() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section className="final-cta">
      <div className="bgimg">
        <Image
          src="/images/final-cta.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 18%" }}
        />
      </div>
      <div className="orbit-dot"></div>
      <div
        ref={ref}
        data-reveal
        className={`wrap final-inner${inView ? " in" : ""}`}
      >
        <span className="badge-pill">
          <span className="dot"></span>Ready When You Are
        </span>
        <h2>
          Let&apos;s build something
          <br />
          <span className="lime">that lasts.</span>
        </h2>
        <p>
          Bring the ambition. We will bring the analysis, the strategy, and
          the clarity to make it real.
        </p>
        <div className="final-btns">
          <a href="#contact" className="btn btn-lime">
            Get in touch
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
            >
              <path d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </a>
          <a href="#services" className="btn btn-outline">
            Review services
          </a>
        </div>
      </div>
    </section>
  );
}
