import { cn } from "@/lib/cn";
import type { TextProps } from "./Text.props";
import { textVariants } from "./Text.variants";

export function Text({
  as: Component = "p",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component className={cn(textVariants({ variant }), className)} {...props}>
      {children}
    </Component>
  );
}
