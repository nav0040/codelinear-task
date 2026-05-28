"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "@/components/animations/motion";
import { BANKING_HERO_COPY, BANKING_TRUSTED_LOGOS } from "@/constants";

export function TrustedByLogos() {
  return (
    <motion.div
      custom={4}
      variants={fadeUp}
      className="banking-trusted-by"
      aria-label="Trusted by companies"
    >
      <p className="banking-trusted-by__label">{BANKING_HERO_COPY.trustedByLabel}</p>
      <ul className="banking-trusted-by__list">
        {BANKING_TRUSTED_LOGOS.map((logo) => {
          const iconWidth = "svgWidth" in logo ? logo.svgWidth : 22;

          return (
            <li key={logo.id} className="banking-trusted-by__item">
              <div className="banking-trusted-by__brand">
                <Image
                  src={logo.svgSrc}
                  alt=""
                  width={iconWidth}
                  height={22}
                  className="banking-trusted-by__icon"
                  style={{ width: iconWidth, height: 22 }}
                />
                <span className="banking-trusted-by__name">{logo.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
