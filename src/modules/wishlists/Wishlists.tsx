"use client";
import ProductCard from "../home/components/ProductCard";
import Header from "../shop/sections/Header";
import { useWishlist } from "@/hooks/api/useWishlist";

const Wishlists = () => {
  const { data } = useWishlist();
  return (
    <div className="p-6">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {data?.map((prod, index) => (
          <ProductCard
            collection={prod.productId}
            key={prod._id}
            animationIndex={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlists;
