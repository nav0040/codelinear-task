import { useId } from "react";
import { DIGITAL_BANKING_SHOWCASE } from "@/constants/digital-banking-showcase";

const { watermark } = DIGITAL_BANKING_SHOWCASE;

export function DigitalN7Watermark() {
  const uid = useId().replace(/:/g, "");
  const strokeGradId = `digital-n7-stroke-${uid}`;
  const fadeGradId = `digital-n7-fade-${uid}`;
  const maskId = `digital-n7-mask-${uid}`;

  return (
    <div className="banking-digital-n7" aria-hidden>
      <svg
        className="banking-digital-n7-svg"
        viewBox="0 0 880 480"
        preserveAspectRatio="xMidYMin meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={strokeGradId}
            x1="6%"
            y1="4%"
            x2="94%"
            y2="96%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0%" stopColor="#A0C4FF" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#60A5FA" stopOpacity="0.58" />
            <stop offset="100%" stopColor="#2B67F6" stopOpacity="0.34" />
          </linearGradient>
          <linearGradient id={fadeGradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="38%" stopColor="white" stopOpacity="0.92" />
            <stop offset="72%" stopColor="white" stopOpacity="0.48" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id={maskId}>
            <rect width="100%" height="100%" fill={`url(#${fadeGradId})`} />
          </mask>
        </defs>
        <text
          x="440"
          y="248"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="none"
          stroke={`url(#${strokeGradId})`}
          strokeWidth="1.25"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          fontFamily="var(--font-geist-sans), Geist, ui-sans-serif, system-ui, sans-serif"
          fontSize="400"
          fontWeight="700"
          letterSpacing="0.02em"
          mask={`url(#${maskId})`}
        >
          {watermark}
        </text>
      </svg>
    </div>
  );
}
