import type { BANKING_FEATURES } from "@/constants/features";

type FeatureIconId = (typeof BANKING_FEATURES)[number]["icon"];

export interface FeatureIconProps {
  icon: FeatureIconId;
  className?: string;
}
