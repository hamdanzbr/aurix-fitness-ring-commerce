"use client";

import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  Package,
  Truck,
} from "lucide-react";

type OrderTrackingProps = {
  status: "pending" | "confirmed" | "shipped" | "delivered";
};

const orderSteps = [
  {
    label: "Ordered",
    icon: Package,
  },
  {
    label: "Confirmed",
    icon: CheckCircle2,
  },
  {
    label: "Shipped",
    icon: Truck,
  },
  {
    label: "Delivered",
    icon: CheckCircle2,
  },
];

const statusMap = {
  pending: 0,
  confirmed: 1,
  shipped: 2,
  delivered: 3,
};

const OrderTracking = ({
  status,
}: OrderTrackingProps) => {
  const currentStep =
    statusMap[status] ?? 0;

  return (
    <div className="border-t border-[#1A1D2E] p-6">
      <div
        className="
          grid
          grid-cols-2
          gap-6
          md:grid-cols-4
        "
      >
        {orderSteps.map((step, index) => {
          const Icon = step.icon;

          const isCompleted =
            index <= currentStep;

          const isCurrent =
            index === currentStep;

          return (
            <div
              key={index}
              className="
                relative
                flex
                flex-col
                items-center
                text-center
              "
            >
              {index !==
                orderSteps.length - 1 && (
                <div
                  className={cn(
                    `
                    absolute
                    left-[60%]
                    top-5
                    hidden
                    h-[2px]
                    w-full
                    md:block
                  `,
                    index < currentStep
                      ? "bg-[#1C78FA]"
                      : "bg-[#2A2D45]"
                  )}
                />
              )}

              <div
                className={cn(
                  `
                  relative
                  z-10
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                `,
                  isCompleted
                    ? "bg-[#1C78FA]"
                    : "bg-[#1A1D2E] text-zinc-500"
                )}
              >
                <Icon size={18} />
              </div>

              <h1
                className={cn(
                  "mt-3 font-medium",
                  isCompleted
                    ? "text-white"
                    : "text-zinc-500"
                )}
              >
                {step.label}
              </h1>

              <p className="mt-1 text-xs text-zinc-500">
                {isCompleted
                  ? isCurrent
                    ? "Current"
                    : "Completed"
                  : "Pending"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTracking;