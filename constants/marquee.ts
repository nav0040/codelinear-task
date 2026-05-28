export type MarqueeSegment =
  | { type: "brand"; label: string }
  | { type: "sparkle" }
  | { type: "text"; label: string }
  | { type: "emoji"; label: string };

export const BANKING_MARQUEE_CYCLE: MarqueeSegment[] = [
  { type: "brand", label: "N7" },
  { type: "sparkle" },
  { type: "text", label: "Say" },
  { type: "emoji", label: "👋" },
  { type: "text", label: "to the new way of banking" },
  { type: "sparkle" },
  { type: "brand", label: "CB7" },
  { type: "sparkle" },
];

export const BANKING_MARQUEE = {
  id: "marquee",
  repeatCount: 4,
} as const;
