import { ASSETS } from "./assets";

export const BANKING_HERO_COPY = {
  headline: ["The new foundation", "of modern banking"],
  subheadline:
    "We drive innovation and growth, provide seamless customer experience and operational excellence",
  primaryCta: "REQUEST DEMO",
  secondaryCta: "CONTACT US",
  primaryCtaHref: "#",
  trustedByLabel: "Trusted By:",
} as const;

export const BANKING_NAV_ITEMS = [
  { label: "SOLUTIONS", href: "#solutions", hasDropdown: true },
  { label: "RESOURCES", href: "#insights", hasDropdown: true },
  { label: "ABOUT US", href: "#about", hasDropdown: false },
] as const;

export const BANKING_TIME_FILTERS = [
  "This Day",
  "This Week",
  "This Month",
  "6 Month",
] as const;

export const BANKING_PROFILE = {
  name: "Toni Kross",
  greeting: "Good Morning",
  balanceLabel: "Total balance",
  balanceAmount: "$42,295.00",
  balanceCurrency: "USD",
  avatar: ASSETS.banking.profile,
} as const;

export const BANKING_ACTIVITY = {
  title: "Recent activity",
  payee: "Jin",
  category: "Work",
  date: "12 jun 2022",
  amount: "-$59",
} as const;

export const BANKING_BALANCE_ACTIONS = [
  { label: "Fund Transfer", icon: "wallet" as const },
  { label: "Add Money", icon: "circle-dollar" as const },
  { label: "More", icon: "layout-grid" as const },
] as const;

export const BANKING_TRUSTED_LOGOS = [
  { id: "shells", name: "SHELLS", svgSrc: ASSETS.logos.shells },
  { id: "smartfinder", name: "SmartFinder", svgSrc: ASSETS.logos.smartfinder },
  { id: "zoomerr", name: "Zoomerr", svgSrc: ASSETS.logos.zoomerr },
  { id: "artvenue", name: "ArtVenue", svgSrc: ASSETS.logos.artvenue },
  { id: "kontrastr", name: "kontrastr", svgSrc: ASSETS.logos.kontrastr },
  {
    id: "wavesmarathon",
    name: "WAVESMARATHON",
    svgSrc: ASSETS.logos.wavesmarathon,
    svgWidth: 44,
  },
] as const;

export const BANKING_HERO_IMAGE = ASSETS.banking.hero;
