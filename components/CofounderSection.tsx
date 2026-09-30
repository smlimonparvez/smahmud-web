"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function CofounderSection() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section className="cofounder-section">
      <div className="wrap">
        <div
          ref={ref}
          data-reveal
          className={`cf-card${inView ? " in" : ""}`}
        >
          <div className="cf-photo">
            <Image
              src="/images/cofounder.jpg"
              alt="Shaheen Mahmud, Co-Founder of Xenone Studio"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="cf-content">
            <span className="badge-pill">
              <span className="dot"></span>Leadership
            </span>
            <h2>
              Co-Founder of <span className="lime">Xenone Studio</span>
            </h2>
            <p>
              Beyond advisory work, Shaheen Mahmud co-founded Xenone Studio
              building brands and digital products with the same analytical
              rigour he brings to client strategy.
            </p>
            <p>
              That founder experience shapes how he advises: pragmatic,
              commercially aware, and grounded in the realities of running a
              business, not just theorising about it.
            </p>
            <div className="tags">
              <span className="tag">Founder mindset</span>
              <span className="tag">Brand &amp; digital</span>
              <span className="tag">Strategy-led delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
