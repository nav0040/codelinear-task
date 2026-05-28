"use client";

import { BranchlessContent } from "@/components/organisms/BranchlessContent";
import { BranchlessPhone } from "@/components/organisms/BranchlessPhone";
import { BRANCHLESS_SHOWCASE } from "@/constants/branchless-showcase";

export function BankingBranchlessSection() {
  return (
    <section
      id={BRANCHLESS_SHOWCASE.id}
      className="banking-branchless-root"
      aria-labelledby="branchless-title"
    >
      <div className="banking-branchless-shell">
        <div className="banking-branchless-grid">
          <BranchlessPhone />
          <BranchlessContent />
        </div>
      </div>

      <h2 id="branchless-title" className="sr-only">
        {BRANCHLESS_SHOWCASE.headline}
      </h2>
    </section>
  );
}
