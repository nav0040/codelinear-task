import type { Transition, Variants } from "framer-motion";
import {
  MOTION_DURATION,
  MOTION_EASE,
  MOTION_SPRING,
  MOTION_STAGGER,
} from "./constants";

export const premiumEase = MOTION_EASE;

export const premiumTransition: Transition = {
  duration: MOTION_DURATION.base,
  ease: premiumEase,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * MOTION_STAGGER.base,
      duration: MOTION_DURATION.cinematic,
      ease: premiumEase,
    },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: MOTION_DURATION.base, ease: premiumEase },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: MOTION_DURATION.cinematic, ease: premiumEase },
  },
};

export const blurReveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(14px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.14,
      duration: 1.05,
      ease: premiumEase,
    },
  }),
};

export const lineReveal: Variants = {
  hidden: { opacity: 0, y: "110%" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.95,
      ease: premiumEase,
    },
  }),
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATION.cinematic,
      ease: premiumEase,
      when: "beforeChildren",
      staggerChildren: MOTION_STAGGER.base,
      delayChildren: 0.08,
    },
  },
};

export const floatY = (offset = 8): Variants => ({
  initial: { y: 0 },
  animate: {
    y: [-offset, offset, -offset],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

export const floatRotate = (offset = 6): Variants => ({
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-offset, offset * 0.7, -offset],
    rotate: [-0.6, 0.6, -0.6],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

export const navbarReveal: Variants = {
  hidden: { opacity: 0, y: -20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: premiumEase },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: MOTION_STAGGER.base,
      delayChildren: 0.12,
    },
  },
};

export { MOTION_SPRING };
