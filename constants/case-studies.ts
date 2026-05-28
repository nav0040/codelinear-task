import type { BANKING_TRUSTED_LOGOS } from "./banking";
import { ASSETS } from "./assets";

type BrandIcon = (typeof BANKING_TRUSTED_LOGOS)[number]["id"];

export const CASE_STUDY_BRAND_ICON_SRC = ASSETS.caseStudy.brandIcon;

export type CaseStudySlide = {
  id: string;
  category: string;
  title: string;
  brand: {
    name: string;
    icon: BrandIcon;
    iconSrc?: string;
  };
  readMoreHref: string;
};

export const CASE_STUDIES = {
  id: "case-studies",
  title: "Our Case Studies",
  viewAllLabel: "VIEW ALL",
  viewAllHref: "#case-studies",
  slides: [
    {
      id: "case-1",
      category: "GETTING STARTED",
      title: "How we help brand reach out to more people",
      brand: {
        name: "Zoomerr",
        icon: "zoomerr",
        iconSrc: CASE_STUDY_BRAND_ICON_SRC,
      },
      readMoreHref: "#",
    },
    {
      id: "case-2",
      category: "GETTING STARTED",
      title: "How we help brand reach out to more people",
      brand: {
        name: "SmartFinder",
        icon: "smartfinder",
        iconSrc: CASE_STUDY_BRAND_ICON_SRC,
      },
      readMoreHref: "#",
    },
    {
      id: "case-3",
      category: "GETTING STARTED",
      title: "How we help brand reach out to more people",
      brand: {
        name: "ArtVenue",
        icon: "artvenue",
        iconSrc: CASE_STUDY_BRAND_ICON_SRC,
      },
      readMoreHref: "#",
    },
    {
      id: "case-4",
      category: "GETTING STARTED",
      title: "How we help brand reach out to more people",
      brand: {
        name: "kontrastr",
        icon: "kontrastr",
        iconSrc: CASE_STUDY_BRAND_ICON_SRC,
      },
      readMoreHref: "#",
    },
  ] satisfies CaseStudySlide[],
} as const;
