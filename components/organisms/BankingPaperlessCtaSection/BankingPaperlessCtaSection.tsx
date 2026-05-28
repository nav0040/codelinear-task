"use client";

import { CtaPanel } from "@/components/organisms/CtaPanel";
import { BANKING_PAPERLESS_CTA } from "@/constants/banking-cta";

export function BankingPaperlessCtaSection() {
  const { headlineLines } = BANKING_PAPERLESS_CTA;

  return (
    <section
      id={BANKING_PAPERLESS_CTA.id}
      className="banking-cta-root banking-cta-root--on-light"
      aria-labelledby="paperless-cta-title"
    >
      <div className="banking-cta-shell">
        <CtaPanel watermarkAlign="right" />
      </div>

      <h2 id="paperless-cta-title" className="sr-only">
        {headlineLines.join(" ")}
      </h2>
    </section>
  );
}
