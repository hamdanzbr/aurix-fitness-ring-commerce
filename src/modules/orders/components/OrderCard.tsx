"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import {
  CheckCircle2,
  Eye,
  Package,
  RotateCcw,
  Star,
  Truck,
} from "lucide-react";
import { Order } from "@/types/order";

const orderSteps = [
  {
    label: "Ordered",
    icon: Package,
    completed: true,
  },
  {
    label: "Packed",
    icon: CheckCircle2,
    completed: true,
  },
  {
    label: "Shipped",
    icon: Truck,
    completed: true,
  },
  {
    label: "Delivered",
    icon: CheckCircle2,
    completed: true,
  },
];

const OrderCard = ({ order }: { order: Order }) => {
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
        {/* Top Header */}
        <div
          className="
            flex
            flex-col
            gap-5
            border-b
            border-[#1A1D2E]
            bg-[#0E1020]
            p-5
            lg:flex-row
            lg:items-center
          "
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Order ID
            </p>

            <h1 className="mt-1 font-bold">{order?._id}</h1>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Placed
            </p>

            <h1 className="mt-1 font-semibold">{order.createdAt}</h1>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Delivery
            </p>

            <h1 className="mt-1 font-semibold">Delivered Jun 14, 2025</h1>
          </div>

          {/* Status */}
          <div className="lg:ml-auto">
            <div
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-500/20
                bg-emerald-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-emerald-400
              "
            >
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              {order.orderStatus}
            </div>
          </div>
        </div>

        {/* Product Content */}
        {order?.items?.map((item,idx) => (
          <div
            key={idx}
            className="
            flex
            flex-col
            gap-8
            p-6
            xl:flex-row
          "
          >
            {/* Left */}
            <div className="flex flex-1 gap-5">
              {/* Image */}
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
                  src="https://app.banani.co/api/flow-image/1%3A1%0AFuturistic%20matte%20black%20smart%20luxury%20ring%20floating%20against%20a%20deep%20dark%20cosmos%20background%20with%20soft%20electric%20blue%20internal%20glow%2C%20ultra%20premium%20product%20photo"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col">
                <h1 className="text-xl font-bold leading-tight">
                  AURIX Smart Fitness Ring — Gen 3 Ultra
                </h1>

                <p className="mt-1 text-sm text-zinc-500">
                  Aerospace titanium · Precision biosensors · 7-day battery
                </p>

                {/* Meta */}
                <div className="mt-2 flex flex-wrap gap-3">
                  <div
                    className="
                    rounded-full
                    bg-[#1A1D35]
                    px-4
                    py-2
                    text-sm
                    text-zinc-300
                  "
                  >
                    {item.selectedFinish}
                  </div>

                  <div
                    className="
                    rounded-full
                    bg-[#1A1D35]
                    px-4
                    py-2
                    text-sm
                    text-zinc-300
                  "
                  >
                    Size {item.selectedSize}
                  </div>

                  <div
                    className="
                    rounded-full
                    bg-[#1A1D35]
                    px-4
                    py-2
                    text-sm
                    text-zinc-300
                  "
                  >
                    Qty · {item.quantity}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Actions */}
        <div className="mt-4 flex flex-wrap gap-3 items-center px-6">
          <Button
            className="
                    rounded-full
                    bg-[#1C78FA]
                    hover:bg-[#1C78FA]/90
                  "
          >
            <Truck size={16} />
            Track Order
          </Button>

          <Button
            variant="outline"
            className="
                    rounded-full
                    border-[#2A2D45]
                    bg-transparent
                  "
          >
            <Eye size={16} />
            Details
          </Button>

          <Button
            variant="outline"
            className="
                    rounded-full
                    border-[#2A2D45]
                    bg-transparent
                  "
          >
            <RotateCcw size={16} />
            Reorder
          </Button>

          <Button
            variant="outline"
            className="
                    rounded-full
                    border-[#2A2D45]
                    bg-transparent
                  "
          >
            <Star size={16} />
            Review
          </Button>
        </div>

        {/* Price */}
        <div
          className="
              flex
              flex-row
              justify-between
              xl:min-w-[180px]
              xl:flex-col
              xl:items-end
              px-6
            "
        >
          <div>
            <h1 className="text-3xl font-bold">$349</h1>

            <p className="text-sm text-zinc-500">Incl. VAT</p>
          </div>
        </div>

        {/* Horizontal Shipment Timeline */}
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
                  {/* Line */}
                  {index !== orderSteps.length - 1 && (
                    <div
                      className="
                        absolute
                        left-[60%]
                        top-5
                        hidden
                        h-[2px]
                        w-full
                        bg-[#2A2D45]
                        md:block
                      "
                    />
                  )}

                  {/* Circle */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#1C78FA]
                    "
                  >
                    <Icon size={18} />
                  </div>

                  <h1 className="mt-3 font-medium">{step.label}</h1>

                  <p className="mt-1 text-xs text-zinc-500">Completed</p>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default OrderCard;
