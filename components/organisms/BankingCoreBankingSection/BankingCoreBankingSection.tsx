"use client";

import { SectionReveal } from "@/components/animations";
import { CB7Watermark } from "@/components/atoms/CB7Watermark";
import { CoreBankingContent } from "@/components/organisms/CoreBankingContent";
import { DashboardShowcase } from "@/components/organisms/DashboardShowcase";
import { CORE_BANKING_SHOWCASE } from "@/constants/core-banking";

export function BankingCoreBankingSection() {
  return (
    <SectionReveal
      id={CORE_BANKING_SHOWCASE.id}
      className="banking-core-root"
      aria-labelledby="core-banking-title"
    >
      <CB7Watermark />

      <div className="banking-core-layout">
        <div className="banking-core-content-col">
          <CoreBankingContent />
        </div>

        <div className="banking-core-visual-col">
          <DashboardShowcase />
        </div>
      </div>

      <h2 id="core-banking-title" className="sr-only">
        Core banking showcase
      </h2>
    </SectionReveal>
  );
}
