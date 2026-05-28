"use client";

import { CtaPanel } from "@/components/organisms/CtaPanel";
import { BANKING_CTA } from "@/constants/banking-cta";

export function BankingCtaSection() {
  return (
    <section
      id={BANKING_CTA.id}
      className="banking-cta-root"
      aria-labelledby="banking-cta-title"
    >
      <div className="banking-cta-shell">
        <CtaPanel watermarkAlign="right" />
      </div>

      <h2 id="banking-cta-title" className="sr-only">
        Take the full advantage of going paper-less now
      </h2>
    </section>
  );
}
