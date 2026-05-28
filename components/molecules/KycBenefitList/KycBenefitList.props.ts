import type { KycBenefitLines } from "@/constants/kyc-benefits";

export interface BenefitColumnProps {
  items: KycBenefitLines;
  columnIndex: number;
}
