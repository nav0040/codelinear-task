"use client";

import { DigitalN7Watermark } from "@/components/atoms/DigitalN7Watermark";
import { DigitalBankingCopy } from "@/components/organisms/DigitalBankingCopy";
import { DigitalBankingFeatures } from "@/components/organisms/DigitalBankingFeatures";
import { DigitalBankingPhone } from "@/components/organisms/DigitalBankingPhone";
import { DIGITAL_BANKING_SHOWCASE } from "@/constants/digital-banking-showcase";

export function BankingDigitalBankingSection() {
  return (
    <section
      id={DIGITAL_BANKING_SHOWCASE.id}
      className="banking-digital-root"
      aria-labelledby="digital-banking-title"
    >
      <div className="banking-digital-shell">
        <DigitalN7Watermark />

        <div className="banking-digital-grid">
          <DigitalBankingCopy />
          <DigitalBankingPhone />
          <DigitalBankingFeatures />
        </div>
      </div>

      <h2 id="digital-banking-title" className="sr-only">
        Digital banking out-of-the-box
      </h2>
    </section>
  );
}
