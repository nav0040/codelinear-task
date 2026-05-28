"use client";

import type { FeaturedInsightCardProps } from "./FeaturedInsightCard.props";
import { motion } from "framer-motion";
import { InsightVectorGrid } from "@/components/atoms/InsightVectorGrid";
import { BankingOutlineButton } from "@/components/atoms/BankingOutlineButton";
import { fadeUp } from "@/components/animations/motion";

export function FeaturedInsightCard({ article }: FeaturedInsightCardProps) {
  const { category, title, author, date, readMoreHref } = article;

  return (
    <motion.article
      className="banking-insights-featured"
      variants={fadeUp}
      custom={0}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <div className="banking-insights-featured-inner">
        <InsightVectorGrid className="banking-insights-featured-visual" />

        <div className="banking-insights-featured-body">
          <p className="banking-insights-category">{category}</p>
          <h3 className="banking-insights-title">{title}</h3>
          <p className="banking-insights-meta">
            <span>{author}</span>
            <span className="banking-insights-meta-date">{date}</span>
          </p>
          <div className="banking-insights-card-actions">
            <BankingOutlineButton
              href={readMoreHref}
              label="READ MORE"
              shape="rounded"
              block
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
