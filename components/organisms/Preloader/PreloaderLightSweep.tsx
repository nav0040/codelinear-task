"use client";

import { motion } from "framer-motion";
import type { PreloaderScenePhase } from "./usePreloaderScene";
import { lightBloom, lightSweep } from "./preloader.motion";

interface PreloaderLightSweepProps {
  phase: PreloaderScenePhase;
}

export function PreloaderLightSweep({ phase }: PreloaderLightSweepProps) {
  const active = phase === "sweep" || phase === "exit";

  if (!active) return null;

  return (
    <>
      <motion.div
        className="preloader__sweep"
        variants={lightSweep}
        initial="hidden"
        animate="visible"
        aria-hidden
      />
      <motion.div
        className="preloader__sweep-bloom"
        variants={lightBloom}
        initial="hidden"
        animate="visible"
        aria-hidden
      />
      <motion.div
        className="preloader__sweep-flash"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.22, 0] }}
        transition={{
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.35,
        }}
        aria-hidden
      />
    </>
  );
}
