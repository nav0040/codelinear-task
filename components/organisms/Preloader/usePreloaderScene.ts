"use client";

import { useCallback, useEffect, useState } from "react";
import { PRELOADER_TIMING } from "./preloader.motion";

export type PreloaderScenePhase = "boot" | "sweep" | "exit";

export function usePreloaderScene() {
  const [phase, setPhase] = useState<PreloaderScenePhase>("boot");
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const sweepTimer = window.setTimeout(
      () => setPhase("sweep"),
      PRELOADER_TIMING.sweepDelay * 1000
    );
    const exitTimer = window.setTimeout(() => {
      setPhase("exit");
      setExiting(true);
    }, PRELOADER_TIMING.sceneDuration * 1000);

    return () => {
      window.clearTimeout(sweepTimer);
      window.clearTimeout(exitTimer);
    };
  }, []);

  const triggerExit = useCallback(() => {
    setPhase("exit");
    setExiting(true);
  }, []);

  return { phase, exiting, triggerExit };
}
