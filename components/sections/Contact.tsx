
import {
  Code,
  Mail,
  ArrowUpRight,
  MessageCircle,
  FileText,
  Download,
} from "lucide-react";

const contactLinks = [
  {
    name: "GitHub",
    description: "Explore my code, repositories and projects.",
    href: "https://github.com/sudhakar-1104",
    icon: Code,
    label: "EXPLORE",
    type: "external",
  },
  {
    name: "My Resume",
    description: "View my experience, skills and qualifications.",
    href: "/resume.pdf",
    icon: FileText,
    label: "VIEW / DOWNLOAD",
    type: "resume",
  },
];

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">GET IN TOUCH</p>

        <h2>
          Let&apos;s Build Something <span>Together.</span>
        </h2>

        <p className="section-subtitle">
          Have an opportunity, an interesting idea or a project in mind?
          I&apos;d be happy to connect and explore possibilities.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-message">
          <div className="contact-message-icon">
            <MessageCircle size={28} />
          </div>

          <span className="contact-availability">
            OPEN TO OPPORTUNITIES
          </span>

          <h3>Let&apos;s create something meaningful.</h3>

          <p>
            I&apos;m interested in software engineering, AI-driven applications
            and opportunities to learn, collaborate and build impactful
            technology.
          </p>

          <a
            href="https://www.linkedin.com/in/k-s-sudhakar-75a6052ab/"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Connect on LinkedIn <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="contact-links">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            const isResume = link.type === "resume";

            return (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`contact-link-card ${
                  isResume ? "resume-contact-card" : ""
                }`}
                key={link.name}
                aria-label={link.name}
              >
                <div className="contact-link-icon">
                  <Icon size={23} />
                </div>

                <div className="contact-link-info">
                  <span className="contact-card-label">{link.label}</span>
                  <h4>{link.name}</h4>
                  <p>{link.description}</p>
                </div>

                {isResume ? (
                  <Download size={20} className="contact-arrow" />
                ) : (
                  <ArrowUpRight size={20} className="contact-arrow" />
                )}
              </a>
            );
          })}

          <a
            href="mailto:YOUR_EMAIL_ADDRESS"
            className="contact-link-card"
          >
            <div className="contact-link-icon">
              <Mail size={22} />
            </div>

            <div className="contact-link-info">
              <span className="contact-card-label">SAY HELLO</span>
              <h4>Email</h4>
              <p>Send me a message directly.</p>
            </div>

            <ArrowUpRight size={19} className="contact-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
