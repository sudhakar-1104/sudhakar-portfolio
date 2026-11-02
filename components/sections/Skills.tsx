import {
  Code2,
  Monitor,
  Server,
  BrainCircuit,
  Database,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

import { skillCategories } from "@/data/skills";

const icons = {
  code: Code2,
  monitor: Monitor,
  server: Server,
  brain: BrainCircuit,
  database: Database,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">MY TECHNICAL TOOLKIT</p>

        <h2>
          Skills & <span>Technologies.</span>
        </h2>

        <p className="section-subtitle">
          Technologies and tools I use to build applications,
          solve problems and explore new ideas.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => {
          const Icon = icons[category.icon as keyof typeof icons];

          return (
            <article className="skill-card" key={category.title}>
              <div className="skill-card-header">
                <div className="skill-icon">
                  <Icon size={24} />
                </div>

                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{category.title}</h3>

              <p className="skill-description">
                {category.description}
              </p>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className="skill-card-footer">
                <span>TECHNOLOGY STACK</span>
                <ArrowUpRight size={16} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}