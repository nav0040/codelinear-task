"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/components/animations/motion";
import { LearnMoreLink } from "@/components/atoms/LearnMoreLink";
import { CORE_BANKING_SHOWCASE } from "@/constants/core-banking";

export function CoreBankingContent() {
  const {
    headlineLine1,
    headlineLine2,
    subheadline,
    primaryCta,
    primaryCtaHref,
    secondaryCta,
    secondaryCtaHref,
  } = CORE_BANKING_SHOWCASE;

  return (
    <motion.div
      className="banking-core-copy"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.h2
        custom={0}
        variants={fadeUp}
        className="banking-core-headline"
      >
        <span className="banking-core-headline-line1">{headlineLine1}</span>
        <span className="banking-core-headline-line2">{headlineLine2}</span>
      </motion.h2>

      <motion.p
        custom={1}
        variants={fadeUp}
        className="banking-core-subheadline"
      >
        {subheadline}
      </motion.p>

      <motion.div
        custom={2}
        variants={fadeUp}
        className="banking-core-cta-stack"
      >
        <Link href={primaryCtaHref} className="banking-core-btn-primary">
          {primaryCta}
        </Link>
        <LearnMoreLink href={secondaryCtaHref} label={secondaryCta} />
      </motion.div>
    </motion.div>
  );
}
