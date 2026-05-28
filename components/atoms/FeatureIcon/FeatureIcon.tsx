import Image from "next/image";
import { ASSETS } from "@/constants/assets";
import { cn } from "@/lib/cn";
import type { FeatureIconProps } from "./FeatureIcon.props";

const FEATURE_ICON_SRC = {
  "core-banking": ASSETS.icons.featureCoreBanking,
  "digital-banking": ASSETS.icons.featureDigitalBanking,
  "open-banking": ASSETS.icons.featureOpenBanking,
  "loan-origination": ASSETS.icons.featureLoanOrigination,
  "loan-management": ASSETS.icons.featureLoanManagement,
} as const;

export function FeatureIcon({ icon, className }: FeatureIconProps) {
  const iconClass = cn(
    "banking-feature-icon-wrap inline-flex h-9 w-9 sm:h-10 sm:w-10",
    className
  );
  const src = FEATURE_ICON_SRC[icon as keyof typeof FEATURE_ICON_SRC];

  if (!src) return null;

  return (
    <span className={iconClass} aria-hidden>
      <Image
        src={src}
        alt=""
        width={42}
        height={43}
        className="h-full w-full"
        priority={false}
      />
    </span>
  );
}
