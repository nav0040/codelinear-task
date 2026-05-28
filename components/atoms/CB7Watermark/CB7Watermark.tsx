import { CORE_BANKING_SHOWCASE } from "@/constants/core-banking";

export function CB7Watermark() {
  return (
    <div className="banking-core-watermark" aria-hidden>
      <span className="banking-core-watermark-text">
        {CORE_BANKING_SHOWCASE.watermark}
      </span>
    </div>
  );
}
