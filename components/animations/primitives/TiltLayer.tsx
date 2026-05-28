"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { useCallback } from "react";
import { cn } from "@/lib/cn";
import { MOTION_SPRING } from "../constants";
import { useMotionEnabled } from "../hooks/useMotionEnabled";

interface TiltLayerProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function TiltLayer({
  children,
  className,
  intensity = 9,
}: TiltLayerProps) {
  const enabled = useMotionEnabled();
  const reduced = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, MOTION_SPRING.tilt);
  const springY = useSpring(rotateY, MOTION_SPRING.tilt);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!enabled || reduced) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rotateY.set(px * intensity);
      rotateX.set(-py * intensity);
    },
    [enabled, intensity, reduced, rotateX, rotateY]
  );

  const onLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <motion.div
      className={cn("motion-tilt", className)}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}
