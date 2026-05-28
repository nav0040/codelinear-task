import type { HTMLAttributes } from "react";

export interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "light" | "hero";
  rounded?: "xl" | "2xl" | "3xl";
}
