import { BookOpen, FileText, Microscope } from "lucide-react";

export default function Research() {
  return (
    <section className="section research-section" id="research">
      <div className="section-heading">
        <p className="eyebrow">RESEARCH & DEVELOPMENT</p>

        <h2>
          Research <span>& Publications.</span>
        </h2>

        <p className="section-subtitle">
          Exploring intelligent systems and contributing to research
          in artificial intelligence.
        </p>
      </div>

      <article className="research-card">
        <div className="research-card-top">
          <div className="research-icon">
            <Microscope size={27} />
          </div>

          <span className="research-status">
            ACCEPTED · ICTIS 2026
          </span>
        </div>

        <p className="research-category">
          ARTIFICIAL INTELLIGENCE · HEALTHCARE · MULTIMODAL SYSTEMS
        </p>

        <h3>
          Retrieval-grounded Multimodal Clinical Language Modeling
        </h3>

        <p className="research-description">
          Research exploring retrieval-grounded language modeling
          for clinical applications, combining multimodal information
          with contextual retrieval to support healthcare-oriented
          language understanding and reporting.
        </p>

        <div className="research-details">
          <div>
            <BookOpen size={18} />
            <span>ICTIS 2026</span>
          </div>

          <div>
            <FileText size={18} />
            <span>Springer Lecture Notes in Networks and Systems</span>
          </div>
        </div>

        <div className="research-tags">
          <span>Retrieval-Augmented Generation</span>
          <span>Multimodal AI</span>
          <span>Clinical NLP</span>
          <span>Language Models</span>
        </div>

        <div className="research-footer">
          <span>RESEARCH PUBLICATION</span>
          <span className="research-accepted">
            <span className="status-dot" />
            Accepted
          </span>
        </div>
      </article>
    </section>
  );
}