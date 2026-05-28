import { BankingMarquee } from "@/components/organisms/BankingMarquee";
import { BANKING_MARQUEE } from "@/constants/marquee";

export function BankingMarqueeSection() {
  return (
    <section
      id={BANKING_MARQUEE.id}
      className="banking-marquee-root"
      aria-label="Brand marquee"
    >
      <BankingMarquee />
      <p className="sr-only">
        N7 and CB7 — Say hello to the new way of banking
      </p>
    </section>
  );
}
