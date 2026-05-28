"use client";

import type { CtaWatermarkProps } from "./CtaWatermark.props";
import { motion } from "framer-motion";
import { premiumEase } from "@/components/animations/motion";
import { BANKING_CTA } from "@/constants/banking-cta";

export function CtaWatermark({ align = "right" }: CtaWatermarkProps) {
  return (
    <div
      className={`banking-cta-watermark banking-cta-watermark--${align}`}
      aria-hidden
    >
      <motion.div
        className="banking-cta-watermark-inner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: premiumEase }}
      >
        <span className="banking-cta-watermark-text banking-cta-watermark-drift">
          {BANKING_CTA.watermark}
        </span>
      </motion.div>
    </div>
  );
}
