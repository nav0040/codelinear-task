"use client";

import { Magnetic } from "@/components/animations";
import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button.props";
import { cn } from "@/lib/cn";

export function MagneticButton({ className, children, ...props }: ButtonProps) {
  return (
    <Magnetic className={cn("inline-block w-full sm:w-auto", className)} strength={0.22} lift={2}>
      <Button className="w-full sm:w-auto" {...props}>
        {children}
      </Button>
    </Magnetic>
  );
}
