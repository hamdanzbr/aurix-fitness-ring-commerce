"use client";
import ProductCard from "../home/components/ProductCard";
import Header from "../shop/sections/Header";
import { useWishlist } from "@/hooks/api/useWishlist";

const Wishlists = () => {
  const { data, isLoading, isError, refetch } = useWishlist();
  const wishlistItems = data ?? [];

  return (
    <div className="p-6">
      <Header />
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-[460px] rounded-3xl border border-[#151517] bg-[#070709] animate-pulse"
            />
          ))}
        </div>
      ) : isError ? (
        <div className="rounded-3xl border border-[#1A1A1C] bg-[#070709] p-8 text-center">
          <h1 className="font-bold">Unable to load wishlist</h1>
          <p className="mt-2 text-sm text-zinc-500">Please try again.</p>
          <button className="mt-5 rounded-full bg-[#1C78FA] px-5 py-2" onClick={() => refetch()}>
            Retry
          </button>
        </div>
      ) : wishlistItems.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {wishlistItems.map((prod, index) => (
            <ProductCard
              collection={prod.productId}
              key={prod._id}
              animationIndex={index + 1}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-[#1A1A1C] bg-[#070709] p-8 text-center">
          <h1 className="font-bold">Your wishlist is empty</h1>
          <p className="mt-2 text-sm text-zinc-500">
            Save products from the shop to see them here.
          </p>
        </div>
      )}
    </div>
  );
};

export default Wishlists;
