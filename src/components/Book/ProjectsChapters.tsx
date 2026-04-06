"use client";

import { PROJECTS } from "../../data/portfolio_data";
import ChapterPage from "./ChapterPage";

export function ProjectsL() {
  const featured = PROJECTS.slice(0, 1); // Aura Studio

  return (
    <ChapterPage
      number="11"
      label="The Work"
      title="Chapter II: Production"
      side="left"
    >
      {featured.map((p, i) => (
        <div key={i} className="proj-featured">
          <div className="p-eyebrow">Flagship Venture</div>
          <h3 className="p-name">{p.name}</h3>
          <p className="p-desc">{p.desc}</p>

          <div className="p-impact">
            <h4 className="i-title">Domain Impact</h4>
            <p className="i-text">
              {Array.isArray(p.impact) ? p.impact.join(" · ") : p.impact}
            </p>
          </div>

          <div className="p-tech-stack">
            {p.tech.map((t, k) => (
              <span key={k} className="s-pill">
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        /* @ts-ignore */
        .p-eyebrow {
          font-family: var(--f-caps);
          font-size: 0.75rem;
          color: var(--saffron-deep);
          letter-spacing: 0.3em;
          margin-bottom: 1.25rem;
          text-transform: uppercase;
        }
        .p-name {
          font-family: var(--f-display);
          font-size: 2.6rem;
          color: var(--ink-rich);
          margin-bottom: 1.5rem;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .p-name::after {
          content: "";
          display: block;
          width: 60px;
          height: 2px;
          background: var(--saffron-main);
          margin-top: 1rem;
        }
        .p-desc {
          font-family: var(--f-serif);
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--ink-rich);
          margin-bottom: 2.5rem;
          text-align: justify;
        }
        .p-impact {
          background: rgba(232, 168, 56, 0.05);
          padding: 1.5rem;
          border-radius: 4px;
          border-left: 4px solid var(--saffron-main);
          margin-bottom: 2.5rem;
        }
        .i-title {
          font-family: var(--f-caps);
          font-size: 0.75rem;
          color: var(--saffron-deep);
          margin-bottom: 0.75rem;
          letter-spacing: 0.1em;
        }
        .i-text {
          font-family: var(--f-serif);
          font-size: 1rem;
          color: var(--ink-2);
          line-height: 1.5;
        }
        .p-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .s-pill {
          font-family: var(--f-sans);
          font-size: 0.7rem;
          padding: 0.3rem 0.8rem;
          background: var(--ink-rich);
          color: var(--paper-base);
          border-radius: 2px;
          font-weight: 600;
          letter-spacing: 0.05em;
        }
      `}</style>
    </ChapterPage>
  );
}

export function ProjectsR() {
  const secondary = PROJECTS.slice(1, 4);

  return (
    <ChapterPage number="12" label="Protocols" title="Synthetics" side="right">
      <div className="proj-list">
        {secondary.map((p, i) => (
          <div key={i} className="p-card">
            <div className="p-card-head">
              <span className="p-card-name">{p.name}</span>
              <span className="p-card-tag">{p.badge}</span>
            </div>
            <p className="p-card-desc">{p.desc.slice(0, 100)}...</p>
          </div>
        ))}
      </div>

      <div
        className="projects-cta"
        style={{ marginTop: "auto", textAlign: "center", opacity: 0.5 }}
      >
        <p
          style={{
            fontSize: "0.7rem",
            fontFamily: "var(--f-caps)",
            letterSpacing: "0.1em",
          }}
        >
          View more on GitHub @devamitch
        </p>
      </div>

      <style jsx>{`
        /* @ts-ignore */
        .proj-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .p-card {
          border-bottom: 1px solid var(--ink-ghost);
          padding-bottom: 1rem;
        }
        .p-card-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .p-card-name {
          font-family: var(--f-display);
          font-size: 1.15rem;
          color: var(--ink);
        }
        .p-card-tag {
          font-family: var(--f-caps);
          font-size: 0.55rem;
          color: var(--saffron);
          border: 1px solid var(--saffron);
          padding: 0.1rem 0.4rem;
          border-radius: 2px;
        }
        .p-card-desc {
          font-size: 0.85rem;
          color: var(--ink-4);
          line-height: 1.4;
        }
      `}</style>
    </ChapterPage>
  );
}
