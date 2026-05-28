"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/motion";
import { CaseStudiesCarousel } from "@/components/organisms/CaseStudiesCarousel";
import { CASE_STUDIES } from "@/constants/case-studies";

export function BankingCaseStudiesSection() {
  const { title } = CASE_STUDIES;

  return (
    <section
      id={CASE_STUDIES.id}
      className="banking-case-root"
      aria-labelledby="case-studies-title"
    >
      <div className="banking-case-shell">
        <motion.h2
          id="case-studies-title"
          className="banking-case-title"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {title}
        </motion.h2>

        <div className="banking-case-stage-wrap">
          <CaseStudiesCarousel />
        </div>
      </div>
    </section>
  );
}
