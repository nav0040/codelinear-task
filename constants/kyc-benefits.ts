import { ASSETS } from "./assets";

export const KYC_DASHBOARD_IMAGE = ASSETS.banking.kycDashboard;

export const KYC_BENEFITS_SECTION = {
  id: "kyc-benefits",
  headlineLines: [
    "Run a more efficient, flexible, and",
    "digitally connected core banking system",
  ] as const,
  benefitsLabel: "What you will get:",
} as const;

export const KYC_BENEFITS = {
  left: [
    ["Customer-On Boarding"],
    ["Managing deposits and withdrawals"],
    ["Transaction management"],
    ["Interest Calculation"],
    [
      "Payments processing (cash,",
      "cheques, mandates, NEFT,",
      "RTGS etc)",
    ],
  ],
  right: [
    ["CRM Activities"],
    ["Configuring New Banking", "Products"],
    ["Loan disbursal and Loan", "management"],
    [
      "Establishing criteria for",
      "minimum balances, interest",
      "rates, number of withdrawals",
      "allowed and so on.",
    ],
  ],
} as const;

export type KycBenefitLines = readonly (readonly string[])[];
