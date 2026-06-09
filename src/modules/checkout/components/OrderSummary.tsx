"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/api/useCart";

import {
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  Headphones,
  Lock,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { CreateOrderFormValues } from "../types/checkout.types";

const OrderSummary = ({ isPending }: { isPending: boolean }) => {
  const router = useRouter();
  const { watch } = useFormContext<CreateOrderFormValues>();
  const { data: cart, isLoading } = useCart();

  useEffect(() => {
    if (!isLoading && (!cart?.items || !cart.items.length)) {
      router.push("/cart");
    }
  }, [cart, isLoading, router]);

  const deliveryMethod = watch("deliveryMethod");

  if (isLoading) {
    return (
      <Card className="rounded-3xl border border-[#151827] ring-0 p-6 shadow-[0_0_40px_rgba(59,130,246,0.04)]">
        <div className="h-[480px] animate-pulse rounded-2xl bg-[#131829]" />
      </Card>
    );
  }

  return (
    <Card
      className="
        rounded-3xl
        border
        border-[#151827]
        ring-0
        p-6
        shadow-[0_0_40px_rgba(59,130,246,0.04)]
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Order Summary</h2>

        <Button
          type="button"
          variant="ghost"
          className="text-[#60A5FA] hover:shadow-lg cursor-pointer"
          onClick={() => router.push("/cart")}
        >
          Edit Cart
        </Button>
      </div>

      {/* Products */}
      <div className="mt-6 space-y-4">
        {cart?.items?.map((item) => (
          <div key={item._id} className="flex gap-4">
            <div
              className="
                h-16
                w-16
                overflow-hidden
                rounded-xl
                bg-[#131829]
              "
            >
              <img
                src={item?.productId?.images?.[0]}
                alt=""
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-medium">{item?.productId?.name}</h3>

              <p className="text-sm text-zinc-500">
                {item?.selectedFinish} • {item?.selectedSize}
              </p>

              <p className="mt-1 text-sm text-zinc-500">Qty {item?.quantity}</p>
            </div>

            <h3 className="font-semibold">{item?.itemTotal}</h3>
          </div>
        ))}
      </div>

      {/* Promo */}
      <div className="mt-6">
        <label className="mb-2 block text-xs uppercase tracking-wider text-zinc-500">
          Promo Code
        </label>

        <div className="flex gap-2 items-center">
          <Input
            placeholder="Enter code"
            className="
              h-11
              border-[#1A1D2E]
            "
          />

          <Button
            className="
              bg-[#1C78FA]
              hover:bg-[#1C78FA]/90
              h-11
            "
          >
            Apply
          </Button>
        </div>
      </div>

      <Separator className="my-6 bg-[#1A1D2E]" />

      {/* Totals */}
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-zinc-400">Subtotal</span>

          <span>
            $
             {deliveryMethod === "express"
            ? ((cart?.subtotal ?? 0) + 12).toFixed(2)
            : (cart?.subtotal ?? 0).toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-400">Shipping</span>

          <span>Free</span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-400">Tax</span>

          <span>$00.00</span>
        </div>

        <div className="flex justify-between text-[#60A5FA]">
          <span>Discount</span>

          <span>-$00.00</span>
        </div>
      </div>

      <Separator className="my-6 bg-[#1A1D2E]" />

      {/* Total */}
      <div className="flex justify-between">
        <span className="text-lg font-semibold">Total</span>

        <span className="text-2xl font-bold">
          $
          {deliveryMethod === "express"
            ? ((cart?.subtotal ?? 0) + 12).toFixed(2)
            : (cart?.subtotal ?? 0).toFixed(2)}
        </span>
      </div>

      {/* CTA */}
      <Button
        type="submit"
        disabled={isPending || !cart?.items?.length}
        className="
          mt-6
          h-14
          w-full
          rounded-full
          bg-white
          text-black
          hover:bg-zinc-200
        "
      >
        {isPending ? "Placing Order..." : "Place Order"}
        <ArrowRight size={16} />
      </Button>

      {/* Trust Features */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div
          className="
            rounded-2xl
            border
            border-[#151827]
            bg-[#131829]
            p-4
          "
        >
          <Lock size={18} className="text-[#60A5FA]" />

          <h3 className="mt-3 text-sm font-medium">Secure Checkout</h3>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-[#151827]
            bg-[#131829]
            p-4
          "
        >
          <RotateCcw size={18} className="text-[#60A5FA]" />

          <h3 className="mt-3 text-sm font-medium">Free Returns</h3>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-[#151827]
            bg-[#131829]
            p-4
          "
        >
          <ShieldCheck size={18} className="text-[#60A5FA]" />

          <h3 className="mt-3 text-sm font-medium">2 Year Warranty</h3>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-[#151827]
            bg-[#131829]
            p-4
          "
        >
          <Headphones size={18} className="text-[#60A5FA]" />

          <h3 className="mt-3 text-sm font-medium">24/7 Support</h3>
        </div>
      </div>
    </Card>
  );
};

export default OrderSummary;
