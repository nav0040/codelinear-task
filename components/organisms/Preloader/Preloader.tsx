"use client";

import { motion } from "framer-motion";
import { useCallback, useRef } from "react";
import type { PreloaderProps } from "./Preloader.props";
import { PreloaderAICore } from "./PreloaderAICore";
import { PreloaderAtmosphere, PreloaderHeroMorphGlow } from "./PreloaderAtmosphere";
import { PreloaderDataStreams } from "./PreloaderDataStreams";
import { PreloaderLightSweep } from "./PreloaderLightSweep";
import { PreloaderParticles } from "./PreloaderParticles";
import { PreloaderStatusText } from "./PreloaderStatusText";
import { PreloaderWatermark } from "./PreloaderWatermark";
import { preloaderExit } from "./preloader.motion";
import { usePreloaderScene } from "./usePreloaderScene";

export function Preloader({ onComplete }: PreloaderProps) {
  const { phase, exiting } = usePreloaderScene();
  const exitHandled = useRef(false);

  const handleExitComplete = useCallback(() => {
    if (exitHandled.current) return;
    exitHandled.current = true;
    onComplete();
  }, [onComplete]);

  return (
    <motion.div
      className="preloader"
      role="status"
      aria-label="Initializing codelinear digital banking"
      aria-busy={!exiting}
      variants={preloaderExit}
      initial="visible"
      animate={exiting ? "exit" : "visible"}
      onAnimationComplete={() => {
        if (exiting) handleExitComplete();
      }}
    >
      <PreloaderAtmosphere />
      <PreloaderHeroMorphGlow exiting={exiting} />
      <PreloaderWatermark />
      <PreloaderDataStreams />
      <PreloaderParticles />
      <div className="preloader__stage">
        <PreloaderAICore />
        <PreloaderStatusText />
      </div>
      <PreloaderLightSweep phase={phase} />
    </motion.div>
  );
}
