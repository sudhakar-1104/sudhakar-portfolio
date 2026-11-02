
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Google Cloud Foundations",
    issuer: "Google Cloud",
    category: "Cloud Computing",
    year: "Add year",
    credentialUrl: "",
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "Amazon Web Services",
    category: "Cloud Computing",
    year: "Add year",
    credentialUrl: "",
  },
  {
    title: "Introduction to Ethical Hacking",
    issuer: "Add issuing organization",
    category: "Cybersecurity",
    year: "Add year",
    credentialUrl: "",
  },
];

export default function Certifications() {
  return (
    <section className="section certifications-section" id="certifications">
      <div className="section-heading">
        <p className="eyebrow">CONTINUOUS LEARNING</p>
        <h2>Certifications & <span>Credentials.</span></h2>
        <p className="section-subtitle">
          Professional certifications and technical learning that
          strengthen my knowledge across different technology domains.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((certification, index) => (
          <div className="certification-card" key={certification.title}>
            <div className="certification-top">
              <div className="certification-icon">
                <Award size={25} />
              </div>
              <span className="certification-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="certification-details">
              <span className="certification-category">
                {certification.category}
              </span>

              <h3>{certification.title}</h3>

              <p className="certification-issuer">
                {certification.issuer}
              </p>

              <div className="certification-bottom">
                <span>{certification.year}</span>

                {certification.credentialUrl && (
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${certification.title} credential`}
                  >
                    View Credential <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
