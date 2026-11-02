import { Code, BriefcaseBusiness, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <a href="#home" className="footer-logo">
            SK<span>.</span>
          </a>

          <p>
            Building, learning and exploring the possibilities
            of technology.
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/sudhakar-1104"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/k-s-sudhakar-75a6052ab/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={19} />
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>
            © 2026 Sudhakar K S. All rights reserved.
          </p>

          <div className="footer-links">
            {footerLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>

          <a href="#home" className="back-to-top" aria-label="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}