"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BankingPrimaryButton } from "@/components/atoms/BankingPrimaryButton";
import { fadeUp, staggerContainer } from "@/components/animations/motion";
import { BANKING_CLOSING_CTA } from "@/constants/banking-closing-cta";

export function ClosingCtaStrip() {
  const {
    headlineLines,
    body,
    primaryCta,
    secondaryCta,
    primaryCtaHref,
    secondaryCtaHref,
  } = BANKING_CLOSING_CTA;

  return (
    <motion.div
      className="banking-closing-cta-layout"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="banking-closing-cta-copy">
        <motion.h2 custom={0} variants={fadeUp} className="banking-closing-cta-headline">
          {headlineLines.map((line) => (
            <span key={line} className="banking-closing-cta-headline-line">
              {line}
            </span>
          ))}
        </motion.h2>

        <motion.p custom={1} variants={fadeUp} className="banking-closing-cta-body">
          {body}
        </motion.p>
      </div>

      <motion.div custom={2} variants={fadeUp} className="banking-closing-cta-actions">
        <Link href={secondaryCtaHref} className="banking-cta-btn-secondary">
          {secondaryCta}
        </Link>
        <BankingPrimaryButton href={primaryCtaHref} label={primaryCta} />
      </motion.div>
    </motion.div>
  );
}
