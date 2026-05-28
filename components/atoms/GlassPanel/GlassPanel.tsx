import { cn } from "@/lib/cn";
import type { GlassPanelProps } from "./GlassPanel.props";

const roundedMap = {
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-[24px]",
};

export function GlassPanel({
  className,
  variant = "light",
  rounded = "3xl",
  children,
  ...props
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        variant === "light" && "banking-glass-panel-light",
        variant === "hero" && "banking-hero-glass-card",
        variant !== "hero" && roundedMap[rounded],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
