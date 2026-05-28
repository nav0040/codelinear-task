"use client";

import { motion } from "framer-motion";
import { BankingPrimaryButton } from "@/components/atoms/BankingPrimaryButton";
import { fadeUp, staggerContainer } from "@/components/animations/motion";
import { LearnMoreLink } from "@/components/atoms/LearnMoreLink";
import { DIGITAL_BANKING_SHOWCASE } from "@/constants/digital-banking-showcase";

export function DigitalBankingCopy() {
  const {
    headlineLines,
    subheadlineLines,
    primaryCta,
    learnMoreHref,
    primaryCtaHref,
  } = DIGITAL_BANKING_SHOWCASE;

  return (
    <motion.div
      className="banking-digital-copy"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.h2 custom={0} variants={fadeUp} className="banking-digital-headline">
        {headlineLines.map((line) => (
          <span key={line} className="banking-digital-headline-line">
            {line}
          </span>
        ))}
      </motion.h2>

      <motion.p custom={1} variants={fadeUp} className="banking-digital-subheadline">
        {subheadlineLines.map((line) => (
          <span key={line} className="banking-digital-subheadline-line">
            {line}
          </span>
        ))}
      </motion.p>

      <motion.div custom={2} variants={fadeUp} className="banking-digital-cta-stack">
        <BankingPrimaryButton href={primaryCtaHref} label={primaryCta} />
        <LearnMoreLink
          href={learnMoreHref}
          className="banking-digital-learn-more"
        />
      </motion.div>
    </motion.div>
  );
}
