"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer } from "@/components/animations/motion";
import { ASSETS } from "@/constants/assets";
import { BRANCHLESS_SHOWCASE } from "@/constants/branchless-showcase";

export function BranchlessContent() {
  const { headline, checklist } = BRANCHLESS_SHOWCASE;

  return (
    <motion.div
      className="banking-branchless-content"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.h2 custom={0} variants={fadeUp} className="banking-branchless-headline">
        {headline}
      </motion.h2>

      <motion.p custom={1} variants={fadeUp} className="banking-branchless-body">
        {BRANCHLESS_SHOWCASE.bodyLines.map((line) => (
          <span key={line} className="banking-branchless-body-line">
            {line}
          </span>
        ))}
      </motion.p>

      <motion.ul custom={2} variants={fadeUp} className="banking-branchless-checklist">
        {checklist.map((item) => (
          <li key={item} className="banking-branchless-check-item">
            <span className="banking-branchless-check-bullet">
              <Image
                src={ASSETS.icons.checkBullet}
                alt=""
                width={30}
                height={32}
                className="banking-branchless-check-icon"
              />
            </span>
            <span className="banking-branchless-check-text">{item}</span>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
