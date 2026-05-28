"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer } from "@/components/animations/motion";
import { ASSETS } from "@/constants/assets";
import { DIGITAL_BANKING_SHOWCASE } from "@/constants/digital-banking-showcase";

export function DigitalBankingFeatures() {
  const { checklist } = DIGITAL_BANKING_SHOWCASE;

  return (
    <motion.div
      className="banking-digital-features"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.h3 custom={0} variants={fadeUp} className="banking-digital-feature-title">
        {DIGITAL_BANKING_SHOWCASE.featureTitleLines.map((line) => (
          <span key={line} className="banking-digital-feature-title-line">
            {line}
          </span>
        ))}
      </motion.h3>

      <motion.p custom={1} variants={fadeUp} className="banking-digital-feature-body">
        {DIGITAL_BANKING_SHOWCASE.featureBody}
      </motion.p>

      <motion.ul custom={2} variants={fadeUp} className="banking-digital-checklist">
        {checklist.map((lines) => (
          <li
            key={lines.join("-")}
            className={`banking-digital-check-item${lines.length > 1 ? " banking-digital-check-item--multiline" : ""}`}
          >
            <span className="banking-digital-check-bullet">
              <Image
                src={ASSETS.icons.checkBullet}
                alt=""
                width={30}
                height={32}
                className="banking-digital-check-icon"
              />
            </span>
            <span className="banking-digital-check-text">
              {lines.map((line) => (
                <span key={line} className="banking-digital-check-text-line">
                  {line}
                </span>
              ))}
            </span>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
