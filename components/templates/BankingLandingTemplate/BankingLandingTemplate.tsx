import {
  BankingNavbar,
  BankingFooter,
  BankingHeroSection,
  BankingFeaturesSection,
  BankingCoreBankingSection,
  BankingKycBenefitsSection,
  BankingCtaSection,
  BankingMarqueeSection,
  BankingDigitalBankingSection,
  BankingNoLegacySection,
  BankingBranchlessSection,
  BankingPaperlessCtaSection,
  BankingInsightsSection,
  BankingCaseStudiesSection,
  BankingClosingCtaSection,
} from "@/components/organisms";
import { SectionVectorDecor } from "@/components/atoms/SectionVectorDecor";
import { ASSETS } from "@/constants/assets";
export function BankingLandingTemplate() {
  return (
    <div className="relative z-[1] w-full">
      <div className="sticky top-0 z-[110] overflow-visible">
        <BankingNavbar />
      </div>
      <BankingHeroSection />
      <BankingFeaturesSection />
      <BankingCoreBankingSection />
      <BankingKycBenefitsSection />
      <BankingCtaSection />
      <BankingMarqueeSection />
      <div className="banking-showcase-stack relative" aria-label="Product showcase">
        <SectionVectorDecor
          image={ASSETS.banking.sectionVectorDecor}
          wrapperClassName="banking-showcase-vector"
          imageClassName="banking-showcase-vector-image"
          sizes="(max-width: 1024px) 48vw, 34vw"
        />
        <BankingDigitalBankingSection />
        <BankingNoLegacySection />
        <BankingBranchlessSection />
      </div>
      <BankingPaperlessCtaSection />
      <BankingInsightsSection />
      <BankingCaseStudiesSection />
      <BankingClosingCtaSection />
      <BankingFooter />
    </div>
  );
}
