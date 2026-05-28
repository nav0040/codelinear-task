"use client";

import { motion } from "framer-motion";
import { LearnMoreLink } from "@/components/atoms/LearnMoreLink";
import { fadeUp } from "@/components/animations/motion";
import { InsightCard } from "@/components/molecules/InsightCard";
import { FeaturedInsightCard } from "@/components/organisms/FeaturedInsightCard";
import { BANKING_INSIGHTS } from "@/constants/banking-insights";

export function InsightsBoard() {
  const { featured, articles, readAllLabel, readAllHref } = BANKING_INSIGHTS;

  return (
    <div className="banking-insights-board-col">
      <div className="banking-insights-board">
        <FeaturedInsightCard article={featured} />

        <div className="banking-insights-duo">
          {articles.map((article, index) => (
            <InsightCard key={article.id} article={article} index={index + 1} />
          ))}
        </div>
      </div>

      <motion.div
        className="banking-insights-footer"
        variants={fadeUp}
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        <LearnMoreLink href={readAllHref} label={readAllLabel} />
      </motion.div>
    </div>
  );
}
