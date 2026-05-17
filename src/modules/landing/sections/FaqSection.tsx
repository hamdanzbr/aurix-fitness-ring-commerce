"use client";

import { MotionSection } from "@/components/ui/MotionSection";
import { faqs } from "../constants/home.constants";

export function FaqSection() {
  return (
    <MotionSection className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
      <h2 className="text-center text-3xl font-black text-white sm:text-4xl">Questions before you slip it on?</h2>
      <div className="mt-10 divide-y divide-white/[0.08] rounded-2xl border border-white/[0.08] bg-white/[0.03]">
        {faqs.map((item) => (
          <details key={item.question} className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-bold text-white">
              {item.question}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.12] text-white/60 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">{item.answer}</p>
          </details>
        ))}
      </div>
    </MotionSection>
  );
}
