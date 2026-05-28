"use client";

import Link from "next/link";
import { Magnetic } from "@/components/animations";
import { cn } from "@/lib/cn";
import type { BankingPrimaryButtonProps } from "./BankingPrimaryButton.props";

export function BankingPrimaryButton({
  href,
  label,
  className,
}: BankingPrimaryButtonProps) {
  return (
    <Magnetic className={cn("w-full sm:w-auto", className)} strength={0.24} lift={3}>
      <Link href={href} className="banking-btn-primary block w-full sm:w-auto">
        {label}
      </Link>
    </Magnetic>
  );
}
