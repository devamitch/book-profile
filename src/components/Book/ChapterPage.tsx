"use client";

import React from "react";

interface ChapterPageProps {
  number: string | number;
  label: string;
  title: string;
  children: React.ReactNode;
  side: "left" | "right";
  themeColor?: string;
}

/**
 * ChapterPage
 * A high-fidelity, clean layout for book content.
 * Follows the 'Pastel Saffron' aesthetic with refined typography.
 */
export default function ChapterPage({
  number,
  label,
  title,
  children,
  side,
  themeColor = "var(--saffron)",
}: ChapterPageProps) {
  return (
    <div className={`chapter-page ${side}`}>
      <div className="page-inner">
        <div className="page-decoration-top" />

        <header className="page-header">
          <div className="pg-status">
            <span className="pg-num">{number}</span>
            <span className="pg-sep">/</span>
            <span className="pg-label">{label}</span>
          </div>
          <h2 className="pg-title">{title}</h2>
        </header>

        <main className="page-main-flow">
          <div className="sacred-watermark">◈</div>
          {children}
        </main>

        <footer className="page-footer">
          <span className="footer-mark">Vedic Architecture v1.0</span>
          <div className="footer-flourish" />
        </footer>
      </div>

      {/* @ts-ignore */}
      {/* @ts-ignore */}
      <style jsx>{`
        .chapter-page {
          padding: 3rem 4rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          background: transparent;
        }

        .page-inner {
          position: relative;
          width: 100%;
          height: 100%;
          background-color: var(--paper-base);
          background-image: url("/paper.png");
          background-size: cover;
          background-blend-mode: multiply;
          padding: 3.5rem 4rem;
          display: flex;
          flex-direction: column;
          box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.05);
        }
        .page-decoration-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(
            to right,
            transparent,
            var(--saffron-main),
            transparent
          );
          opacity: 0.3;
        }
        .pg-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .pg-num {
          font-family: var(--f-display);
          font-size: 0.9rem;
          color: var(--saffron-main);
          font-weight: 700;
        }
        .pg-sep {
          color: rgba(0, 0, 0, 0.1);
        }
        .pg-label {
          font-family: var(--f-display);
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: rgba(0, 0, 0, 0.4);
        }
        .pg-title {
          font-family: var(--f-display);
          font-size: 2.2rem;
          margin: 0.5rem 0 2.5rem 0;
          color: var(--ink-rich);
          line-height: 1;
        }
        .page-main-flow {
          flex: 1;
        }
        .page-footer {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0.4;
        }
        .footer-mark {
          font-family: var(--f-display);
          font-size: 0.55rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .footer-flourish {
          width: 20px;
          height: 1px;
          background: var(--saffron-main);
        }

        .left {
          border-right: 1px solid var(--ink-ghost);
        }
        .right {
          border-left: 1px solid var(--ink-ghost);
        }
        .sacred-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 15rem;
          color: var(--saffron-aura);
          pointer-events: none;
          z-index: -1;
          opacity: 0.15;
          font-family: var(--f-display);
          user-select: none;
        }
      `}</style>
    </div>
  );
}
