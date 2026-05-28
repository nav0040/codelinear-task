import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { headingVariants } from "./Heading.variants";

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
