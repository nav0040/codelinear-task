export const BANKING_FOOTER = {
  id: "footer",
  logo: "N7",
  offices: [
    {
      id: "office-london",
      city: "London",
      lines: [
        "Linktia Infosystems Ltd – CB7, 26 Main Road",
        "Sundridge, TN14 6EP, England, United",
        "Kingdom.",
      ],
    },
    {
      id: "office-dubai",
      city: "Dubai",
      lines: [
        "Linktia Infosystems Ltd – CB7, Jumeirah Business,",
        "Center 5 Cluster W, Jumeirah Lakes Towers,",
        "Dubai, United Arab Emirates",
      ],
    },
    {
      id: "office-pune",
      city: "London",
      lines: [
        "Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar,",
        "Suncity Road, Pune, Maharashtra, 411041, India",
      ],
    },
  ] as const,
  columns: [
    {
      id: "solutions",
      title: "Solutions",
      links: [
        { label: "Core Banking CB7", href: "#core-banking" },
        { label: "Digital Banking N7", href: "#digital-banking-out-of-box" },
        { label: "Open Banking", href: "#" },
        {
          label: "Loan Origination System",
          href: "#",
          lines: ["Loan Origination", "System"],
        },
        {
          label: "Loan Management System",
          href: "#",
          lines: ["Loan Management", "System"],
        },
        {
          label: "Digital Transformation",
          href: "#",
          lines: ["Digital", "Transformation"],
        },
      ],
    },
    {
      id: "n7-banking",
      title: "N7 Banking",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Solutions", href: "#solutions" },
        { label: "Contact", href: "#contact" },
        { label: "Company", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Insights", href: "#insights" },
        { label: "Core Team", href: "#" },
        { label: "Brand Center", href: "#" },
      ],
    },
    {
      id: "socials",
      title: "Our Socials",
      links: [
        { label: "LinkedIn", href: "https://linkedin.com", external: true },
        { label: "X", href: "https://x.com", external: true },
      ],
    },
  ] as const,
  copyright:
    "Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]",
} as const;
