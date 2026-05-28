import type { BANKING_FEATURES } from "@/constants/features";

type Feature = (typeof BANKING_FEATURES)[number];

export interface FeatureBlockProps {
  feature: Feature;
  index: number;
  className?: string;
}
