"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { floatRotate, TiltLayer } from "@/components/animations";
import { HeroActivityFilterTabs } from "@/components/molecules/HeroActivityFilterTabs";
import { BANKING_ACTIVITY } from "@/constants";

export function ActivityGlassCard() {
  const { title, payee, category, date, amount } = BANKING_ACTIVITY;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="hero-activity-float"
      variants={prefersReducedMotion ? undefined : floatRotate(4)}
      initial="initial"
      animate="animate"
      style={{ animationDelay: "0.6s" }}
    >
      <TiltLayer className="hero-activity-tilt" intensity={6}>
        <div className="hero-activity-shell">
          <div className="hero-activity-panel">
            <h3 className="hero-activity-panel__title">{title}</h3>
            <HeroActivityFilterTabs />

            <div className="hero-activity-panel__transaction">
              <div className="hero-activity-panel__icon" aria-hidden>
                <ArrowUpRight
                  className="hero-activity-panel__icon-arrow"
                  strokeWidth={2.25}
                />
              </div>
              <div className="hero-activity-panel__detail">
                <p className="hero-activity-panel__payee">
                  <span className="hero-activity-panel__payee-prefix">To </span>
                  <span className="hero-activity-panel__payee-name">{payee}</span>
                  <span className="hero-activity-panel__payee-category">
                    {" "}
                    • {category}
                  </span>
                </p>
                <p className="hero-activity-panel__date">{date}</p>
              </div>
              <p className="hero-activity-panel__amount">{amount}</p>
            </div>

            <div className="hero-activity-panel__bottom-line" aria-hidden />
          </div>
        </div>
      </TiltLayer>
    </motion.div>
  );
}
