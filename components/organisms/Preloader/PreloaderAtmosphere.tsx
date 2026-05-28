"use client";

import { motion } from "framer-motion";
import { preloaderFade, preloaderEase } from "./preloader.motion";

export function PreloaderAtmosphere() {
  return (
    <div className="preloader__atmosphere" aria-hidden>
      <motion.div
        className="preloader__bg"
        variants={preloaderFade}
        initial="hidden"
        animate="visible"
      />
      <div className="preloader__bg-noise" />

      <motion.div
        className="preloader__fog preloader__fog--a"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -24, 16, 0],
          opacity: [0.35, 0.55, 0.4, 0.35],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="preloader__fog preloader__fog--b"
        animate={{
          x: [0, -32, 24, 0],
          y: [0, 20, -16, 0],
          opacity: [0.25, 0.42, 0.3, 0.25],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />

      <div className="preloader__vignette" />
    </div>
  );
}

export function PreloaderHeroMorphGlow({ exiting }: { exiting: boolean }) {
  return (
    <motion.div
      className="preloader__hero-morph-glow"
      aria-hidden
      initial={{ opacity: 0, scale: 0.85 }}
      animate={
        exiting
          ? { opacity: 0, x: "22%", y: "-8%", scale: 1.4 }
          : { opacity: [0, 0.48, 0.38], scale: [0.85, 1.06, 1] }
      }
      transition={{
        duration: exiting ? 1.35 : 2.4,
        ease: preloaderEase,
        times: exiting ? undefined : [0, 0.5, 1],
        delay: exiting ? 0 : 1.1,
      }}
    />
  );
}
