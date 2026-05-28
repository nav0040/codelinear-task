"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FloatingLayer, ParallaxLayer, scaleIn } from "@/components/animations";
import { usePreloaderComplete } from "@/components/organisms/Preloader";
import { ActivityGlassCard } from "@/components/organisms/ActivityGlassCard";
import { BalanceGlassCard } from "@/components/organisms/BalanceGlassCard";
import { BANKING_HERO_IMAGE } from "@/constants";

export function HeroVisual() {
  const preloaderComplete = usePreloaderComplete();
  const { src, alt, width, height } = BANKING_HERO_IMAGE;

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[520px] lg:max-w-[580px] lg:justify-self-end"
      variants={scaleIn}
      initial="hidden"
      animate={preloaderComplete ? "visible" : "hidden"}
    >
      <div className="banking-hero-visual-stage px-2 sm:px-0">
        <div className="banking-hero-image-glow" aria-hidden />

        <div className="banking-hero-photo">
          <ParallaxLayer offset={36}>
            <FloatingLayer offset={6}>
              <div className="banking-hero-photo-frame">
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  priority
                  className="banking-hero-photo-img"
                  sizes="(max-width: 1024px) 92vw, 460px"
                />
              </div>
            </FloatingLayer>
          </ParallaxLayer>
        </div>

        <BalanceGlassCard />
        <ActivityGlassCard />
      </div>
    </motion.div>
  );
}
