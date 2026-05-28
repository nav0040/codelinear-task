"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/components/animations/motion";
import { KycBenefitList } from "@/components/molecules/KycBenefitList";
import { KYC_BENEFITS_SECTION } from "@/constants/kyc-benefits";

export function KycBenefitsContent() {
  const { headlineLines, benefitsLabel } = KYC_BENEFITS_SECTION;

  return (
    <motion.div
      className="banking-kyc-content"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.h2 custom={0} variants={fadeUp} className="banking-kyc-headline">
        {headlineLines.map((line) => (
          <span key={line} className="banking-kyc-headline-line">
            {line}
          </span>
        ))}
      </motion.h2>

      <motion.p custom={1} variants={fadeUp} className="banking-kyc-benefits-label">
        {benefitsLabel}
      </motion.p>

      <motion.div custom={2} variants={fadeUp} className="banking-kyc-benefits-list-wrap">
        <KycBenefitList />
      </motion.div>
    </motion.div>
  );
}
