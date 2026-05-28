import { ASSETS } from "./assets";

export const DIGITAL_BANKING_SHOWCASE = {
  id: "digital-banking-out-of-box",
  watermark: "N7",
  headlineLines: ["Digital banking", "out-of-the-box"] as const,
  subheadlineLines: [
    "N7 helps your financial institution improve the client",
    "experience, automate and optimize procedures",
  ] as const,
  primaryCta: "REQUEST DEMO",
  learnMoreHref: "#solutions",
  featureTitleLines: [
    "Fully compliant with regulatory",
    "requirement",
  ] as const,
  featureBody:
    "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.",
  checklist: [
    ["Pre-integrated Security System"],
    ["Fully Compliant With Regulatory", "Requirement"],
    ["Digitally Connected Core"],
  ] as const,
  primaryCtaHref: "#",
} as const;

export const DIGITAL_BANKING_IPHONE = ASSETS.banking.iphoneDigitalBanking;
