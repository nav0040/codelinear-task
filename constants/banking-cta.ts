export const BANKING_CTA = {
  id: "cta",
  watermark: "N7",
  headlineLines: [
    "Take the full advantage of",
    "going paper-less now.",
  ] as const,
  bodyLines: [
    "N7 helps your financial institution improve the client experience,",
    "automate and optimize procedures, simplify banking operations",
  ] as const,
  primaryCta: "REQUEST DEMO",
  secondaryCta: "CONTACT US",
  primaryCtaHref: "#",
  secondaryCtaHref: "#contact",
} as const;

export const BANKING_PAPERLESS_CTA = {
  ...BANKING_CTA,
  id: "paperless-cta",
} as const;
