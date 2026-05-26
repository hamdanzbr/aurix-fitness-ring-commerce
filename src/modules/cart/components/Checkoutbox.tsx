"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import {
  ArrowLeft,
  CheckCircle2,
  Lock,
  Ticket,
} from "lucide-react";

const Checkoutbox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45 }}
      className="h-fit w-full"
    >
      <Card
        className="
          rounded-3xl
          ring-[#1A1D2E]
          bg-[#111224]
          p-6
          shadow-[0_0_50px_rgba(59,130,246,0.05)]
        "
      >
        {/* Header */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3B82F6]">
            Summary
          </p>

          <h2 className="mt-3 text-xl font-bold tracking-tight">
            Order Summary
          </h2>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-5 border-y border-[#1A1D2E] py-6">
          <div className="flex items-center justify-between text-zinc-400">
            <span>Subtotal (2 items)</span>

            <span className="font-medium text-white">
              $698
            </span>
          </div>

          <div className="flex items-center justify-between text-zinc-400">
            <span>Express Shipping</span>

            <span className="font-semibold text-emerald-400">
              FREE
            </span>
          </div>

          <div className="flex items-center justify-between text-zinc-400">
            <span>Promo Discount</span>

            <span className="font-semibold text-[#3B82F6]">
              −$80
            </span>
          </div>

          <div className="flex items-center justify-between text-zinc-400">
            <span>Estimated Tax (CA)</span>

            <span className="font-medium text-white">
              $51.30
            </span>
          </div>
        </div>

        {/* Promo */}
        <div className="">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Promo Code
          </h3>

          <div className="mt-4 flex gap-3">
            <div className="relative flex-1">
              <Ticket
                size={16}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-zinc-500
                "
              />

              <Input
                placeholder="Enter code..."
                className="
                  h-14
                  rounded-2xl
                  border-[#1A1D2E]
                  bg-[#0F1121]
                  pl-11
                  text-white
                  placeholder:text-zinc-500
                  focus-visible:ring-0
                  focus-visible:ring-offset-0
                "
              />
            </div>

            <Button
              className="
                h-14
                rounded-2xl
                border
                border-[#2D4F88]
                bg-[#16182B]
                px-6
                hover:bg-[#1C1F35]
              "
            >
              Apply
            </Button>
          </div>

          {/* Applied Coupon */}
          <div
            className="
              mt-4
              flex
              items-center
              gap-2
              rounded-2xl
              border
              border-emerald-500/20
              bg-emerald-500/10
              px-4
              py-3
              text-sm
            "
          >
            <CheckCircle2
              size={16}
              className="text-emerald-400"
            />

            <span className="font-medium text-emerald-400">
              AURIX20 applied — $80 discount active
            </span>
          </div>
        </div>

        {/* Total */}
        <div className=" border-t border-[#1A1D2E] pt-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Order Total
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight">
                $669.30
              </h1>

              <p className="mt-2 text-sm text-zinc-500">
                Taxes & shipping included
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm font-semibold text-emerald-400">
                You save $80
              </p>
            </div>
          </div>
        </div>

        {/* Checkout CTA */}
        <div className=" space-y-4">
          <Button
            className="
              h-12
              w-full
              rounded-2xl
              bg-[#3B82F6]
              text-lg
              font-semibold
              transition-all
              duration-300
              hover:bg-[#256DE8]
            "
          >
            <Lock size={18} />

            Proceed to Secure Checkout
          </Button>

          <Button
            variant="ghost"
            className="
              h-12
              w-full
              rounded-2xl
              border
              border-[#2A2D45]
              bg-[#16182B]
              text-zinc-300
              hover:bg-[#1C1F35]
            "
          >
            <ArrowLeft size={16} />

            Continue Shopping
          </Button>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-[#1A1D2E] pt-4">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-zinc-500">
            Accepted Methods
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            {[
              "Visa",
              "Mastercard",
              "Apple Pay",
              "Google Pay",
              "AMEX",
            ].map((item) => (
              <div
                key={item}
                className="
                  rounded-xl
                  border
                  border-[#1A1D2E]
                  bg-[#0F1121]
                  px-4
                  py-2
                  text-sm
                  text-zinc-400
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Checkoutbox;