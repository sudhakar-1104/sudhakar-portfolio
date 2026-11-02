"use client";

import { useState } from "react";
import { Menu, X, Code, BriefcaseBusiness } from "lucide-react";
import { FileText, Download } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
  { label: "Certifications", href: "#certifications" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <a href="#home" className="navbar-logo">
          KS<span>.</span>
        </a>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <a
            href="https://github.com/sudhakar-1104"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="navbar-social"
          >
            <Code size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/k-s-sudhakar-75a6052ab/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="navbar-social"
          >
            <BriefcaseBusiness size={19} />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-resume"
            aria-label="View my resume"
          >
            <FileText size={17} />
            <span>Resume</span>
            <Download size={14} />
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </nav>
    </header>
  );
}