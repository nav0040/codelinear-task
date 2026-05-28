"use client";

import { NoLegacyContent } from "@/components/organisms/NoLegacyContent";
import { NoLegacyPhone } from "@/components/organisms/NoLegacyPhone";
import { NO_LEGACY_SHOWCASE } from "@/constants/no-legacy-showcase";

export function BankingNoLegacySection() {
  return (
    <section
      id={NO_LEGACY_SHOWCASE.id}
      className="banking-legacy-root"
      aria-labelledby="no-legacy-title"
    >
      <div className="banking-legacy-shell">
        <div className="banking-legacy-grid">
          <NoLegacyContent />
          <NoLegacyPhone />
        </div>
      </div>

      <h2 id="no-legacy-title" className="sr-only">
        {NO_LEGACY_SHOWCASE.headline}
      </h2>
    </section>
  );
}
