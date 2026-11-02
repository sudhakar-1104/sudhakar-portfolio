"use client";

import dynamic from "next/dynamic";
import { ArrowDown, ArrowUpRight, Code, BriefcaseBusiness } from "lucide-react";

const Orb = dynamic(() => import("./Orb"), {
  ssr: false,
  loading: () => <div className="orb-loading" />,
});

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <p className="hero-greeting">
          <span className="status-dot" />
          HELLO, I&apos;M SUDHAKAR K S
        </p>

        <h1>
          Building digital
          <br />
          experiences with
          <br />
          <span>code & intelligence.</span>
        </h1>

        <p className="hero-description">
          Junior Software Developer focused on building useful software,
          exploring AI-driven solutions, and turning ideas into real-world
          applications.
        </p>

        <div className="hero-role">
          <span className="role-line" />
          <div>
            <strong>Junior Software Developer</strong>
            <p>Schima Sysnet Solutions · Sysnet Group of Companies</p>
          </div>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            Explore my work <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="secondary-button">
            Let&apos;s connect
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/sudhakar-1104"
            target="_blank"
            rel="noreferrer"
          >
            <Code size={19} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/k-s-sudhakar-75a6052ab/"
            target="_blank"
            rel="noreferrer"
          >
            <BriefcaseBusiness size={19} />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="orb-glow" />
        <Orb />
        <div className="orb-caption">
          <span>01 / CREATIVE TECHNOLOGY</span>
          <span>AI · SOFTWARE · INNOVATION</span>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <ArrowDown size={16} />
        <span>SCROLL TO EXPLORE</span>
      </a>
    </section>
  );
}