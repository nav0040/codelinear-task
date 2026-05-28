"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { MOTION_SPRING } from "../constants";
import { useMotionEnabled } from "../hooks/useMotionEnabled";

export function CinematicCursor() {
  const enabled = useMotionEnabled();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, MOTION_SPRING.cursor);
  const springY = useSpring(y, MOTION_SPRING.cursor);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="motion-cursor"
      style={{ x: springX, y: springY }}
      aria-hidden
    >
      <span className="motion-cursor__core" />
      <span className="motion-cursor__ring" />
    </motion.div>
  );
}
