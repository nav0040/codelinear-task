"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Preloader } from "./Preloader";
import { PreloaderProvider } from "./PreloaderContext";
import { pageReveal } from "./preloader.motion";

interface PreloaderGateProps {
  children: ReactNode;
}

export function PreloaderGate({ children }: PreloaderGateProps) {
  const prefersReducedMotion = useReducedMotion();
  const [complete, setComplete] = useState(prefersReducedMotion ?? false);
  const [showPreloader, setShowPreloader] = useState(!prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setComplete(true);
      setShowPreloader(false);
    }
  }, [prefersReducedMotion]);

  const handleComplete = useCallback(() => {
    setShowPreloader(false);
    setComplete(true);
  }, []);

  return (
    <PreloaderProvider value={{ complete }}>
      <div
        className={cn(
          "preloader-gate__content",
          !complete && "preloader-gate__content--loading"
        )}
      >
        <motion.div
          className="preloader-gate__inner"
          variants={pageReveal}
          initial="hidden"
          animate={complete ? "visible" : "hidden"}
        >
          {children}
        </motion.div>
      </div>

      {showPreloader ? <Preloader onComplete={handleComplete} /> : null}
    </PreloaderProvider>
  );
}
