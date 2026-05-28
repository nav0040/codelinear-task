"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PRELOADER_STATUS_LINES } from "./preloader.constants";
import { PRELOADER_TIMING, statusLineReveal } from "./preloader.motion";

export function PreloaderStatusText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prev) => {
        if (prev >= PRELOADER_STATUS_LINES.length - 1) return prev;
        return prev + 1;
      });
    }, PRELOADER_TIMING.statusCycle * 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="preloader__status" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.p
          key={PRELOADER_STATUS_LINES[index]}
          className="preloader__status-line"
          variants={statusLineReveal}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {PRELOADER_STATUS_LINES[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
