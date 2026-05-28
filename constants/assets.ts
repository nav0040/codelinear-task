const IMAGE_BASE = "/images" as const;

export const ASSETS = {
  icons: {
    sparkle: `${IMAGE_BASE}/icon-sparkle.svg`,
    checkBullet: `${IMAGE_BASE}/icon-check-bullet.svg`,
    arrowRight: `${IMAGE_BASE}/icon-arrow-right.svg`,
    featureCoreBanking: `${IMAGE_BASE}/icon-feature-core-banking.svg`,
    featureDigitalBanking: `${IMAGE_BASE}/icon-feature-digital-banking.svg`,
    featureOpenBanking: `${IMAGE_BASE}/icon-feature-open-banking.svg`,
    featureLoanOrigination: `${IMAGE_BASE}/icon-feature-loan-origination.svg`,
    featureLoanManagement: `${IMAGE_BASE}/icon-feature-loan-management.svg`,
  },
  logos: {
    shells: `${IMAGE_BASE}/logo-shells.svg`,
    smartfinder: `${IMAGE_BASE}/logo-smartfinder.svg`,
    zoomerr: `${IMAGE_BASE}/logo-zoomerr.svg`,
    artvenue: `${IMAGE_BASE}/logo-artvenue.svg`,
    kontrastr: `${IMAGE_BASE}/logo-kontrastr.svg`,
    wavesmarathon: `${IMAGE_BASE}/logo-wavesmarathon.svg`,
  },
  marquee: {
    waveGif: `${IMAGE_BASE}/marquee-wave.gif`,
  },
  caseStudy: {
    brandIcon: `${IMAGE_BASE}/zoomerr-brand-icon.png`,
  },
  banking: {
    hero: {
      src: `${IMAGE_BASE}/hero-portrait.png`,
      alt: "Woman smiling while using smartphone with laptop — Photo by Andrea Piacquadio on Pexels",
      width: 363,
      height: 301,
      credit: "Andrea Piacquadio",
    },
    profile: {
      src: `${IMAGE_BASE}/profile-avatar.png`,
      alt: "Toni Kross profile photo",
      width: 26,
      height: 26,
    },
    coreDashboard: {
      src: `${IMAGE_BASE}/core-banking-dashboard.png`,
      alt: "AML Dashboard in laptop frame — Core Banking CB7",
      width: 641,
      height: 562,
    },
    kycDashboard: {
      src: `${IMAGE_BASE}/kyc-dashboard.png`,
      alt: "KYC Dashboard in laptop mockup",
      width: 550,
      height: 462,
    },
    iphoneDigitalBanking: {
      src: `${IMAGE_BASE}/iphone-digital-banking.png`,
      alt: "N7 mobile banking app on iPhone 13 Pro",
      width: 269,
      height: 543,
    },
    iphoneNoLegacy: {
      src: `${IMAGE_BASE}/iphone-no-legacy.png`,
      alt: "Digital banking app on iPhone 13 Pro — March overview",
      width: 269,
      height: 543,
    },
    iphoneBranchlessProfile: {
      src: `${IMAGE_BASE}/iphone-branchless-profile.png`,
      alt: "N7 mobile banking profile screen on iPhone 13 Pro",
      width: 269,
      height: 543,
    },
    sectionVectorDecor: {
      src: `${IMAGE_BASE}/section-vector-decor.png`,
      alt: "",
      width: 480,
      height: 1246,
    },
    insightSparkGrid: {
      src: `${IMAGE_BASE}/insight-spark-grid.png`,
      alt: "",
      width: 98,
      height: 98,
    },
    caseStudyVisualPanel: {
      src: `${IMAGE_BASE}/case-study-visual-panel.png`,
      alt: "",
      width: 884,
      height: 790,
    },
    footerArrow: {
      src: `${IMAGE_BASE}/icon-arrow-right.svg`,
      alt: "",
      width: 14,
      height: 15,
    },
  },
} as const;

export type BankingImageAsset =
  (typeof ASSETS.banking)[keyof typeof ASSETS.banking];
