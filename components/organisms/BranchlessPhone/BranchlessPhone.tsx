"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { scaleIn } from "@/components/animations/motion";
import { BRANCHLESS_IPHONE } from "@/constants/branchless-showcase";

export function BranchlessPhone() {
  const { src, alt, width, height } = BRANCHLESS_IPHONE;

  return (
    <div className="banking-branchless-visual">
      <motion.div
        className="banking-branchless-phone-wrap"
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
          className="banking-branchless-phone-image"
          sizes="(max-width: 1024px) 72vw, 269px"
          priority={false}
        />
      </motion.div>
    </div>
  );
}
