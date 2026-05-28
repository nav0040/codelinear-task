"use client";

import { motion, useReducedMotion } from "framer-motion";

const ORBS = [
  { left: "12%", top: "18%", size: 420, delay: 0 },
  { left: "72%", top: "62%", size: 360, delay: 2 },
  { left: "48%", top: "78%", size: 280, delay: 4 },
] as const;

export function AmbientMotionField() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <div className="motion-ambient" aria-hidden>
      {ORBS.map((orb) => (
        <motion.div
          key={`${orb.left}-${orb.top}`}
          className="motion-ambient__orb"
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
          }}
          animate={{
            x: [0, 24, -16, 0],
            y: [0, -18, 12, 0],
            opacity: [0.35, 0.55, 0.4, 0.35],
          }}
          transition={{
            duration: 20 + orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
