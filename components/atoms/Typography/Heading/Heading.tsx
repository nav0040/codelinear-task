import { createElement } from "react";
import { cn } from "@/lib/cn";
import type { HeadingProps } from "./Heading.props";
import { headingVariants } from "./Heading.variants";

export function Heading({
  as,
  level,
  className,
  children,
  ...props
}: HeadingProps) {
  const tag = as ?? level ?? "h2";
  return createElement(
    tag,
    {
      className: cn(headingVariants({ level: tag }), className),
      ...props,
    },
    children
  );
}
