"use client";

import type { CtaPanelProps } from "./CtaPanel.props";
import { motion } from "framer-motion";
import Link from "next/link";
import { BankingPrimaryButton } from "@/components/atoms/BankingPrimaryButton";
import { fadeUp, staggerContainer } from "@/components/animations/motion";
import { CtaWatermark } from "@/components/atoms/CtaWatermark";
import { BANKING_CTA } from "@/constants/banking-cta";

export function CtaPanel({ watermarkAlign = "right" }: CtaPanelProps) {
  const {
    headlineLines,
    bodyLines,
    primaryCta,
    secondaryCta,
    primaryCtaHref,
    secondaryCtaHref,
  } = BANKING_CTA;

  return (
    <div className="banking-cta-panel">
      <CtaWatermark align={watermarkAlign} />

      <motion.div
        className="banking-cta-layout"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <div className="banking-cta-copy">
          <motion.h2 custom={0} variants={fadeUp} className="banking-cta-headline">
            {headlineLines.map((line) => (
              <span key={line} className="banking-cta-headline-line">
                {line}
              </span>
            ))}
          </motion.h2>

          <motion.p custom={1} variants={fadeUp} className="banking-cta-body">
            {bodyLines.map((line) => (
              <span key={line} className="banking-cta-body-line">
                {line}
              </span>
            ))}
          </motion.p>
        </div>

        <motion.div custom={2} variants={fadeUp} className="banking-cta-actions">
          <Link href={secondaryCtaHref} className="banking-cta-btn-secondary">
            {secondaryCta}
          </Link>
          <BankingPrimaryButton href={primaryCtaHref} label={primaryCta} />
        </motion.div>
      </motion.div>
    </div>
  );
}
