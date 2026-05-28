import type { BrandLogoIconProps } from "./BrandLogoIcon.props";

export function BrandLogoIcon({ icon, className }: BrandLogoIconProps) {
  const iconClass = className ?? "h-4 w-4 shrink-0 opacity-60";

  switch (icon) {
    case "shells":
      return (
        <svg className={iconClass} viewBox="0 0 20 20" fill="none" aria-hidden>
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="10" cy="10" r="1.5" fill="currentColor" />
        </svg>
      );
    case "smartfinder":
      return (
        <svg className={iconClass} viewBox="0 0 20 20" fill="none" aria-hidden>
          <path
            d="M10 3L16 10L10 17L4 10L10 3Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "zoomerr":
      return (
        <svg className={iconClass} viewBox="0 0 20 20" fill="none" aria-hidden>
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.2" />
          <path
            d="M11 6L8 10H12L9 14"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "artvenue":
      return (
        <svg className={iconClass} viewBox="0 0 20 20" fill="none" aria-hidden>
          <path
            d="M6 16V4L10 10L14 4V16"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "kontrastr":
      return (
        <svg className={iconClass} viewBox="0 0 20 20" fill="none" aria-hidden>
          <path
            d="M10 3C6 3 4 7 4 10C4 14 7 17 10 17"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
