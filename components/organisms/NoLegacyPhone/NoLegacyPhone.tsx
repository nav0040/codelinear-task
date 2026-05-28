"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { scaleIn } from "@/components/animations/motion";
import { NO_LEGACY_IPHONE } from "@/constants/no-legacy-showcase";

export function NoLegacyPhone() {
  const { src, alt, width, height } = NO_LEGACY_IPHONE;

  return (
    <div className="banking-legacy-visual">
      <motion.div
        className="banking-legacy-phone-wrap"
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="banking-legacy-phone-image"
          sizes="(max-width: 1024px) 72vw, 269px"
          priority={false}
        />
      </motion.div>
    </div>
  );
}
