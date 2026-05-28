"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const PARTICLE_COUNT = 14;

function createParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    left: `${8 + ((i * 17) % 84)}%`,
    top: `${6 + ((i * 23) % 88)}%`,
    size: 1 + (i % 3),
    duration: 14 + (i % 6) * 2,
    delay: (i % 5) * 0.4,
    driftX: (i % 2 === 0 ? 1 : -1) * (12 + (i % 4) * 6),
    driftY: (i % 3 === 0 ? -1 : 1) * (10 + (i % 5) * 4),
  }));
}

export function PreloaderParticles() {
  const particles = useMemo(() => createParticles(), []);

  return (
    <div className="preloader__particles" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="preloader__particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: 0.12 + (p.id % 4) * 0.04,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.18, 0.1, 0.16, 0.08],
            x: [0, p.driftX, p.driftX * 0.5, 0],
            y: [0, p.driftY, p.driftY * 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            delay: 0.6 + p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
