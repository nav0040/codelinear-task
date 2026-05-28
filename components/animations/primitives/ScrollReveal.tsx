"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { VIEWPORT_REVEAL } from "../constants";
import { blurReveal, fadeUp, scaleIn, sectionReveal } from "../variants";

type RevealVariant = "fadeUp" | "blur" | "scale" | "section";

const variantMap = {
  fadeUp,
  blur: blurReveal,
  scale: scaleIn,
  section: sectionReveal,
} as const;

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  as?: "div" | "section" | "article";
}

export function ScrollReveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  as = "div",
}: ScrollRevealProps) {
  const reduced = useReducedMotion();
  const Component = motion[as];
  const variants = variantMap[variant];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_REVEAL}
      custom={delay}
    >
      {children}
    </Component>
  );
}
