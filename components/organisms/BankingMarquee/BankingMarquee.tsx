"use client";

import { MarqueeSequence } from "@/components/molecules/MarqueeSequence";
import { BANKING_MARQUEE, BANKING_MARQUEE_CYCLE } from "@/constants/marquee";

export function BankingMarquee() {
  const cycles = Array.from({ length: BANKING_MARQUEE.repeatCount }, (_, i) => i);

  return (
    <div className="banking-marquee-viewport">
      <div className="banking-marquee-track">
        {cycles.map((i) => (
          <MarqueeSequence
            key={`marquee-cycle-a-${i}`}
            segments={BANKING_MARQUEE_CYCLE}
          />
        ))}
        {cycles.map((i) => (
          <MarqueeSequence
            key={`marquee-cycle-b-${i}`}
            segments={BANKING_MARQUEE_CYCLE}
            hidden
          />
        ))}
      </div>
    </div>
  );
}
