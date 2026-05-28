"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { scaleIn } from "@/components/animations/motion";
import { KYC_DASHBOARD_IMAGE } from "@/constants/kyc-benefits";

export function LaptopDashboardFrame() {
  const { src, alt, width, height } = KYC_DASHBOARD_IMAGE;

  return (
    <motion.div
      className="banking-kyc-dashboard-stage"
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <div className="banking-kyc-dashboard-clip">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="banking-kyc-dashboard-image"
          sizes="(max-width: 1024px) 94vw, 42vw"
          priority={false}
        />
      </div>
    </motion.div>
  );
}
