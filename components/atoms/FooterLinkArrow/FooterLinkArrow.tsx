import Image from "next/image";
import { ASSETS } from "@/constants/assets";

export function FooterLinkArrow() {
  const { src, alt, width, height } = ASSETS.banking.footerArrow;

  return (
    <span className="banking-footer-link-arrow" aria-hidden>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="banking-footer-link-arrow-icon"
        draggable={false}
      />
    </span>
  );
}
