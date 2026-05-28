"use client";

import { SectionReveal } from "@/components/animations";
import { LaptopDashboardFrame } from "@/components/molecules/LaptopDashboardFrame";
import { KycBenefitsContent } from "@/components/organisms/KycBenefitsContent";
import { KYC_BENEFITS_SECTION } from "@/constants/kyc-benefits";

export function BankingKycBenefitsSection() {
  return (
    <SectionReveal
      id={KYC_BENEFITS_SECTION.id}
      className="banking-kyc-root"
      aria-labelledby="kyc-benefits-title"
    >
      <div className="banking-kyc-inner">
        <div className="banking-kyc-grid">
          <div className="banking-kyc-visual-col">
            <LaptopDashboardFrame />
          </div>

          <div className="banking-kyc-content-col">
            <KycBenefitsContent />
          </div>
        </div>
      </div>

      <h2 id="kyc-benefits-title" className="sr-only">
        Core banking system benefits
      </h2>
    </SectionReveal>
  );
}
