"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { RadioGroup } from "@/components/ui/radio-group";

import {
  Banknote,
  CreditCard,
  Wallet,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

const paymentMethods = [
  {
    id: "cod",
    title: "Cash on Delivery",
    description:
      "Pay when your order arrives at your doorstep.",
    icon: Banknote,
    disabled: false,
  },
  {
    id: "card",
    title: "Credit / Debit Card",
    description:
      "Visa, Mastercard, American Express",
    icon: CreditCard,
    disabled: true,
  },
  {
    id: "stripe",
    title: "Stripe",
    description:
      "Fast and secure online payments",
    icon: Wallet,
    disabled: true,
  },
];

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] =
    useState("cod");

  return (
    <div className="space-y-5">
      <SectionTitle
        step="03"
        title="Payment Method"
      />

      <RadioGroup
        value={selectedMethod}
        onValueChange={setSelectedMethod}
        className="space-y-4"
      >
        {paymentMethods.map((method) => {
          const Icon = method.icon;

          const isSelected =
            selectedMethod === method.id;

          return (
            <Card
              key={method.id}
              onClick={() => {
                if (!method.disabled) {
                  setSelectedMethod(method.id);
                }
              }}
              className={`
                rounded-2xl
                border
                p-5
                transition-all
                duration-300
                ${
                  method.disabled
                    ? "cursor-not-allowed opacity-60"
                    : "cursor-pointer"
                }
                ${
                  isSelected
                    ? "border-[#1C78FA]"
                    : "border-[#151827]"
                }
              `}
            >
              <div className="flex items-center gap-4">
                {/* Radio */}
                <div
                  className={`
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    border
                    ${
                      isSelected
                        ? "border-[#1C78FA]"
                        : "border-zinc-600"
                    }
                  `}
                >
                  {isSelected && (
                    <div
                      className="
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-[#1C78FA]
                      "
                    />
                  )}
                </div>

                {/* Icon */}
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#131829]
                  "
                >
                  <Icon
                    size={18}
                    className="text-[#60A5FA]"
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">
                      {method.title}
                    </h3>

                    {method.disabled && (
                      <Badge
                        className="
                          border
                          border-[#2B344E]
                          bg-[#131829]
                          text-[#60A5FA]
                        "
                      >
                        Soon
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-zinc-500">
                    {method.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default PaymentMethods;