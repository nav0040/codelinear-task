"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { LearnMoreLink } from "@/components/atoms/LearnMoreLink";
import { premiumEase } from "@/components/animations/motion";
import { CaseStudyCard } from "@/components/molecules/CaseStudyCard";
import { CASE_STUDIES } from "@/constants/case-studies";
import { cn } from "@/lib/cn";

const CARD_WIDTH_DESKTOP = 920;
const SLIDE_SHIFT_RATIO = 0.24;

function getWrappedOffset(index: number, active: number, total: number) {
  let diff = index - active;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

function getSlideMotion(
  offset: number,
  shift: number,
  reducedMotion: boolean
) {
  const abs = Math.abs(offset);

  if (abs > 2) {
    return {
      x: `calc(-50% + ${offset * shift}px)`,
      y: "-50%",
      scale: 0.76,
      opacity: 0,
      rotateY: 0,
      z: -240,
      zIndex: 0,
      filter: "blur(8px)",
    };
  }

  const scale = offset === 0 ? 1 : abs === 1 ? 0.96 : 0.9;
  const opacity = offset === 0 ? 1 : abs === 1 ? 0.5 : 0.22;
  const rotateY = reducedMotion ? 0 : offset * -6;
  const z = reducedMotion ? 0 : offset === 0 ? 80 : -60 - abs * 30;
  const zIndex = 40 - abs * 10;
  const blur = abs === 0 ? 0 : abs === 1 ? 0.5 : 2;

  return {
    x: `calc(-50% + ${offset * shift}px)`,
    y: "-50%",
    scale,
    opacity,
    rotateY,
    z,
    zIndex,
    filter: blur ? `blur(${blur}px)` : "blur(0px)",
  };
}

export function CaseStudiesCarousel() {
  const { slides, viewAllLabel, viewAllHref } = CASE_STUDIES;
  const total = slides.length;
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [shift, setShift] = useState(CARD_WIDTH_DESKTOP * SLIDE_SHIFT_RATIO);

  useEffect(() => {
    const updateShift = () => {
      const vw = window.innerWidth;
      const cardW = Math.min(vw - 40, CARD_WIDTH_DESKTOP);
      setShift(cardW * SLIDE_SHIFT_RATIO);
    };

    updateShift();
    window.addEventListener("resize", updateShift, { passive: true });
    return () => window.removeEventListener("resize", updateShift);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % total) + total) % total);
    },
    [total]
  );

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  const transition = prefersReducedMotion
    ? { duration: 0.2 }
    : { duration: 0.75, ease: premiumEase };

  return (
    <>
      <div
        className="banking-case-stage"
        aria-roledescription="carousel"
        aria-label="Case study slides"
      >
        {slides.map((slide, index) => {
          const offset = getWrappedOffset(index, activeIndex, total);
          if (Math.abs(offset) > 2) return null;

          const motionProps = getSlideMotion(
            offset,
            shift,
            Boolean(prefersReducedMotion)
          );

          return (
            <motion.div
              key={slide.id}
              className={cn(
                "banking-case-slide",
                offset !== 0 && "banking-case-slide--interactive"
              )}
              role="group"
              aria-roledescription="slide"
              aria-hidden={offset !== 0}
              aria-label={`${slide.brand.name}: ${slide.title}`}
              initial={false}
              animate={motionProps}
              transition={transition}
              style={{
                zIndex: motionProps.zIndex,
                transformPerspective: 1400,
              }}
              onClick={() => {
                if (offset !== 0) goTo(index);
              }}
            >
              <CaseStudyCard slide={slide} isActive={offset === 0} />
            </motion.div>
          );
        })}
      </div>

      <div className="banking-case-controls">
        <div className="banking-case-controls-nav">
          <button
            type="button"
            className="banking-case-nav-btn"
            onClick={goPrev}
            aria-label="Previous case study"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
          </button>

          <div
            className="banking-case-dots"
            role="tablist"
            aria-label="Slide pagination"
          >
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Go to slide ${index + 1}`}
                className={cn(
                  "banking-case-dot",
                  index === activeIndex && "banking-case-dot--active"
                )}
                onClick={() => goTo(index)}
              />
            ))}
          </div>

          <button
            type="button"
            className="banking-case-nav-btn"
            onClick={goNext}
            aria-label="Next case study"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>

        <LearnMoreLink
          href={viewAllHref}
          label={viewAllLabel}
          className="banking-case-view-all-link"
        />
      </div>
    </>
  );
}
