"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { LearnMoreLinkProps } from "./LearnMoreLink.props";

export function LearnMoreLink({
  href,
  label = "LEARN MORE",
  className,
}: LearnMoreLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "banking-learn-more group/link inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em]",
        className
      )}
    >
      <span>{label}</span>
      <motion.span
        className="inline-flex"
        initial={false}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
      </motion.span>
    </Link>
  );
}
