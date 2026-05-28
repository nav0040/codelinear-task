"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer } from "@/components/animations/motion";
import { ASSETS } from "@/constants/assets";
import { NO_LEGACY_SHOWCASE } from "@/constants/no-legacy-showcase";

export function NoLegacyContent() {
  const { headline, checklist } = NO_LEGACY_SHOWCASE;

  return (
    <motion.div
      className="banking-legacy-content"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.h2 custom={0} variants={fadeUp} className="banking-legacy-headline">
        {headline}
      </motion.h2>

      <motion.p custom={1} variants={fadeUp} className="banking-legacy-body">
        {NO_LEGACY_SHOWCASE.bodyLines.map((line) => (
          <span key={line} className="banking-legacy-body-line">
            {line}
          </span>
        ))}
      </motion.p>

      <motion.ul custom={2} variants={fadeUp} className="banking-legacy-checklist">
        {checklist.map((item) => (
          <li key={item} className="banking-legacy-check-item">
            <span className="banking-legacy-check-bullet">
              <Image
                src={ASSETS.icons.checkBullet}
                alt=""
                width={30}
                height={32}
                className="banking-legacy-check-icon"
              />
            </span>
            <span className="banking-legacy-check-text">{item}</span>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
