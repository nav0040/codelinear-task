import { MarqueeSparkle } from "@/components/atoms/MarqueeSparkle";
import Image from "next/image";
import { ASSETS } from "@/constants/assets";
import type { MarqueeSequenceProps } from "./MarqueeSequence.props";

export function MarqueeSequence({ segments, hidden = false }: MarqueeSequenceProps) {
  return (
    <div
      className="banking-marquee-sequence"
      aria-hidden={hidden || undefined}
    >
      {segments.map((segment, index) => {
        const key = `${segment.type}-${index}`;

        if (segment.type === "sparkle") {
          return (
            <span key={key} className="banking-marquee-item banking-marquee-sparkle-wrap">
              <MarqueeSparkle />
            </span>
          );
        }

        if (segment.type === "brand") {
          return (
            <span key={key} className="banking-marquee-item banking-marquee-brand">
              {segment.label}
            </span>
          );
        }

        if (segment.type === "emoji") {
          return (
            <span key={key} className="banking-marquee-item banking-marquee-emoji">
              {segment.label === "👋" ? (
                <Image
                  src={ASSETS.marquee.waveGif}
                  alt=""
                  width={106}
                  height={56}
                  className="banking-marquee-hand-gif"
                />
              ) : (
                segment.label
              )}
            </span>
          );
        }

        return (
          <span key={key} className="banking-marquee-item banking-marquee-text">
            {segment.label}
          </span>
        );
      })}
    </div>
  );
}
