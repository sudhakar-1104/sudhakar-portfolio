import { BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    role: "Junior Software Developer",
    company: "Schima Sysnet Solutions",
    group: "Sysnet Group of Companies",
    period: "August 2026 – Present",
    type: "Full-time",
    description: [
      "Working on software development tasks and practical engineering workflows.",
      "Building technical skills through application development, debugging and problem-solving.",
      "Collaborating with the team to understand requirements and deliver software solutions.",
    ],
  },
  {
    role: "AI Engineering Intern",
    company: "Antz AI Solution",
    group: "Artificial Intelligence",
    period: "May 2025 – July 2025",
    type: "Internship",
    description: [
      "Worked on LLM-powered Retrieval-Augmented Generation (RAG) pipelines for document intelligence.",
      "Explored vector databases, semantic search and context-aware question answering.",
      "Worked with prompt engineering and response evaluation to improve retrieval quality and reduce hallucinations.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-heading">
        <p className="eyebrow">MY PROFESSIONAL JOURNEY</p>
        <h2>Work <span>Experience.</span></h2>
        <p className="section-subtitle">
          My journey through software development and artificial intelligence.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((item) => (
          <article className="experience-card" key={item.company}>
            <div className="timeline-marker">
              <BriefcaseBusiness size={19} />
            </div>

            <div className="experience-card-content">
              <div className="experience-top">
                <div>
                  <p className="experience-period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p className="experience-group">{item.group}</p>
                </div>

                <span className="experience-type">{item.type}</span>
              </div>

              <ul>
                {item.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}