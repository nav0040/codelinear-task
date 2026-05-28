"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { scaleIn } from "@/components/animations";
import { CORE_BANKING_DASHBOARD_IMAGE } from "@/constants";

export function DashboardShowcase() {
  const { src, alt, width, height } = CORE_BANKING_DASHBOARD_IMAGE;

  return (
    <motion.div
      className="banking-dashboard-stage"
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <div className="banking-dashboard-clip">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="banking-dashboard-image"
          sizes="(max-width: 1024px) 94vw, 42vw"
          priority
        />
      </div>
    </motion.div>
  );
}
