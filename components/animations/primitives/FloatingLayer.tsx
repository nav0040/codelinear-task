"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { floatRotate, floatY } from "../variants";

interface FloatingLayerProps {
  children: ReactNode;
  className?: string;
  offset?: number;
  rotate?: boolean;
}

export function FloatingLayer({
  children,
  className,
  offset = 8,
  rotate = false,
}: FloatingLayerProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      variants={reduced ? undefined : rotate ? floatRotate(offset) : floatY(offset)}
      initial="initial"
      animate={reduced ? undefined : "animate"}
    >
      {children}
    </motion.div>
  );
}
