import { gsap } from "gsap";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  useDragPageTurn,
  useKeyboard,
  useWheelNav,
} from "../../hooks/useGestures";
import { useBookStore } from "../../store/bookStore";

// Chapter imports
import { ColophonL, ColophonR } from "../Chapters/ColophonChapter";
import { CoverLeft, CoverRight } from "../Chapters/CoverChapter";
import { Exp1L, Exp1R } from "../Chapters/ExpChapter1";
import { Exp2L, Exp2R } from "../Chapters/ExpChapter2";
import { Exp3L, Exp3R } from "../Chapters/ExpChapter3";
import {
  Foreword1L,
  Foreword1R,
  Foreword2L,
  Foreword2R,
} from "../Chapters/ForewordChapter";
import { Proj1L, Proj1R } from "../Chapters/ProjChapter1";
import { Proj2L, Proj2R } from "../Chapters/ProjChapter2";
import { Proj3L, Proj3R } from "../Chapters/ProjChapter3";
import { Skills1L, Skills1R } from "../Chapters/SkillsChapter1";
import { Skills2L, Skills2R } from "../Chapters/SkillsChapter2";
import { Skills3L, Skills3R } from "../Chapters/SkillsChapter3";
import { Voices1L, Voices1R } from "../Chapters/VoicesChapter";

type SpreadPair = [React.ComponentType, React.ComponentType];

const SPREADS: SpreadPair[] = [
  [CoverLeft, CoverRight], // 0  Cover + TOC
  [Foreword1L, Foreword1R], // 1  About opener + Stats
  [Foreword2L, Foreword2R], // 2  Story timeline + Principles
  [Exp1L, Exp1R], // 3  Chapter I + Independent Studio
  [Exp2L, Exp2R], // 4  NonceBlox full
  [Exp3L, Exp3R], // 5  Early career + certifications
  [Proj1L, Proj1R], // 6  Chapter II + Aura Studio + Nexus
  [Proj2L, Proj2R], // 7  LunaCare + Vulcan + Housezy
  [Proj3L, Proj3R], // 8  DeFi11 + MusicX + Be4You + more
  [Skills1L, Skills1R], // 9  Chapter III + Mobile + AI
  [Skills2L, Skills2R], // 10 Blockchain + Backend + Frontend
  [Skills3L, Skills3R], // 11 Cloud + Leadership + full stack
  [Voices1L, Voices1R], // 12 Chapter IV + Testimonials
  [ColophonL, ColophonR], // 13 Colophon + Contact
];

