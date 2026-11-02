import { GraduationCap, Code2, BrainCircuit } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Building practical applications and exploring modern software engineering technologies.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Exploring LLMs, RAG architectures, intelligent agents and AI-powered applications.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Continuously improving technical knowledge through hands-on projects and research.",
  },
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h2>About <span>Me.</span></h2>
        <p className="section-subtitle">
          A little about my background, interests and what drives me.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <h3>
            Turning curiosity into
            <span> meaningful technology.</span>
          </h3>

          <p>
            I&apos;m Sudhakar K S, a Computer Science and Engineering professional
            interested in software development, artificial intelligence and
            building technology-driven solutions.
          </p>

          <p>
            I enjoy understanding how systems work, solving technical
            challenges and transforming ideas into functional applications.
            My experience spans full-stack development, AI-powered systems
            and research-oriented projects.
          </p>

          <p>
            I&apos;m focused on continuously improving my engineering skills,
            learning emerging technologies and contributing to meaningful
            software products.
          </p>

          <div className="education-card">
            <div className="education-icon">
              <GraduationCap size={25} />
            </div>

            <div>
              <p className="education-label">EDUCATION</p>
              <h4>B.Tech — Computer Science and Engineering</h4>
              <p>Amrita Vishwa Vidyapeetham, Coimbatore</p>
            </div>
          </div>
        </div>

        <div className="about-highlights">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div className="highlight-card" key={item.title}>
                <div className="highlight-icon">
                  <Icon size={23} />
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}