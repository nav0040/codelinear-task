"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/components/animations/motion";
import { FeatureBlock } from "@/components/molecules/FeatureBlock";
import { BANKING_FEATURES } from "@/constants/features";

export function FeaturesGrid() {
  return (
    <motion.div
      className="relative w-full"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <div className="banking-features-panel">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-20 lg:gap-x-16 lg:gap-y-20">
          {BANKING_FEATURES.map((feature, index) => (
            <FeatureBlock key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
