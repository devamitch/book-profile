"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { PROFILE } from "../data/portfolio_data";
import { useBookStore } from "../store/bookStore";

// Dynamically import heavy components
const BookViewport = dynamic(() => import("../components/Book/BookViewport"), {
  ssr: false,
});

export default function Home() {
  const { setScrollProgress } = useBookStore();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      const maxScroll = containerRef.current.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollProgress]);

  return (
    <main
      ref={containerRef}
      style={{ height: "400vh", background: "var(--paper-color)" }}
    >
      {/* 3D Background / Spline Scene */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <BookViewport />
      </div>

      {/* Hero Content Overlays */}
      <div style={{ position: "relative", zIndex: 10, pointerEvents: "none" }}>
        <section
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontFamily: "var(--f-display)",
                fontSize: "4rem",
                color: "var(--ink)",
              }}
            >
              {PROFILE.nameFirst} {PROFILE.nameLast}
            </h1>
            <p
              style={{
                fontFamily: "var(--f-caps)",
                letterSpacing: "0.3em",
                color: "var(--saffron)",
              }}
            >
              {PROFILE.subtitle}
            </p>
          </div>
        </section>

        {/* Further sections will reveal as the book turns */}
        <div style={{ height: "300vh" }} />
      </div>
    </main>
  );
}
