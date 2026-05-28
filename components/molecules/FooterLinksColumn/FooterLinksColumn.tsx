import { FooterLinkItem } from "@/components/atoms/FooterLinkItem";
import type { FooterLinksColumnProps } from "./FooterLinksColumn.props";

export function FooterLinksColumn({ title, links }: FooterLinksColumnProps) {
  return (
    <div className="banking-footer-col banking-footer-col--links">
      <h3 className="banking-footer-col-title">{title}</h3>
      <ul className="banking-footer-links">
        {links.map((link) => (
          <FooterLinkItem
            key={link.label}
            label={link.label}
            href={link.href}
            lines={link.lines}
            external={link.external}
          />
        ))}
      </ul>
    </div>
  );
}
