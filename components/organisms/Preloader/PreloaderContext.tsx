"use client";

import { createContext, useContext } from "react";

export interface PreloaderContextValue {
  complete: boolean;
}

const PreloaderContext = createContext<PreloaderContextValue>({
  complete: true,
});

export function usePreloaderComplete(): boolean {
  return useContext(PreloaderContext).complete;
}

export const PreloaderProvider = PreloaderContext.Provider;
