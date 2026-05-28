import { cva } from "class-variance-authority";

export const textVariants = cva("", {
  variants: {
    variant: {
      body: "text-base text-[var(--muted-foreground)]",
      small: "text-sm text-[var(--muted-foreground)]",
      caption: "text-xs text-[var(--muted-foreground)]",
      lead: "text-lg sm:text-xl text-[var(--muted-foreground)]",
      muted: "text-sm text-[var(--muted-foreground)]",
    },
  },
  defaultVariants: { variant: "body" },
});
