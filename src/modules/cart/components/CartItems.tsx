"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import {
  Bookmark,
  Circle,
  Heart,
  Minus,
  Plus,
  Trash,
  X,
} from "lucide-react";

import { motion } from "framer-motion";
import { useRemoveCartItem, useUpdateCartItem } from "@/hooks/api/useCart";
import { Cart, CartResponse } from "@/types/cart";
type cartItemProps={
  item:Cart
}
const CartItemCard=({item}:cartItemProps)=>{
  const{mutate:updateCart}=useUpdateCartItem()
  const updateCartItem=({quantity}: {quantity: number})=>{
    updateCart({itemId:item?._id!,quantity})
  }
const{mutate:removeItem,isPending}=useRemoveCartItem()
    return (
               <Card
          className="
            relative
            overflow-hidden
            rounded-3xl
            ring-[#1A1D2E]
            bg-[#131429]
            p-5
            shadow-[0_0_40px_rgba(59,130,246,0.04)]
          "
        >
          {/* Remove */}
          <button
            className="
              absolute
              right-4
              top-5
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#16182B]
              transition-all
              hover:border-[#3B81F5]
              ml-2
            "
            disabled={isPending}
            onClick={()=>removeItem(item?._id!)}
          >
            <X size={16} className="text-zinc-400" />
          </button>

          <div className="flex flex-col gap-6 lg:flex-row">
            {/* Product Image */}
            <div
              className="
                overflow-hidden
                rounded-3xl
                bg-[#0F1121]
                p-2
                lg:w-[190px]
              "
            >
              <img
                className="
                  aspect-square
                  w-full
                  rounded-2xl
                  object-cover
                "
                src={item?.productId?.images?.[0]}
                alt="Aurix Ring"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col">
              {/* Title */}
              <div>
                <h2 className="max-w-[700px] text-2xl font-bold leading-tight">
                  {item?.productId?.name }
                </h2>

                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
                  <p>{item?.productId?.description}</p>
                </div>
              </div>

              {/* Variants */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#1A1D35]
                    px-4
                    py-2
                    text-sm
                    text-zinc-300
                  "
                >
                  <Circle
                    size={10}
                    className="fill-[#0F172A] text-[#3B82F6]"
                  />

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
                  {item.selectedSize}
                </div>
              </div>

              {/* Bottom Row */}
              <div
                className="
                  mt-6
                  flex
                  flex-col
                  gap-5
                  xl:flex-row
                  xl:items-center
                "
              >
                {/* Quantity */}
                <div
                  className="
                    flex
                    h-14
                    items-center
                    rounded-2xl
                    border
                    border-[#2A2D45]
                    bg-[#101222]
                    px-2
                    w-fit
                  "
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-zinc-400 hover:text-white"
                    onClick={()=>item.quantity>1 && updateCartItem({quantity: item?.quantity - 1})}
                  >
                    <Minus size={16} />
                  </Button>

                  <span className="w-10 text-center font-medium">
                    {item.quantity}
                  </span>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-zinc-400 hover:text-white"
                    onClick={()=>updateCartItem({quantity: item?.quantity + 1})}
                  >
                    <Plus size={16} />
                  </Button>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3">

                  <Button
                    variant="ghost"
                    className="
                      gap-2
                      border
                      border-[#2A2D45]
                      bg-[#16182B]
                      text-zinc-300
                      hover:bg-[#1C1F35]
                    "
                  >
                    <Heart size={16} />

                    Wishlist
                  </Button>
                </div>

                {/* Price */}
                <div className="xl:ml-auto">
                  <div className="text-right">
                    <h1 className="text-4xl font-bold">
                      {item?.itemTotal}
                    </h1>

                    <p className="text-sm tracking-wide text-zinc-500">
                      INCL. VAT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card> 
    )
}
const CartItems = ({data}:{data:CartResponse|undefined}) => {
  
  return (
    <div className="min-w-2/3 ">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between border-b border-[#1A1D2E] pb-4">
        <h1 className="text-2xl font-bold tracking-tight">
          {data?.items?.length} items in your cart
        </h1>

        <Button
          variant="ghost"
          className="gap-2 text-zinc-500 hover:text-white"
        >
          <Trash size={16} />

          <span>Clear Cart</span>
        </Button>
      </div>

      {/* Cart Card */}
      <motion.div
        className="flex flex-col gap-6"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.25 }}
      >
        {data?.items?.map?.((item)=>(
          <CartItemCard item={item} key={item._id}/>
        ))}

      </motion.div>
    </div>
  );
};

export default CartItems;