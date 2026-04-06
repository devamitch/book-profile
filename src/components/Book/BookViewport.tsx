"use client";

import Spline from "@splinetool/react-spline";
import { Suspense } from "react";
import { useBookStore } from "../../store/bookStore";

/**
 * BookViewport
 * Integrates the Spline 3D scene with the Next.js/Zustand ecosystem.
 * This will host the "actual 3D book" requested by the user.
 */
export default function BookViewport() {
  const { scrollProgress } = useBookStore();

  function onLoad(splineApp: any) {
    // We can interact with Spline variables here
    // e.g., splineApp.setVariable('PageScroll', scrollProgress * 100);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "var(--paper-color)",
      }}
    >
      <Suspense
        fallback={
          <div className="loading-state">Loading cinematic book...</div>
        }
      >
        {/* 
            Placeholder Spline Scene URL. 
            In a real production environment, the user would provide their Spline export URL.
            For now, we'll establish the container and logic.
         */}
        <Spline
          scene="https://prod.spline.design/6Wq1Q7YGyWf8Z9vH/scene.splinecode"
          onLoad={onLoad}
        />
      </Suspense>
    </div>
  );
}
