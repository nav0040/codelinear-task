import Image from "next/image";
import { BrandLogoIcon } from "@/components/atoms/BrandLogoIcon";
import type { CaseStudyCardProps } from "./CaseStudyCard.props";
import { BankingOutlineButton } from "@/components/atoms/BankingOutlineButton";
import { ASSETS } from "@/constants/assets";

export function CaseStudyCard({ slide, isActive = true }: CaseStudyCardProps) {
  const { category, title, brand, readMoreHref } = slide;

  return (
    <article
      className="banking-case-card"
      data-active={isActive ? "true" : "false"}
    >
      <div className="banking-case-card-inner">
        <div className="banking-case-visual" aria-hidden>
          <Image
            src={ASSETS.banking.caseStudyVisualPanel.src}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 352px"
            className="banking-case-visual-img"
            draggable={false}
          />
        </div>

        <div className="banking-case-card-body">
          <p className="banking-case-category">{category}</p>
          <h3 className="banking-case-card-title">{title}</h3>

          <div className="banking-case-brand">
            {brand.iconSrc ? (
              <Image
                src={brand.iconSrc}
                alt=""
                width={28}
                height={28}
                className="banking-case-brand-mark"
                aria-hidden
              />
            ) : (
              <span className="banking-case-brand-icon-wrap">
                <BrandLogoIcon
                  icon={brand.icon}
                  className="banking-case-brand-icon"
                />
              </span>
            )}
            <span className="banking-case-brand-name">{brand.name}</span>
          </div>

          <div className="banking-case-card-footer">
            <BankingOutlineButton
              href={readMoreHref}
              label="READ MORE"
              block
              className="banking-case-read-more"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
