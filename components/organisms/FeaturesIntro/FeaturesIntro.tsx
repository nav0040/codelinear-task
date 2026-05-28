"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/components/animations/motion";
import { FEATURES_SECTION } from "@/constants/features";

export function FeaturesIntro() {
  const { headline, cta, ctaHref } = FEATURES_SECTION;

  return (
    <motion.div
      id="solutions-heading"
      className="lg:pt-1"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.h2
        custom={0}
        variants={fadeUp}
        className="max-w-[min(420px,100%)] text-[clamp(2rem,5vw,3rem)] font-light leading-[1.15] tracking-[-0.02em] text-white"
      >
        {headline}
      </motion.h2>

      <motion.div custom={1} variants={fadeUp} className="mt-10 w-full sm:mt-12 lg:mt-14">
        <Link href={ctaHref} className="banking-features-cta block w-full sm:inline-block sm:w-auto">
          {cta}
        </Link>
      </motion.div>
    </motion.div>
  );
}
