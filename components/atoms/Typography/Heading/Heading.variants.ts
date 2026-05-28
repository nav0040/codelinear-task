import { cva } from "class-variance-authority";

export const headingVariants = cva(
  "font-semibold tracking-tight text-[var(--foreground)]",
  {
    variants: {
      level: {
        h1: "text-4xl sm:text-5xl lg:text-6xl",
        h2: "text-3xl sm:text-4xl",
        h3: "text-2xl sm:text-3xl",
        h4: "text-xl sm:text-2xl",
        h5: "text-lg",
        h6: "text-base",
      },
    },
    defaultVariants: { level: "h2" },
  }
);
