"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { VIEWPORT_REVEAL } from "../constants";
import { sectionReveal } from "../variants";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
}

export function SectionReveal({
  children,
  className,
  id,
  "aria-labelledby": ariaLabelledby,
}: SectionRevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <section className={className} id={id} aria-labelledby={ariaLabelledby}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      className={cn("motion-section", className)}
      id={id}
      aria-labelledby={ariaLabelledby}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_REVEAL}
    >
      <motion.span
        className="motion-section__atmosphere"
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VIEWPORT_REVEAL}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      {children}
    </motion.section>
  );
}
