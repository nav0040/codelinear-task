# CodeLinear — N7 Banking Landing

A single-page **fintech marketing landing** for **N7 / CB7 banking** products. The UI is built as a long-form scroll experience with a cinematic preloader, hero with glass UI cards, feature grids, product showcases, insights, case studies, and a multi-column footer.

## About this project

This repository implements a **responsive banking landing page** focused on:

- **Core & digital banking** product positioning (CB7, N7, open banking, loan systems)
- **Rich visuals** — hero portrait, balance/activity cards, laptop/phone mockups, KYC dashboard
- **Motion & polish** — Framer Motion section reveals, marquee, optional cinematic preloader
- **Design fidelity** — section-scoped CSS aligned to a dark fintech aesthetic (`#020617` base, cyan accents)

The app is intentionally **one route** (`/`) so layout, copy, and assets stay easy to reason about. Content and image paths live in `constants/`; presentation lives in `components/` and `styles/`.

## Tech stack

| Layer | Choice |
|--------|--------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS 4 + dedicated section CSS files |
| Motion | Framer Motion |
| UI primitives | Radix Slot, CVA, `clsx` / `tailwind-merge` |
| Charts | Recharts (where used in showcase sections) |

## Getting started

### Prerequisites

- **Node.js 20+** (LTS recommended)
- **npm** (comes with Node)

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

If the dev server behaves oddly after large changes, use a clean cache:

```bash
npm run dev:clean
```

### Production build

```bash
npm run build
npm run start
```

`npm run start` serves the production build (default port **3000**).

### Lint

```bash
npm run lint
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server |
| `npm run dev:clean` | Remove `.next` and start dev server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production server |
| `npm run lint` | Run ESLint |

## Architecture — Atomic Design

The codebase follows **[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)**: small, reusable pieces compose into larger UI blocks, which compose into page sections, which compose into the full page template.

```
┌─────────────────────────────────────────────────────────────┐
│  app/page.tsx                                               │
│    └── templates/BankingLandingTemplate                     │
│          └── organisms/ (sections: Hero, Features, …)     │
│                └── molecules/ (cards, columns, blocks)    │
│                      └── atoms/ (buttons, icons, links)     │
└─────────────────────────────────────────────────────────────┘
```

### Layers

| Layer | Folder | Responsibility | Examples |
|-------|--------|----------------|----------|
| **Atoms** | `components/atoms/` | Smallest UI units; no business layout | `BankingPrimaryButton`, `FeatureIcon`, `FooterLinkArrow`, `GlassPanel` |
| **Molecules** | `components/molecules/` | Combinations of atoms with a single purpose | `FeatureBlock`, `TrustedByLogos`, `InsightCard`, `FooterLinksColumn` |
| **Organisms** | `components/organisms/` | Full sections or major section parts | `BankingHeroSection`, `BankingFeaturesSection`, `BankingFooter`, `HeroVisual` |
| **Templates** | `components/templates/` | Page-level layout; stacks organisms in order | `BankingLandingTemplate` |
| **Pages** | `app/` | Next.js routes; wire providers + template | `app/page.tsx` → `/` |

**Supporting folders** (not atomic tiers, but part of the architecture):

- `components/animations/` — motion primitives, variants, `MotionProvider`
- `components/ui/` — shared shadcn-style primitives (e.g. `Button`, `MagneticButton`)
- `constants/` — copy, nav, footer, features, asset URLs
- `styles/` — per-section CSS imported from `app/globals.css`
- `hooks/` — shared hooks (e.g. `useMediaQuery`)
- `public/images/` — static images and SVGs

### Data flow

1. **`constants/`** — single source for text, links, and asset paths (`banking.ts`, `banking-footer.ts`, `features.ts`, `assets.ts`, …).
2. **Organisms** — read constants and render section markup; delegate repeated UI to molecules/atoms.
3. **`styles/*.css`** — visual tuning per section (spacing, breakpoints, effects) without bloating components.

### Component folder convention

Each component lives in its own folder:

```
ComponentName/
  ComponentName.tsx          # Implementation
  ComponentName.props.ts     # Props / types (when needed)
  ComponentName.variants.ts  # CVA variants (when used)
  index.ts                   # Public exports
```

Static sections with no props may only include `.tsx` and `index.ts`.

### Page composition

`app/page.tsx` wraps the template with:

- `PreloaderGate` — optional cinematic entry
- `MotionProvider` — shared motion context

`BankingLandingTemplate` orders all major sections: navbar → hero → features → core banking → KYC → CTA → marquee → digital/no-legacy/branchless showcases → paperless CTA → insights → case studies → closing CTA → footer.

## Project structure

```
codelinear/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Home route (/)
│   └── globals.css             # Tailwind + style imports
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   ├── animations/
│   └── ui/
├── constants/                  # Copy & configuration
├── hooks/
├── public/images/              # Static assets
├── styles/                     # Section CSS (banking-hero, banking-footer, …)
└── package.json
```

## Styling approach

- **Tailwind CSS 4** for utilities in components (flex, grid, responsive classes).
- **Section CSS files** in `styles/` for complex layouts and pixel-level section design (imported in `globals.css`).
- **Design tokens** in `styles/tokens.css` and `styles/responsive.css` (shell max-width, gutters).

## Route

| Path | Description |
|------|-------------|
| `/` | N7 banking landing page |

## License

Private project (`"private": true` in `package.json`).
