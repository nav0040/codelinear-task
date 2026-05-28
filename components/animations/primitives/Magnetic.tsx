"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { useCallback } from "react";
import { cn } from "@/lib/cn";
import { MOTION_SPRING } from "../constants";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  lift?: number;
}

export function Magnetic({
  children,
  className,
  strength = 0.26,
  lift = 2,
}: MagneticProps) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, MOTION_SPRING.magnetic);
  const springY = useSpring(y, MOTION_SPRING.magnetic);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduced) return;
      const rect = e.currentTarget.getBoundingClientRect();
      x.set((e.clientX - rect.left - rect.width / 2) * strength);
      y.set((e.clientY - rect.top - rect.height / 2) * strength);
    },
    [reduced, strength, x, y]
  );

  const onLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      className={cn("motion-magnetic", className)}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={reduced ? undefined : { y: -lift }}
      whileTap={reduced ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="motion-magnetic__glow" aria-hidden />
      {children}
    </motion.div>
  );
}