export default function Book() {
  const bookRef = useRef<HTMLDivElement>(null);
  const turningRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const shadowRRef = useRef<HTMLDivElement>(null);
  const shadowLRef = useRef<HTMLDivElement>(null);

  const [shownSpread, setShownSpread] = useState(0);
  const pendingRef = useRef(0);

  const {
    currentSpread,
    isAnimating,
    direction,
    setAnimating,
    isDragging,
    dragProgress,
    dragSide,
    theme,
  } = useBookStore();

  useKeyboard();
  useWheelNav(bookRef as React.RefObject<HTMLElement>);
  useDragPageTurn(bookRef as React.RefObject<HTMLElement>);

  // ─── Interactive Sensor: Mouse Parallax 3D Tilt ───
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!bookRef.current) return;
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX - w / 2) / (w / 2);
      const y = (e.clientY - h / 2) / (h / 2);

      // Subtle tilt based on mouse position
      gsap.to(bookRef.current, {
        "--book-tilt-x": `${y * 6}deg`,
        "--book-tilt-y": `${-x * 8}deg`,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const NUM_SEGMENTS = 6;
  const segmentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // React to drag progress live — multi-segment curl
  useEffect(() => {
    if (!isDragging) return;
    const progress = dragProgress;
    const totalAngle =
      dragSide === "right" ? -(progress * 180) : progress * 180 - 180;

    // Distribute angle across segments with easing curve
    segmentRefs.current.forEach((seg, i) => {
      if (!seg) return;
      const segFrac = (i + 1) / NUM_SEGMENTS;
      // Ease: early segments bend more, later segments follow
      const ease = Math.pow(segFrac, 0.7);
      const segAngle = (totalAngle / NUM_SEGMENTS) * ease * 1.4;
      gsap.set(seg, {
        rotateY: segAngle,
      });
    });

    // Shade on front face
    const shade = frontRef.current?.querySelector(".tp-shade") as HTMLElement;
    if (shade) gsap.set(shade, { opacity: Math.min(progress * 1.5, 0.5) });

    // Shadows on spread
    if (dragSide === "right" && shadowRRef.current) {
      gsap.set(shadowRRef.current, { opacity: progress * 0.4 });
    }
    if (dragSide === "left" && shadowLRef.current) {
      gsap.set(shadowLRef.current, { opacity: progress * 0.4 });
    }
  }, [isDragging, dragProgress, dragSide]);

  // Animate turn — multi-segment cascading bend
  useEffect(() => {
    if (!isAnimating) return;
    pendingRef.current = currentSpread;
    animate(direction, shownSpread, currentSpread);
  }, [isAnimating, currentSpread]);

  const animate = useCallback(
    (dir: TurnDirection, from: number, to: number) => {
      const page = turningRef.current;
      const front = frontRef.current;
      const back = backRef.current;
      const segments = segmentRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!page || !front || !back || segments.length === 0) {
        setShownSpread(to);
        setAnimating(false);
        return;
      }

      // Reset all segments
      gsap.set(segments, { rotateY: 0 });

      // Position the turning page
      if (dir === "forward") {
        page.style.right = "0";
        page.style.left = "auto";
        gsap.set(page, {
          transformOrigin: "left center",
          rotateY: 0,
          zIndex: 60,
          transformPerspective: 2400,
        });
        gsap.set(back, { rotateY: 180 });
      } else {
        page.style.left = "0";
        page.style.right = "auto";
        gsap.set(page, {
          transformOrigin: "right center",
          rotateY: 0,
          zIndex: 60,
          transformPerspective: 2400,
        });
        gsap.set(back, { rotateY: -180 });
      }

      const shade = front.querySelector(".tp-shade") as HTMLElement;
      const shadowR = shadowRRef.current;
      const shadowL = shadowLRef.current;

      const segAngle =
        dir === "forward" ? -180 / NUM_SEGMENTS : 180 / NUM_SEGMENTS;

      const tl = gsap.timeline({
        onComplete: () => {
          setShownSpread(to);
          gsap.set(page, { zIndex: -1 });
          gsap.set(segments, { rotateY: 0 });
          setAnimating(false);
        },
      });

      // Phase 1: Initial lift — first segments bend slightly
      tl.to(segments[0], {
        rotateY: segAngle * 0.3,
        duration: 0.08,
        ease: "power1.in",
      });

      // Phase 2: Cascading bend — each segment rotates to its target
      segments.forEach((seg, i) => {
        const delay = i * 0.04;
        tl.to(
          seg,
          {
            rotateY: segAngle,
            duration: 0.5,
            ease: "power2.inOut",
          },
          `bend+=${delay}`,
        );
      });

      // Shade grows during bend
      tl.to(shade, { opacity: 0.5, duration: 0.25 }, "bend");
      tl.to(shade, { opacity: 0, duration: 0.2 }, "bend+=0.35");

      // Switch content at midpoint
      tl.call(
        () => {
          setShownSpread(to);
        },
        [],
        "bend+=0.25",
      );

      // Shadow on spread
      if (dir === "forward" && shadowR) {
        tl.to(shadowR, { opacity: 0.35, duration: 0.15 }, "bend+=0.1");
        tl.to(shadowR, { opacity: 0, duration: 0.2 }, "bend+=0.4");
      } else if (shadowL) {
        tl.to(shadowL, { opacity: 0.35, duration: 0.15 }, "bend+=0.1");
        tl.to(shadowL, { opacity: 0, duration: 0.2 }, "bend+=0.4");
      }
    },
    [setAnimating],
  );

  type TurnDirection = "forward" | "backward";

  const [LeftPage, RightPage] = SPREADS[shownSpread] ?? SPREADS[0];
  const pendingSpread = pendingRef.current;
  const [PendingLeft, PendingRight] = SPREADS[pendingSpread] ?? SPREADS[0];

  return (
    <div className="ambient-scene">
      {/* ─── Atmospheric Particles ─── */}
      <div className="particles-container">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${0.5 + Math.random()})`,
            }}
          />
        ))}
      </div>

      <div
        className="book-scene"
        ref={bookRef}
        data-theme={theme}
        style={{
          /* @ts-ignore */
          "--book-tilt-x": "0deg",
          "--book-tilt-y": "0deg",
        }}
      >
        <div className="book">
          <div className="book-edge-right" />
          <div className="book-edge-pages" />
          <div className="book-edge-bottom" />

          {/* Main spread */}
          <div className="book-spread">
            <div className="page-left">
              <LeftPage />
              <SacredCornerL />
              <div className="corner-curl" />
            </div>

            <div className="page-right">
              <RightPage />
              <SacredCornerR />
              <div className="corner-curl" />
            </div>

            <div className="book-spine">
              <SpineOrnamentation />
            </div>

            {/* Spread shadows during turn */}
            <div ref={shadowRRef} className="turn-shadow-right" />
            <div ref={shadowLRef} className="turn-shadow-left" />
          </div>

          {/* Turning page layer - Multi-segment curl */}
          <div className="page-turn-container">
            <div
              ref={turningRef}
              className={`turning-page ${direction === "forward" ? "from-right" : "from-left"}`}
              style={{ zIndex: -1 }}
            >
              {/* Nested segments for paper curl effect */}
              {Array.from({ length: NUM_SEGMENTS }).reduce<React.ReactNode>(
                (children, _, i) => {
                  const idx = NUM_SEGMENTS - 1 - i;
                  return (
                    <div
                      ref={(el) => {
                        segmentRefs.current[idx] = el;
                      }}
                      className="curl-segment"
                      key={idx}
                      style={{
                        width: `${100 / NUM_SEGMENTS}%`,
                        transformOrigin:
                          direction === "forward"
                            ? "left center"
                            : "right center",
                      }}
                    >
                      {idx === NUM_SEGMENTS - 1 ? (
                        <>
                          <div ref={frontRef} className="tp-face">
                            {direction === "forward" ? (
                              <RightPage />
                            ) : (
                              <LeftPage />
                            )}
                            <div className="tp-shade" />
                          </div>
                          <div ref={backRef} className="tp-back">
                            <div className="tp-shade-back" />
                            {direction === "forward" ? (
                              <PendingLeft />
                            ) : (
                              <PendingRight />
                            )}
                          </div>
                        </>
                      ) : (
                        children
                      )}
                    </div>
                  );
                },
                null,
              )}
            </div>
          </div>
        </div>

        {/* Spine label at bottom */}
        <SpineLabel />
      </div>
    </div>
  );
}

// Sacred corner decorations
function SacredCornerL() {
  return (
    <svg
      style={{
        position: "absolute",
        top: 8,
        left: 8,
        opacity: 0.07,
        pointerEvents: "none",
        zIndex: 5,
      }}
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <path
        d="M5,5 L5,20 M5,5 L20,5"
        stroke="#E8771A"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="5" cy="5" r="2" fill="#E8771A" />
    </svg>
  );
}

function SacredCornerR() {
  return (
    <svg
      style={{
        position: "absolute",
        top: 8,
        right: 8,
        opacity: 0.07,
        pointerEvents: "none",
        zIndex: 5,
      }}
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <path
        d="M35,5 L35,20 M35,5 L20,5"
        stroke="#E8771A"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="35" cy="5" r="2" fill="#E8771A" />
    </svg>
  );
}

function SpineOrnamentation() {
  return (
    <svg
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        opacity: 0.15,
        pointerEvents: "none",
      }}
      width="20"
      height="120"
      viewBox="0 0 20 120"
    >
      <line
        x1="10"
        y1="0"
        x2="10"
        y2="120"
        stroke="#C9A84C"
        strokeWidth="0.5"
      />
      <circle
        cx="10"
        cy="30"
        r="2.5"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.7"
      />
      <circle
        cx="10"
        cy="60"
        r="4"
        fill="none"
        stroke="#E8771A"
        strokeWidth="0.7"
      />
      <circle
        cx="10"
        cy="90"
        r="2.5"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.7"
      />
      <path d="M7,58 L13,62 L7,66 Z" fill="#E8771A" opacity="0.5" />
    </svg>
  );
}

function SpineLabel() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: -44,
        fontFamily: "var(--f-caps)",
        fontSize: "0.5rem",
        letterSpacing: "0.3em",
        color: "rgba(255,228,196,0.25)",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        userSelect: "none",
      }}
    >
      Amit Chakraborty · Principal Architect · MMXXV
    </div>
  );
}
