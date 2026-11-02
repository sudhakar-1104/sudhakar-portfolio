import {
  ArrowUpRight,
  Code,
  FolderCode,
  CalendarDays,
  Star,
} from "lucide-react";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">WHAT I&apos;VE BUILT</p>

        <h2>
          Featured <span>Projects.</span>
        </h2>

        <p className="section-subtitle">
          A collection of projects exploring software engineering,
          artificial intelligence, computer vision, databases,
          embedded systems and cybersecurity.
        </p>
      </div>

      <div className="projects-overview">
        <div className="projects-count">
          <FolderCode size={21} />
          <span>
            <strong>{projects.length.toString().padStart(2, "0")}</strong>
            <small>PROJECTS</small>
          </span>
        </div>

        <p>Ideas transformed into working applications and systems.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            className={`project-card ${
              project.featured ? "featured-project" : ""
            }`}
            key={project.title}
          >
            <div className="project-card-top">
              <div className="project-icon">
                <FolderCode size={25} />
              </div>

              <div className="project-card-top-right">
                {project.featured && (
                  <span className="project-featured-label">
                    <Star size={12} />
                    FEATURED
                  </span>
                )}

                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="project-period">
              <CalendarDays size={14} />
              <span>{project.period}</span>
            </div>

            <p className="project-category">{project.category}</p>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-highlights">
              {project.highlights.map((highlight) => (
                <span key={highlight}>
                  <span className="highlight-bullet" />
                  {highlight}
                </span>
              ))}
            </div>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="project-footer">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <Code size={17} />
                  View Repository
                  <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="project-status">
                  Project overview
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
