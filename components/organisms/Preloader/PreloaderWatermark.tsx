"use client";

import { motion } from "framer-motion";
import { PRELOADER_BRAND } from "./preloader.constants";
import { watermarkDrift, watermarkReveal } from "./preloader.motion";

export function PreloaderWatermark() {
  return (
    <motion.div
      className="preloader__watermark-wrap"
      variants={watermarkReveal}
      initial="hidden"
      animate="visible"
      aria-hidden
    >
      <motion.span
        className="preloader__watermark"
        variants={watermarkDrift}
        animate="animate"
      >
        {PRELOADER_BRAND}
      </motion.span>
    </motion.div>
  );
}
