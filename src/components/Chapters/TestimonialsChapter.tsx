import { PROFILE } from "../../data/portfolio_data";
import ChapterPage from "../Book/ChapterPage";

export function TestimonialsL() {
  return (
    <ChapterPage
      number="23"
      label="Voices"
      title="Chapter IV: Industry Impact"
      side="left"
    >
      <div className="testimonial-intro">
        <p className="manifesto-line">
          "Amit bridges the gap between raw code and product vision."
        </p>
        <div className="legacy-statement">
          Over 8 years, Amit has collaborated with 13+ government entities, 50k+
          active users in HealthTech, and multiple Web3 protocols.
        </div>
      </div>

      {/* @ts-ignore */}
      <style jsx>{`
        .testimonial-intro {
          padding-top: 1rem;
        }
        .manifesto-line {
          font-family: var(--f-display);
          font-size: 1.5rem;
          color: var(--saffron);
          border-left: 2px solid var(--saffron);
          padding-left: 1.5rem;
          margin-bottom: 3rem;
          font-style: italic;
        }
        .legacy-statement {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--ink-3);
        }
      `}</style>
    </ChapterPage>
  );
}

export function TestimonialsR() {
  return (
    <ChapterPage
      number="24"
      label="Connect"
      title="The Global Network"
      side="right"
    >
      <div className="connect-grid">
        <div className="contact-invite">
          <h4 className="invite-head">Available for Partnerships</h4>
          <p className="invite-text">
            Currently leading as VP of Engineering, but always open to
            discussing technical architecture, 0→1 products, and AI integration.
          </p>
        </div>

        <div className="social-links">
          <a href={`mailto:${PROFILE.email}`} className="social-link">
            Email
          </a>
          <a href="https://linkedin.com/in/devamitch" className="social-link">
            LinkedIn
          </a>
          <a href="https://github.com/devamitch" className="social-link">
            GitHub
          </a>
        </div>
      </div>

      {/* @ts-ignore */}
      <style jsx>{`
        .connect-grid {
          padding-top: 1rem;
        }
        .invite-head {
          font-family: var(--f-caps);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: var(--saffron);
          margin-bottom: 1rem;
        }
        .invite-text {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--ink-2);
          margin-bottom: 3rem;
        }
        .social-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .social-link {
          font-family: var(--f-display);
          font-size: 1.5rem;
          color: var(--ink);
          text-decoration: none;
          border-bottom: 1px solid var(--ink-ghost);
          padding-bottom: 0.5rem;
          transition: color 0.3s;
        }
        .social-link:hover {
          color: var(--saffron);
        }
      `}</style>
    </ChapterPage>
  );
}
