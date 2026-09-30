const EXPLORE_LINKS = [
  { href: "#about", label: "About" },
  { href: "#what-he-does", label: "What He Does" },
  { href: "#neuro-marketing", label: "Neuro-Marketing" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

const SERVICE_LINKS = [
  { href: "#services", label: "Strategic Business Planning" },
  { href: "#services", label: "Business Analysis" },
  { href: "#services", label: "Go-To-Market Strategy" },
  { href: "#services", label: "Operational Improvement" },
  { href: "#neuro-marketing", label: "Neuro-Marketing" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <span className="mark">SM</span> Shaheen Mahmud
            </a>
            <p>
              Business Analyst, Business Advisor, and Neuro-Marketing
              Professional helping entrepreneurs and startups make bold,
              smart, and profitable decisions.
            </p>
            <div className="social">
              <a href="https://www.linkedin.com/in/shaheen1052/" target="_blank" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.7c0-1.6-.03-3.66-2.23-3.66-2.24 0-2.58 1.75-2.58 3.55V23h-4V8.5z" />
                </svg>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shaheen1052@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Explore</h5>
            {EXPLORE_LINKS.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            {SERVICE_LINKS.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Shaheen Mahmud. All rights reserved.</span>
          <span>Built by xenone studio.</span>
        </div>
      </div>
    </footer>
  );
}
