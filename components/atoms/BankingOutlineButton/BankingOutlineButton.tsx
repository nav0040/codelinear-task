"use client";

import Link from "next/link";
import { Magnetic } from "@/components/animations";
import { cn } from "@/lib/cn";
import type { BankingOutlineButtonProps } from "./BankingOutlineButton.props";

export function BankingOutlineButton({
  href,
  label,
  block = false,
  shape = "pill",
  className,
}: BankingOutlineButtonProps) {
  return (
    <Magnetic
      className={cn(block && "w-full", className)}
      strength={0.2}
      lift={2}
    >
      <Link
        href={href}
        className={cn(
          "banking-btn-outline-cta",
          shape === "rounded" && "banking-btn-outline-cta--rounded",
          block && "banking-btn-outline-cta--block",
          block && "w-full"
        )}
      >
        {label}
      </Link>
    </Magnetic>
  );
}
