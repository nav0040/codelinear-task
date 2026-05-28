import type { Variants } from "framer-motion";
import { premiumEase } from "@/components/animations/motion";

export const preloaderEase = premiumEase;

export const PRELOADER_TIMING = {
  backgroundIn: 1.1,
  watermarkIn: 1.45,
  coreActivate: 2.2,
  dataStreams: 4.8,
  statusCycle: 0.92,
  statusTotal: 3.68,
  lightSweep: 1.25,
  sweepDelay: 4.35,
  exit: 1.35,
  sceneDuration: 5.65,
} as const;

export const preloaderFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: PRELOADER_TIMING.backgroundIn, ease: preloaderEase },
  },
};

export const preloaderExit: Variants = {
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
  },
  exit: {
    opacity: 0,
    filter: "blur(18px)",
    scale: 1.04,
    transition: { duration: PRELOADER_TIMING.exit, ease: preloaderEase },
  },
};

export const watermarkReveal: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 32 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: PRELOADER_TIMING.watermarkIn,
      ease: preloaderEase,
      delay: 0.4,
    },
  },
};

export const watermarkDrift: Variants = {
  animate: {
    x: [0, 18, -12, 0],
    y: [0, -14, 10, 0],
    transition: {
      duration: 24,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const coreReveal: Variants = {
  hidden: { opacity: 0, scale: 0.82, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.35,
      ease: preloaderEase,
      delay: 0.75,
    },
  },
};

export const statusLineReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: preloaderEase },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(8px)",
    transition: { duration: 0.55, ease: preloaderEase },
  },
};

export const lightSweep: Variants = {
  hidden: { x: "-130%", opacity: 0 },
  visible: {
    x: "240%",
    opacity: [0, 0.85, 0.65, 0],
    transition: {
      duration: PRELOADER_TIMING.lightSweep,
      ease: preloaderEase,
      times: [0, 0.32, 0.62, 1],
    },
  },
};

export const lightBloom: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: [0, 0.55, 0],
    scale: [0.8, 1.2, 1.35],
    transition: {
      duration: 1.1,
      ease: preloaderEase,
      delay: 0.12,
      times: [0, 0.45, 1],
    },
  },
};

export const pageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.018 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: preloaderEase, delay: 0.1 },
  },
};
