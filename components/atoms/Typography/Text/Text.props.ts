import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { textVariants } from "./Text.variants";

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}
