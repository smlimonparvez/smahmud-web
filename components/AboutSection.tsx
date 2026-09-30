"use client";

import { useReveal } from "@/hooks/useReveal";
import { useCounter } from "@/hooks/useCounter";

const STATS = [
  {
    target: 150,
    suffix: "+",
    text: "Advisory engagements across strategy, operations, and growth.",
    icon: (
      <path d="M3 17l6-6 4 4 8-8M21 7v6M21 7h-6" />
    ),
  },
  {
    target: 90,
    suffix: "%+",
    text: "Clients returning for repeat and long-term advisory work.",
    icon: (
      <>
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2M17 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.85" />
      </>
    ),
  },
  {
    target: 10,
    suffix: "+",
    text: "Years supporting founders, startups, and leadership teams.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
  },
];

function StatCard({
  target,
  suffix,
  text,
  icon,
  start,
}: {
  target: number;
  suffix: string;
  text: string;
  icon: React.ReactNode;
  start: boolean;
}) {
  const value = useCounter(target, start);
  return (
    <div className="stat-card">
      <div className="stat-icon">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {icon}
        </svg>
      </div>
      <div className="stat-num">
        <span className="counter">{value}</span>
        {suffix}
      </div>
      <p>{text}</p>
    </div>
  );
}

export default function AboutSection() {
  const { ref: headRef, inView: headInView } = useReveal<HTMLDivElement>();
  const { ref: titleRef, inView: titleInView } =
    useReveal<HTMLHeadingElement>();
  const { ref: statsRef, inView: statsInView } = useReveal<HTMLDivElement>();

  return (
    <section className="about-section" id="about">
      <div className="wrap">
        <div
          ref={headRef}
          data-reveal
          className={`eyebrow${headInView ? " in" : ""}`}
        >
          Meet Shaheen Mahmud
        </div>
        <h2 ref={titleRef} data-reveal className={titleInView ? "in" : ""}>
          Shaheen Mahmud is a business analyst, advisor and neuro-marketing
          professional passionate about helping entrepreneurs and startups
          make <span className="lime">better decisions</span>.
        </h2>
        <div
          ref={statsRef}
          data-reveal-stagger
          className={`stat-grid${statsInView ? " in" : ""}`}
        >
          {STATS.map((stat) => (
            <StatCard key={stat.target} {...stat} start={statsInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
