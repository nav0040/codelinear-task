"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/cn";

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  offset?: number;
}

export function ParallaxLayer({
  children,
  className,
  offset = 48,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset * 0.35, -offset * 0.35]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.85, 1, 1, 0.9]);

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={cn(className)} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
}
