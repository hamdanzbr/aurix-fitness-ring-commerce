import type { Feature } from "../types/home.types";

type FeatureIconProps = {
  icon: Feature["icon"];
};

export function FeatureIcon({ icon }: FeatureIconProps) {
  const common = "h-5 w-5 text-aurix-blue";

  if (icon === "pulse") {
    return (
      <svg className={common} aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path d="M3 12h4l2.2-5 4 10 2.6-5H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "drop") {
    return (
      <svg className={common} aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path d="M12 3.5s5 5.3 5 10a5 5 0 0 1-10 0c0-4.7 5-10 5-10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "phone") {
    return (
      <svg className={common} aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 17h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className={common} aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M20 14.5A7.8 7.8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
