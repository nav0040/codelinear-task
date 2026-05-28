"use client";

import Image from "next/image";
import { FloatingLayer, ScrollReveal } from "@/components/animations";
import { DIGITAL_BANKING_IPHONE } from "@/constants/digital-banking-showcase";

export function DigitalBankingPhone() {
  const { src, alt, width, height } = DIGITAL_BANKING_IPHONE;

  return (
    <div className="banking-digital-visual-col">
      <ScrollReveal variant="scale" className="banking-digital-phone-wrap">
        <FloatingLayer offset={12} rotate>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="banking-digital-phone-image"
            sizes="(max-width: 1024px) 72vw, 269px"
          />
        </FloatingLayer>
      </ScrollReveal>
    </div>
  );
}
