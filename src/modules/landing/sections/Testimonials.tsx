"use client";

import { MotionSection } from "@/components/ui/MotionSection";
import { testimonials } from "../constants/landing.constants";

export function Testimonials() {
  return (
    <MotionSection id="reviews" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-aurix-blue">Trusted early</p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Built around better decisions.</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-white/50">
          Subtle enough for sleep, accurate enough for training, polished enough for every day.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.author} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7">
            <p className="text-base leading-8 text-white/70">"{testimonial.quote}"</p>
            <div className="mt-8 border-t border-white/[0.08] pt-5">
              <p className="font-bold text-white">{testimonial.author}</p>
              <p className="mt-1 text-sm text-white/45">{testimonial.role}</p>
            </div>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}
