import { FeatureIcon } from "./FeatureIcon";
import type { Feature } from "../types/home.types";

type FeatureCardProps = {
  feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className="group relative min-h-40 overflow-hidden rounded-2xl border border-white/[0.08] bg-aurix-panel p-7 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-aurix-blue/30">
      <div className="absolute inset-0 bg-panel-sheen opacity-70" />
      {feature.featured ? <div className="absolute right-0 top-0 h-40 w-48 bg-radial-blue opacity-80" /> : null}
      <div className="relative z-10 flex h-full flex-col justify-end gap-5">
        <FeatureIcon icon={feature.icon} />
        <div>
          <h3 className="text-base font-bold text-white">{feature.title}</h3>
          <p className="mt-2 max-w-sm text-sm leading-6 text-white/60">{feature.description}</p>
        </div>
      </div>
    </article>
  );
}
