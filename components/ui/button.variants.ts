import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030308] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        bankingGradient:
          "banking-btn-gradient rounded-xl px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white",
        bankingOutline:
          "banking-btn-outline rounded-[10px] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white",
        bankingNav:
          "banking-btn-nav rounded-full px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white",
      },
      size: {
        default: "h-auto min-h-[48px]",
        sm: "h-10 px-4 text-xs",
        nav: "h-9 min-h-0",
      },
    },
    defaultVariants: {
      variant: "bankingGradient",
      size: "default",
    },
  }
);
