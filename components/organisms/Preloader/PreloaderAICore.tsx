"use client";

import { motion } from "framer-motion";
import { PRELOADER_BRAND } from "./preloader.constants";
import { coreReveal, preloaderEase } from "./preloader.motion";

const RINGS = [
  { r: 52, dash: "4 10", duration: 28, reverse: false },
  { r: 68, dash: "2 14", duration: 36, reverse: true },
  { r: 84, dash: "1 18", duration: 44, reverse: false },
] as const;

export function PreloaderAICore() {
  return (
    <motion.div
      className="preloader__core"
      variants={coreReveal}
      initial="hidden"
      animate="visible"
      aria-hidden
    >
      <motion.div
        className="preloader__core-bloom"
        animate={{ opacity: [0.35, 0.62, 0.42], scale: [0.92, 1.06, 1] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
      />

      <svg
        className="preloader__core-svg"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="preloader-core-orb" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(147, 197, 253, 0.35)" />
            <stop offset="55%" stopColor="rgba(37, 99, 235, 0.12)" />
            <stop offset="100%" stopColor="rgba(2, 6, 23, 0)" />
          </radialGradient>
          <linearGradient id="preloader-ring-stroke" x1="0" y1="0" x2="200" y2="200">
            <stop stopColor="rgba(56, 189, 248, 0.15)" />
            <stop offset="0.5" stopColor="rgba(147, 197, 253, 0.75)" />
            <stop offset="1" stopColor="rgba(186, 230, 253, 0.35)" />
          </linearGradient>
        </defs>

        <circle cx="100" cy="100" r="28" fill="url(#preloader-core-orb)" />
        <circle
          cx="100"
          cy="100"
          r="28"
          stroke="rgba(147, 197, 253, 0.35)"
          strokeWidth="0.75"
        />

        {RINGS.map((ring, i) => (
          <motion.g
            key={ring.r}
            style={{ transformOrigin: "100px 100px" }}
            initial={{ opacity: 0, rotate: 0 }}
            animate={{
              rotate: ring.reverse ? -360 : 360,
              opacity: [0, 0.7, 0.55],
            }}
            transition={{
              rotate: {
                duration: ring.duration,
                repeat: Infinity,
                ease: "linear",
              },
              opacity: {
                duration: 1.2,
                delay: 0.9 + i * 0.15,
                ease: preloaderEase,
              },
            }}
          >
            <circle
              cx="100"
              cy="100"
              r={ring.r}
              stroke="url(#preloader-ring-stroke)"
              strokeWidth={i === 0 ? 0.85 : 0.65}
              strokeDasharray={ring.dash}
              fill="none"
            />
          </motion.g>
        ))}

        {[0, 1, 2].map((pulse) => (
          <motion.circle
            key={`pulse-${pulse}`}
            cx="100"
            cy="100"
            r="32"
            stroke="rgba(96, 165, 250, 0.4)"
            strokeWidth="0.5"
            fill="none"
            style={{ transformOrigin: "100px 100px" }}
            initial={{ scale: 0.6, opacity: 0.5 }}
            animate={{ scale: [0.6, 1.35, 1.6], opacity: [0.45, 0.12, 0] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeOut",
              delay: pulse * 0.95 + 1.1,
            }}
          />
        ))}
      </svg>

      <motion.p
        className="preloader__core-brand"
        initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: preloaderEase, delay: 1.45 }}
      >
        {PRELOADER_BRAND}
      </motion.p>
    </motion.div>
  );
}
