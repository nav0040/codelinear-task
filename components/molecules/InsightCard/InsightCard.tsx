"use client";

import type { InsightCardData, InsightCardProps } from "./InsightCard.props";
import { motion } from "framer-motion";
import { BankingOutlineButton } from "@/components/atoms/BankingOutlineButton";
import { fadeUp } from "@/components/animations/motion";

export function InsightCard({ article, index = 0 }: InsightCardProps) {
  const { category, title, author, date, readMoreHref } = article;

  return (
    <motion.article
      className="banking-insights-card"
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
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
    </motion.article>
  );
}
