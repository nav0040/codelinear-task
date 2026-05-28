import Image from "next/image";
import type { SectionVectorDecorProps } from "./SectionVectorDecor.props";
import type { BankingImageAsset } from "@/constants/assets";

export function SectionVectorDecor({
  image,
  wrapperClassName,
  imageClassName,
  sizes = "(max-width: 1024px) 42vw, 32vw",
}: SectionVectorDecorProps) {
  const { src, alt, width, height } = image;

  return (
    <div className={wrapperClassName} aria-hidden>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imageClassName}
        sizes={sizes}
      />
    </div>
  );
}
