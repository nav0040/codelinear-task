import Link from "next/link";
import type { FooterLinkItemProps } from "./FooterLinkItem.props";
import { FooterLinkArrow } from "@/components/atoms/FooterLinkArrow";

export function FooterLinkItem({
  label,
  href,
  external,
  lines,
}: FooterLinkItemProps) {
  return (
    <li>
      <Link
        href={href}
        className="banking-footer-link"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {lines ? (
          <span className="banking-footer-link-text">
            <span className="banking-footer-link-label">{lines[0]}</span>
            <span className="banking-footer-link-label banking-footer-link-label--continued">
              {lines[1]}
            </span>
          </span>
        ) : (
          <span className="banking-footer-link-label">{label}</span>
        )}
        <FooterLinkArrow />
      </Link>
    </li>
  );
}
