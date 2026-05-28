import Image from "next/image";
import type { InsightVectorGridProps } from "./InsightVectorGrid.props";
import { ASSETS } from "@/constants/assets";
import { cn } from "@/lib/cn";

export function InsightVectorGrid({ className }: InsightVectorGridProps) {
  const { src, width, height } = ASSETS.banking.insightSparkGrid;

  return (
    <div className={cn("banking-insights-vector-panel", className)} aria-hidden>
      {Array.from({ length: 4 }).map((_, index) => (
        <Image
          key={index}
          src={src}
          alt=""
          width={width}
          height={height}
          className="banking-insights-vector-icon"
          sizes="(max-width: 640px) 80px, 108px"
          draggable={false}
        />
      ))}
    </div>
  );
}
