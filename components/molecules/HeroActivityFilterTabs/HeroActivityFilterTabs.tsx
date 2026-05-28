"use client";

import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { BANKING_TIME_FILTERS } from "@/constants";

export function HeroActivityFilterTabs() {
  const [active, setActive] = useState("This Week");
  const prefersReducedMotion = useReducedMotion();

  return (
    <LayoutGroup id="hero-activity-filters">
      <div
        className="hero-activity-panel__filters"
        role="tablist"
        aria-label="Activity time range"
      >
        {BANKING_TIME_FILTERS.map((filter) => {
          const isActive = active === filter;
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(filter)}
              className="hero-activity-panel__filter"
            >
              {isActive && !prefersReducedMotion ? (
                <motion.span
                  layoutId="hero-activity-filter-pill"
                  className="hero-activity-panel__filter-glow"
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 34,
                  }}
                />
              ) : null}
              {isActive && prefersReducedMotion ? (
                <span className="hero-activity-panel__filter-glow" aria-hidden />
              ) : null}
              <span
                className={
                  isActive
                    ? "hero-activity-panel__filter-label hero-activity-panel__filter-label--active"
                    : "hero-activity-panel__filter-label hero-activity-panel__filter-label--inactive"
                }
              >
                {filter}
              </span>
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}
