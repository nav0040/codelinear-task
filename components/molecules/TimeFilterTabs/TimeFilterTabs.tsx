"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { BANKING_TIME_FILTERS } from "@/constants";

type TimeFilterTabsProps = {
  variant?: "default" | "hero";
  className?: string;
};

export function TimeFilterTabs({
  variant = "default",
  className,
}: TimeFilterTabsProps) {
  const [active, setActive] = useState("This Week");
  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        isHero ? "banking-hero-filter-tabs" : "flex flex-wrap gap-1.5",
        className
      )}
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
            className={
              isHero
                ? cn(
                    "banking-hero-filter-tab",
                    isActive
                      ? "banking-hero-filter-tab--active"
                      : "banking-hero-filter-tab--inactive"
                  )
                : cn(
                    "rounded-full px-3 py-1.5 text-[11px] font-medium transition-all",
                    isActive
                      ? "bg-[#001b44] text-white shadow-sm"
                      : "bg-white text-[#1e293b] shadow-sm ring-1 ring-[#e2e8f0]/80"
                  )
            }
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
