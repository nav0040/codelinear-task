"use client";

import { ClosingCtaStrip } from "@/components/organisms/ClosingCtaStrip";
import { BANKING_CLOSING_CTA } from "@/constants/banking-closing-cta";

export function BankingClosingCtaSection() {
  const { headlineLines } = BANKING_CLOSING_CTA;

  return (
    <section
      id={BANKING_CLOSING_CTA.id}
      className="banking-closing-cta-root"
      aria-labelledby="closing-cta-title"
    >
      <div className="banking-closing-cta-shell">
        <ClosingCtaStrip />
      </div>

      <h2 id="closing-cta-title" className="sr-only">
        {headlineLines.join(" ")}
      </h2>
    </section>
  );
}
