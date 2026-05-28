"use client";

import { SectionReveal } from "@/components/animations";
import { InsightsBoard } from "@/components/organisms/InsightsBoard";
import { InsightsIntro } from "@/components/organisms/InsightsIntro";
import { BANKING_INSIGHTS } from "@/constants/banking-insights";

export function BankingInsightsSection() {
  return (
    <SectionReveal
      id={BANKING_INSIGHTS.id}
      className="banking-insights-root"
      aria-labelledby="insights-title"
    >
      <div className="banking-insights-glow" aria-hidden />

      <div className="banking-insights-shell">
        <div className="banking-insights-grid">
          <InsightsIntro />
          <InsightsBoard />
        </div>
      </div>

      <h2 id="insights-title" className="sr-only">
        {BANKING_INSIGHTS.headlineLines.join(" ")}
      </h2>
    </SectionReveal>
  );
}
