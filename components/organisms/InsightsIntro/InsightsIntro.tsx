"use client";

import { motion } from "framer-motion";
import { BankingOutlineButton } from "@/components/atoms/BankingOutlineButton";
import { fadeUp, staggerContainer } from "@/components/animations/motion";
import { BANKING_INSIGHTS } from "@/constants/banking-insights";

export function InsightsIntro() {
  const { headlineLines, insightsCta, insightsCtaHref } = BANKING_INSIGHTS;

  return (
    <motion.div
      className="banking-insights-intro"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.h2 custom={0} variants={fadeUp} className="banking-insights-headline">
        {headlineLines.map((line) => (
          <span key={line} className="banking-insights-headline-line">
            {line}
          </span>
        ))}
      </motion.h2>

      <motion.div custom={1} variants={fadeUp} className="banking-insights-intro-cta">
        <BankingOutlineButton
          href={insightsCtaHref}
          label={insightsCta}
          shape="rounded"
        />
      </motion.div>
    </motion.div>
  );
}
