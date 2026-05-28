"use client";

import { motion } from "framer-motion";
import { CheckBullet } from "@/components/atoms/CheckBullet";
import { fadeUp } from "@/components/animations/motion";
import { KYC_BENEFITS } from "@/constants/kyc-benefits";
import type { BenefitColumnProps } from "./KycBenefitList.props";

function BenefitColumn({ items, columnIndex }: BenefitColumnProps) {
  return (
    <ul className="banking-kyc-benefit-column">
      {items.map((lines, index) => {
        const key = lines.join(" ");

        return (
          <motion.li
            key={key}
            custom={columnIndex * 5 + index + 2}
            variants={fadeUp}
            className="banking-kyc-benefit-item"
          >
            <CheckBullet />
            <span className="banking-kyc-benefit-text">
              {lines.map((line) => (
                <span key={line} className="banking-kyc-benefit-text-line">
                  {line}
                </span>
              ))}
            </span>
          </motion.li>
        );
      })}
    </ul>
  );
}

export function KycBenefitList() {
  return (
    <div className="banking-kyc-benefit-list">
      <BenefitColumn items={KYC_BENEFITS.left} columnIndex={0} />
      <BenefitColumn items={KYC_BENEFITS.right} columnIndex={1} />
    </div>
  );
}
