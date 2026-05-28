"use client";

import type { ReactNode } from "react";
import { AmbientMotionField } from "./AmbientMotionField";
import { CinematicCursor } from "./CinematicCursor";

interface MotionProviderProps {
  children: ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <>
      <AmbientMotionField />
      <CinematicCursor />
      {children}
    </>
  );
}
