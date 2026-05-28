"use client";

import type { FeatureBlockProps } from "./FeatureBlock.props";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations";
import { FeatureIcon } from "@/components/atoms/FeatureIcon";
import { LearnMoreLink } from "@/components/atoms/LearnMoreLink";
import { cn } from "@/lib/cn";

export function FeatureBlock({ feature, index, className }: FeatureBlockProps) {
  const showLink = "showLearnMore" in feature && feature.showLearnMore;
  const badge = "badge" in feature ? feature.badge : undefined;

  return (
    <motion.article
      custom={index}
      variants={fadeUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      data-feature={feature.id}
      className={cn("banking-feature-block group relative", className)}
    >
      {badge ? (
        <span className="banking-feature-badge" aria-label={badge}>
          {badge}
        </span>
      ) : null}

      <FeatureIcon icon={feature.icon} className="mb-4" />

      <h3 className="mb-3 text-xl font-semibold leading-snug text-white">
        {feature.title}
      </h3>

      <p className="text-base leading-relaxed text-[#94a3b8]">
        {feature.description}
      </p>

      {showLink ? (
        <div className="mt-5">
          <LearnMoreLink href={feature.href} />
        </div>
      ) : null}
    </motion.article>
  );
}
