import Image from "next/image";

const MARQUEE_ITEMS = [
  "Xenone Studio",
  "Danube Properties",
  "DACHA",
  "Bashundhara Group",
  "COVE",
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-photo">
        <Image
          src="/images/hero.jpg"
          alt="Shaheen Mahmud speaking"
          fill
          priority
          sizes="50vw"
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />
      </div>
      <div className="wrap hero-inner">
        <div className="hero-badge">
          <span className="dot"></span> Business Analyst · Business Advisor
        </div>
        <h1>
          Clarity for smarter
          <br />
          <span className="lime">business growth.</span>
        </h1>
        <p>
          Helping entrepreneurs and startups make bold, smart and profitable
          decisions through business analysis, strategic advisory and
          neuro-marketing.
        </p>
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
      </div>
      <div className="wrap hero-foot">
        <div className="scroll-cue">
          Scroll the page
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
        <div className="marquee-wrap">
          <div className="marquee">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
