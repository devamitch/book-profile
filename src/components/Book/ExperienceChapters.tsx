"use client";

import { EXPERIENCE } from "../../data/portfolio_data";
import ChapterPage from "./ChapterPage";

export function ExperienceL() {
  const current = EXPERIENCE.slice(0, 1); // NonceBlox
  const early = EXPERIENCE.slice(1, 3); // Previous roles

  return (
    <ChapterPage
      number="05"
      label="The Record"
      title="Chapter I: History"
      side="left"
    >
      <div className="exp-section">
        <h3 className="exp-subhead">Current Tenure</h3>
        {current.map((exp, i) => (
          <div key={i} className="exp-entry-hero">
            <div className="exp-meta">
              <span className="exp-co">{exp.company}</span>
              <span className="exp-date">{exp.period}</span>
            </div>
            <div className="exp-role">{exp.role}</div>
            {/* @ts-ignore */}
            <p className="exp-summary">{exp.highlights[0]}</p>
            <div className="exp-highlights">
              {exp.highlights.slice(0, 3).map((h, j) => (
                <div key={j} className="h-item">
                  {h}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* @ts-ignore */
        .exp-subhead {
          font-family: var(--f-caps);
          font-size: 0.7rem;
          color: var(--saffron-main);
          margin-bottom: 2rem;
          letter-spacing: 0.15em;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .exp-subhead::after {
          content: "";
          flex: 1;
          height: 1px;
          background: linear-gradient(
            to right,
            var(--saffron-aura),
            transparent
          );
        }
        .exp-entry-hero {
          margin-bottom: 3rem;
          position: relative;
        }
        .exp-meta {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.75rem;
        }
        .exp-co {
          font-family: var(--f-display);
          font-size: 1.6rem;
          color: var(--ink-rich);
          font-weight: 700;
        }
        .exp-date {
          font-family: var(--f-caps);
          font-size: 0.7rem;
          color: var(--ink-4);
          letter-spacing: 0.05em;
        }
        .exp-role {
          font-family: var(--f-caps);
          font-size: 0.85rem;
          color: var(--saffron-deep);
          margin-bottom: 1.25rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .exp-summary {
          font-family: var(--f-serif);
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--ink-rich);
          margin-bottom: 1.5rem;
          font-style: italic;
        }
        .h-item {
          font-family: var(--f-serif);
          font-size: 0.95rem;
          color: var(--ink-2);
          margin-bottom: 0.6rem;
          display: flex;
          gap: 0.8rem;
          line-height: 1.5;
        }
        .h-item::before {
          content: "◈";
          color: var(--saffron-main);
          font-size: 0.7rem;
          margin-top: 0.1rem;
        }
      `}</style>
    </ChapterPage>
  );
}

export function ExperienceR() {
  const early = EXPERIENCE.slice(1);

  return (
    <ChapterPage number="06" label="Legacy" title="Foundations" side="right">
      <div className="exp-grid">
        {early.map((exp, i) => (
          <div key={i} className="exp-mini">
            <div className="mini-header">
              <span className="mini-co">{exp.company}</span>
              <span className="mini-date">{exp.period}</span>
            </div>
            <div className="mini-role">{exp.role}</div>
            <div className="mini-tech">
              {exp.tech.slice(0, 4).map((t, k) => (
                <span key={k} className="t-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* @ts-ignore */
        .exp-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .mini-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.25rem;
        }
        .mini-co {
          font-family: var(--f-display);
          font-size: 1.1rem;
          color: var(--ink);
        }
        .mini-date {
          font-size: 0.65rem;
          color: var(--ink-4);
          font-family: var(--f-caps);
        }
        .mini-role {
          font-size: 0.8rem;
          color: var(--saffron);
          margin-bottom: 0.75rem;
          font-family: var(--f-caps);
        }
        .mini-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .t-pill {
          font-size: 0.65rem;
          background: var(--paper-3);
          border: 1px solid var(--ink-ghost);
          padding: 0.2rem 0.5rem;
          border-radius: 3px;
          color: var(--ink-3);
        }
      `}</style>
    </ChapterPage>
  );
}
