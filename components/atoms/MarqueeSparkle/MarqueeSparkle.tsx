import Image from "next/image";
import { ASSETS } from "@/constants/assets";

export function MarqueeSparkle() {
  return (
    <Image
      src={ASSETS.icons.sparkle}
      alt=""
      width={24}
      height={24}
      className="banking-marquee-sparkle-icon"
      aria-hidden
    />
  );
}
