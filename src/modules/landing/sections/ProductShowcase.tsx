"use client";

import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/ui/MotionSection";
import Image from "next/image";

export function ProductShowcase() {
  return (
    <MotionSection id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-aurix-blue">Built for constant wear</p>
        <h2 className="mt-5 max-w-xl text-3xl font-black leading-tight text-white sm:text-5xl">
          Titanium precision with sensors you can trust.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
          Aurix pairs a low-profile ceramic-coated shell with temperature, heart, motion, and recovery sensors tuned for
          quiet all-day capture.
        </p>
        <div className="mt-8 grid max-w-lg grid-cols-3 gap-4 border-y border-white/[0.08] py-6">
          <div>
            <p className="text-2xl font-black">7d</p>
            <p className="mt-1 text-xs text-white/50">Battery</p>
          </div>
          <div>
            <p className="text-2xl font-black">4g</p>
            <p className="mt-1 text-xs text-white/50">Featherlight</p>
          </div>
          <div>
            <p className="text-2xl font-black">100m</p>
            <p className="mt-1 text-xs text-white/50">Waterproof</p>
          </div>
        </div>
        <Button className="mt-8">Reserve yours</Button>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-aurix-panel p-3 shadow-panel">
        <div className="absolute inset-0 bg-radial-blue opacity-60" />
        <Image
          src="/images/aurix-ring-hero.png"
          alt="Aurix ring product finish detail"
          width={1536}
          height={1536}
          priority
          className="relative z-10 aspect-[1.1/1] rounded-xl object-cover"
        />
      </div>
    </MotionSection>
  );
}
