"use client";

import { Card } from "@/components/ui/card";
import { RadioGroup } from "@/components/ui/radio-group";

import { Package, Zap } from "lucide-react";

import SectionTitle from "./SectionTitle";
import { useFormContext } from "react-hook-form";
import { CreateOrderFormValues } from "../types/checkout.types";

const deliveryOptions = [
  {
    id: "standard",
    title: "Standard Delivery",
    description: "5-7 Business Days • Estimated Jan 20-22",
    price: "Free",
    icon: Package,
  },
  {
    id: "express",
    title: "Express Delivery",
    description: "2-3 Business Days • Estimated Jan 15-17",
    price: "$12.00",
    icon: Zap,
  },
];

const DeliveryMethods = () => {
  const { watch, setValue } = useFormContext<CreateOrderFormValues>();
  const selectedMethod = watch("deliveryMethod");
  return (
    <div className="space-y-5">
      <SectionTitle step="02" title="Delivery Method" />

      <RadioGroup
        value={selectedMethod}
        onValueChange={(value) =>
          setValue("deliveryMethod", value as "standard" | "express", {
            shouldValidate: true,
          })
        }
        className="space-y-4"
      >
        {deliveryOptions.map((option) => {
          const Icon = option.icon;

          const isSelected = selectedMethod === option.id;

          return (
            <Card
              key={option.id}
              onClick={() =>
                setValue(
                  "deliveryMethod",
                  option.id as "standard" | "express",
                  {
                    shouldValidate: true,
                  },
                )
              }
              className={`
                cursor-pointer
                rounded-2xl
                border
                p-5
                transition-all
                duration-300
                ${isSelected ? "border-[#1C78FA]" : "border-[#151827]"}
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
                    ${isSelected ? "border-[#1C78FA]" : "border-zinc-600"}
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
                  <Icon size={18} className="text-[#60A5FA]" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold">{option.title}</h3>

                  <p className="text-sm text-zinc-500">{option.description}</p>
                </div>

                {/* Price */}
                <div className="ml-auto">
                  <h3
                    className={`
                      font-semibold
                      ${
                        option.price === "Free"
                          ? "text-white"
                          : "text-[#60A5FA]"
                      }
                    `}
                  >
                    {option.price}
                  </h3>
                </div>
              </div>
            </Card>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default DeliveryMethods;
