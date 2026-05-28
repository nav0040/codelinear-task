import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import type { CheckBulletProps } from "./CheckBullet.props";

export function CheckBullet({ className }: CheckBulletProps) {
  return (
    <span
      className={cn(
        "banking-check-bullet inline-flex shrink-0 items-center justify-center",
        className
      )}
      aria-hidden
    >
      <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
    </span>
  );
}
