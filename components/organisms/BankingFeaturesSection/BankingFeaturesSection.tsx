"use client";

import { SectionReveal } from "@/components/animations";
import { FeaturesGrid } from "@/components/organisms/FeaturesGrid";
import { FeaturesIntro } from "@/components/organisms/FeaturesIntro";
import { FEATURES_SECTION } from "@/constants/features";

export function BankingFeaturesSection() {
  return (
    <SectionReveal
      id={FEATURES_SECTION.id}
      className="banking-features-root relative"
      aria-labelledby="features-section-title"
    >
      <div className="relative z-10">
        <div className="banking-features-shell py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-x-20 xl:gap-x-24">
            <FeaturesIntro />
            <FeaturesGrid />
          </div>
        </div>
      </div>

      <h2 id="features-section-title" className="sr-only">
        Solutions and features
      </h2>
    </SectionReveal>
  );
}
