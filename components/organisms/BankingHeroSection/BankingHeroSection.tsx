"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroContent } from "@/components/organisms/HeroContent";
import { HeroVisual } from "@/components/organisms/HeroVisual";

export function BankingHeroSection() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div className="banking-hero-root">
      {prefersReducedMotion ? (
        <>
          <div className="banking-hero-glow" aria-hidden />
          <div className="banking-hero-glow-secondary" aria-hidden />
        </>
      ) : (
        <>
          <motion.div
            className="banking-hero-glow"
            aria-hidden
            animate={{
              opacity: [0.85, 1, 0.85],
              scale: [1, 1.04, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="banking-hero-glow-secondary"
            aria-hidden
            animate={{ opacity: [0.6, 0.9, 0.6] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </>
      )}
      <div className="banking-vignette" aria-hidden />

      <div className="relative z-10 flex min-h-screen flex-col">
        <main className="flex flex-1 flex-col px-(--site-gutter) pb-12 pt-4 sm:pb-16 sm:pt-6 md:pt-8 lg:px-10 lg:pt-10 xl:px-16">
          <div className="mx-auto grid w-full max-w-(--site-shell-max) flex-1 items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-14">
            <HeroContent />
            <HeroVisual />
          </div>
        </main>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#030308] to-transparent"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      />
    </div>
  );
}
