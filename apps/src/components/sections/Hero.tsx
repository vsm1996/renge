"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PHI, EASE_OUT } from "@/lib/phi";
import { PhiSpiral } from "@/components/ui/PhiSpiral";

/**
 * PHI golden ratio rectangle with an exact golden spiral.
 *
 * The spiral is built from 6 quarter-circle arcs, each radius = previous / PHI.
 * Centers follow the corners of the recursively-nested golden rectangles.
 * All arcs are clockwise (sweep=1) in SVG coordinates.
 *
 * Derivation for W×H rectangle where H = W/PHI:
 *   r1 = H          arc 1: (0,0)      → (r1,r1),   center (0,r1)
 *   r2 = W−r1       arc 2: (r1,r1)    → (W,r3),    center (W,r1)
 *   r3 = r1−r2      arc 3: (W,r3)     → (r1+r4,0), center (W,0)
 *   r4 = r2−r3      arc 4: (r1+r4,0)  → (r1,r4),   center (r1,0)
 *   r5 = r3−r4      arc 5: (r1,r4)    → (r1+r5,r3),center (r1,r3)
 *   r6 = r4−r5      arc 6: (r1+r5,r3) → (r1+r4,r3−r6), center (r1+r4,r3)
 */
function GoldenRectangle() {
  const w = 340;
  const h = w / PHI;

  const r1 = h;
  const r2 = w - r1;
  const r3 = r1 - r2;
  const r4 = r2 - r3;
  const r5 = r3 - r4;
  const r6 = r4 - r5;

  const spiralPath = [
    `M 0 0`,
    `A ${r1} ${r1} 0 0 1 ${r1} ${r1}`,
    `A ${r2} ${r2} 0 0 1 ${w} ${r3}`,
    `A ${r3} ${r3} 0 0 1 ${r1 + r4} 0`,
    `A ${r4} ${r4} 0 0 1 ${r1} ${r4}`,
    `A ${r5} ${r5} 0 0 1 ${r1 + r5} ${r3}`,
    `A ${r6} ${r6} 0 0 1 ${r1 + r4} ${r3 - r6}`,
  ].join(" ");

  return (
    <div
      style={{
        position: "relative",
        width: w,
        height: h,
        maxWidth: "90vw",
      }}
    >
      {/* Outer rectangle */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: "1px solid var(--renge-color-accent)",
          opacity: 0.5,
        }}
      />
      {/* Square portion — left side */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: h,
          height: h,
          background: "var(--renge-color-accent-subtle)",
          borderRight: "1px solid var(--renge-color-accent)",
          opacity: 0.3,
        }}
      />
      {/* The golden spiral */}
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width={w}
        height={h}
        style={{ position: "absolute", inset: 0 }}
        aria-hidden
      >
        <path
          d={spiralPath}
          fill="none"
          stroke="var(--renge-color-accent)"
          strokeWidth={1.5}
          strokeLinecap="round"
          opacity={0.8}
        />
      </svg>
      {/* Ratio label */}
      <div
        style={{
          position: "absolute",
          bottom: "var(--renge-space-3)",
          right: "var(--renge-space-3)",
          fontSize: "var(--renge-font-size-xs)",
          color: "var(--renge-color-accent)",
          fontFamily: "var(--font-body)",
          letterSpacing: "0.1em",
          opacity: 0.8,
        }}
      >
        1 : {PHI.toFixed(3)}
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE_OUT },
  }),
};

function SpiralBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const spiralOpacity = useTransform(scrollYProgress, [0, 0.5], [0.08, 0]);
  const spiralY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <motion.div
      ref={ref}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        x: "-50%",
        y: spiralY,
        opacity: spiralOpacity,
        pointerEvents: "none",
      }}
    >
      <PhiSpiral size={700} strokeColor="var(--renge-color-fg)" animate />
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--renge-space-7) var(--renge-space-5)",
        overflow: "hidden",
      }}
    >
      {/* Background PHI spiral */}
      <SpiralBackground />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--renge-space-6)",
          textAlign: "center",
          maxWidth: 720,
        }}
      >
        {/* The geometry — before any text */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          <GoldenRectangle />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 6vw, var(--renge-font-size-4xl))",
            lineHeight: 1.15,
            color: "var(--renge-color-fg)",
            fontWeight: 400,
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          Proportion as a first principle.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.35}
          variants={fadeUp}
          style={{
            fontSize: "var(--renge-font-size-lg)",
            color: "var(--renge-color-fg-subtle)",
            lineHeight: "var(--renge-line-height-lg)",
            maxWidth: 560,
            margin: 0,
            fontFamily: "var(--font-body)",
          }}
        >
          Renge is a design system built on natural mathematics.
          PHI. Fibonacci. The ratios that appear in every living thing.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.5}
          variants={fadeUp}
        >
          <a
            href="#tokens"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--renge-space-2)",
              padding: "var(--renge-space-3) var(--renge-space-5)",
              borderRadius: "var(--renge-radius-full)",
              border: "1px solid var(--renge-color-accent)",
              color: "var(--renge-color-accent)",
              fontSize: "var(--renge-font-size-sm)",
              fontFamily: "var(--font-body)",
              letterSpacing: "0.08em",
              textDecoration: "none",
              transition: "all 300ms var(--renge-easing-ease-out)",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--renge-color-accent)";
              el.style.color = "var(--renge-color-fg-inverse)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "var(--renge-color-accent)";
            }}
          >
            Explore the system
            <span aria-hidden>↓</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.2, duration: 1 }}
          style={{
            position: "absolute",
            bottom: "var(--renge-space-6)",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "var(--renge-font-size-xs)",
            color: "var(--renge-color-fg-muted)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontFamily: "var(--font-body)",
          }}
        >
          φ = {PHI.toFixed(6)}...
        </motion.div>
      </div>
    </section>
  );
}
