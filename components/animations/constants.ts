export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

export const MOTION_DURATION = {
  fast: 0.45,
  base: 0.85,
  slow: 1.15,
  cinematic: 1.35,
} as const;

export const MOTION_SPRING = {
  magnetic: { stiffness: 220, damping: 22, mass: 0.45 },
  cursor: { stiffness: 140, damping: 26, mass: 0.35 },
  tilt: { stiffness: 180, damping: 24, mass: 0.5 },
  float: { stiffness: 40, damping: 14, mass: 1 },
} as const;

export const MOTION_STAGGER = {
  tight: 0.08,
  base: 0.12,
  relaxed: 0.16,
} as const;

export const VIEWPORT_REVEAL = {
  once: true,
  margin: "-12% 0px -10% 0px" as const,
};
