import type { MarqueeSegment } from "@/constants/marquee";

export type MarqueeSequenceProps = {
  segments: MarqueeSegment[];
  hidden?: boolean;
};
