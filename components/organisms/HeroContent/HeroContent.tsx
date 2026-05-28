"use client";

import { motion } from "framer-motion";
import { BankingPrimaryButton } from "@/components/atoms/BankingPrimaryButton";
import { blurReveal, fadeUp, staggerContainer } from "@/components/animations";
import { usePreloaderComplete } from "@/components/organisms/Preloader";
import { TrustedByLogos } from "@/components/molecules/TrustedByLogos";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BANKING_HERO_COPY } from "@/constants";
import { cn } from "@/lib/cn";

export function HeroContent() {
  const preloaderComplete = usePreloaderComplete();
  const {
    headline,
    subheadline,
    primaryCta,
    secondaryCta,
    primaryCtaHref,
  } = BANKING_HERO_COPY;
  const lastLineIndex = headline.length - 1;

  return (
    <motion.div
      className="flex min-w-0 flex-col justify-center lg:max-w-[580px] lg:pt-2 xl:max-w-[620px]"
      variants={staggerContainer}
      initial="hidden"
      animate={preloaderComplete ? "visible" : "hidden"}
    >
      <motion.h1 className="banking-hero-headline" variants={staggerContainer}>
        {headline.map((line, index) => (
          <motion.span
            key={line}
            custom={index}
            variants={blurReveal}
            className={cn(
              index === lastLineIndex
                ? "banking-hero-headline-line2"
                : "banking-hero-headline-line1"
            )}
          >
            {line}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        custom={1}
        variants={fadeUp}
        className="banking-hero-subheadline"
      >
        {subheadline}
      </motion.p>

      <motion.div
        custom={2}
        variants={fadeUp}
        className="mt-9 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-5 lg:mt-11"
      >
        <BankingPrimaryButton
          href={primaryCtaHref}
          label={primaryCta}
          className="w-full sm:w-auto"
        />
        <MagneticButton variant="bankingOutline" className="w-full sm:w-auto">
          {secondaryCta}
        </MagneticButton>
      </motion.div>

      <TrustedByLogos />
    </motion.div>
  );
}
