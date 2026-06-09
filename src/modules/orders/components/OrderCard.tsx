"use client";

import { motion } from "framer-motion";
import { Eye, RotateCcw, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Order } from "@/types/order";
import OrderTracking from "./OrderTracking";
import OrderCardHeader from "./OrderCardHeader";

const OrderCard = ({ order }: { order: Order }) => {
  const trackingStatus =
    order.orderStatus === "processing" ? "confirmed" : order.orderStatus;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.35 }}
      viewport={{ once: true }}
    >
      <Card
        className="
          overflow-hidden
          rounded-3xl
          ring-0
          p-0
          shadow-[0_0_40px_rgba(59,130,246,0.04)]
          max-w-2/3
          bg-[#131429]
        "
      >
        <OrderCardHeader order={order} />

        {order.items.map((item) => {
          const product =
            typeof item.productId === "string" ? undefined : item.productId;

          return (
            <div
              key={item._id}
              className="
                flex
                flex-col
                gap-8
                p-6
                xl:flex-row
              "
            >
              <div className="flex flex-1 gap-5">
                <div
                  className="
                    h-[120px]
                    w-[120px]
                    overflow-hidden
                    rounded-2xl
                    bg-[#0E1020]
                    border
                    border-[#1A1D2E]
                  "
                >
                  <img
                    src={product?.images?.[0] ?? item.image ?? ""}
                    alt={product?.name ?? item.name ?? "Aurix Ring"}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <h1 className="text-xl font-bold leading-tight">
                    {product?.name ?? item.name ?? "Aurix Smart Fitness Ring"}
                  </h1>

                  <p className="mt-1 text-sm text-zinc-500">
                    {product?.description ?? "Aurix order item"}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-3">
                    <div className="rounded-full bg-[#1A1D35] px-4 py-2 text-sm text-zinc-300">
                      {item.selectedFinish}
                    </div>

                    <div className="rounded-full bg-[#1A1D35] px-4 py-2 text-sm text-zinc-300">
                      Size {item.selectedSize}
                    </div>

                    <div className="rounded-full bg-[#1A1D35] px-4 py-2 text-sm text-zinc-300">
                      Qty · {item.quantity}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="mt-4 flex flex-wrap gap-3 items-center px-6">
          <Button className="rounded-full bg-[#1C78FA] hover:bg-[#1C78FA]/90">
            <Truck size={16} />
            Track Order
          </Button>

          <Button
            variant="outline"
            className="rounded-full border-[#2A2D45] bg-transparent"
          >
            <Eye size={16} />
            Details
          </Button>

          <Button
            variant="outline"
            className="rounded-full border-[#2A2D45] bg-transparent"
          >
            <RotateCcw size={16} />
            Reorder
          </Button>

          <Button
            variant="outline"
            className="rounded-full border-[#2A2D45] bg-transparent"
          >
            <Star size={16} />
            Review
          </Button>
        </div>

        <div className="flex flex-row justify-between xl:min-w-[180px] xl:flex-col xl:items-end px-6">
          <div>
            <h1 className="text-3xl font-bold">${order.totalAmount}</h1>
            <p className="text-sm text-zinc-500">Incl. VAT</p>
          </div>
        </div>

        <OrderTracking
          status={
            trackingStatus as "pending" | "confirmed" | "shipped" | "delivered"
          }
        />
      </Card>
    </motion.div>
  );
};

export default OrderCard;
