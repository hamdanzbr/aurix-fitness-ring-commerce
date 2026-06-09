"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader, ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/types/product";
import { usePathname, useRouter } from "next/navigation";
import { useAddToCart } from "@/hooks/api/useCart";
import { useState } from "react";
import { useRemoveFromWishlist } from "@/hooks/api/useWishlist";

type productCardProps = {
  collection: Product;
  animationIndex: number;
};
const ProductCard = ({ collection, animationIndex }: productCardProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { mutate: addToCart, isPending: addding } = useAddToCart();
  const { mutate: remove, isPending: removingWishlist } =
    useRemoveFromWishlist();
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const handleCTAClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (pathname?.includes("wishlists")) {
      remove(collection._id);
      return;
    }

    const { _id, availableFinishes, availableSizes } = collection;

    if (!_id || !availableFinishes?.length || !availableSizes?.length) {
      router.push(`/shop/${collection.slug}`);
      return;
    }

    addToCart(
      {
        quantity: 1,
        productId: _id,
        selectedFinish: availableFinishes[0],
        selectedSize: availableSizes[0],
      },
      {
        onSuccess: () => setIsAdded(true),
      },
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: (animationIndex - 1) * 0.08,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card
        onClick={() => router.push(`/shop/${collection.slug}`)}
        className="
                group
                h-full
                rounded-3xl
                border
                border-[#151517]
                bg-[#070709]
                cursor-pointer
                p-4
                overflow-hidden
                transition-all
                duration-300
                hover:border-[#1C78FA]
                hover:shadow-[0_0_30px_rgba(28,120,250,0.12)]
                ring-[#151517]
              "
      >
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0c0c0e]">
          <img
            src={collection.images[0]}
            alt={collection.name}
            width={500}
            height={500}
            className="
                    h-[320px]
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
          />
        </div>

        {/* Colors + Ratings */}
        <div className="mt-4 flex items-center justify-between">
          {/* Color Options */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#18181B]" />
            <span className="h-3 w-3 rounded-full bg-[#C7A44F]" />
            <span className="h-3 w-3 rounded-full bg-[#6B2C2C]" />
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 text-sm">
            <Star size={12} className="fill-[#60A5FA] text-[#60A5FA]" />

            <span className="font-medium text-white">
              {collection.averageRating}
            </span>

            <span className="text-zinc-500">({collection.totalRatings})</span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-white">
            {collection.name}
          </h2>
          <h1 className="text-sm font-bold text-zinc-400 line-through">
            ${collection.price}
          </h1>
          <p className="mt-1 text-2xl text-white">
            ${collection.discountPrice}
          </p>
        </div>

        {/* Button */}
        <Button
          disabled={addding || removingWishlist}
          className="
                  mt-5
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-[#202024]
                  bg-[#141418]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#1a1a20]
                  hover:border-[#2a2a31]
                "
          onClick={handleCTAClick}
        >
          {addding ? (
            <Loader className="animate-spin text-violet-500 size-10" />
          ) : removingWishlist ? (
            "Removing..."
          ) : isAdded ? (
            "Added"
          ) : pathname?.includes("wishlists") ? (
            "Remove From Wishlist"
          ) : !collection._id ||
            !collection.availableFinishes?.length ||
            !collection.availableSizes?.length ? (
            "Shop"
          ) : (
            <>
              <ShoppingCart size={16} />
              <span>Quick Add</span>
            </>
          )}
        </Button>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
