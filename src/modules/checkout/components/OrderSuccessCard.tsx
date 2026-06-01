"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import {
  CheckCircle2,
  ArrowRight,
  PackageCheck,
} from "lucide-react";

const OrderSuccessCard = () => {
  return (
    <Card
      className="
        rounded-3xl
        border
        border-[#151827]
        ring-0
        p-6
        overflow-hidden
        relative
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_50%)]
          pointer-events-none
        "
      />

      {/* Icon */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1C78FA]/10"
      >
        <CheckCircle2
          size={42}
          className="text-[#60A5FA]"
        />
      </motion.div>

      {/* Content */}
      <div className="mt-5 text-center">
        <h2 className="text-2xl font-bold">
          Ready to Complete
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          Your order will be processed instantly
          after checkout.
        </p>
      </div>

      {/* Order Info */}
      <div
        className="
          mt-6
          rounded-2xl
          border
          border-[#1A1D2E]
          bg-[#131829]
          p-4
        "
      >
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-500">
            Order Number
          </span>

          <span className="font-semibold">
            AUR-2025-8472
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-zinc-500">
            Estimated Delivery
          </span>

          <span className="font-semibold">
            Jan 20 - Jan 22
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-zinc-500">
            Status
          </span>

          <Badge
            className="
              border
              border-[#1C78FA]/20
              bg-[#1C78FA]/10
              text-[#60A5FA]
            "
          >
            Pending Confirmation
          </Badge>
        </div>
      </div>

      {/* Feature */}
      <div
        className="
          mt-5
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-[#151827]
          bg-[#131829]
          p-4
        "
      >
        <PackageCheck
          size={18}
          className="text-[#60A5FA]"
        />

        <div>
          <h4 className="font-medium">
            Free Express Shipping
          </h4>

          <p className="text-xs text-zinc-500">
            Included with every Aurix purchase.
          </p>
        </div>
      </div>

      {/* CTA */}
      <Button
        className="
          mt-6
          h-12
          w-full
          rounded-full
          bg-[#1C78FA]
          hover:bg-[#1C78FA]/90
        "
      >
        Review Order

        <ArrowRight size={16} />
      </Button>
    </Card>
  );
};

export default OrderSuccessCard;