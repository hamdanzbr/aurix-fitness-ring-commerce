"use client";
import { useCart } from "@/hooks/api/useCart";
import CartItems from "../components/CartItems";
import Checkoutbox from "../components/Checkoutbox";

const CartSection = () => {
  const { data, isLoading, isError, refetch } = useCart();

  if (isLoading) {
    return (
      <div className="flex gap-6 flex-wrap">
        <div className="min-w-2/3 h-[360px] rounded-3xl bg-[#131429] animate-pulse" />
        <div className="h-[420px] flex-1 rounded-3xl bg-[#111224] animate-pulse" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-3xl border border-[#1A1D2E] bg-[#131429] p-8 text-center">
        <h1 className="font-bold">Unable to load cart</h1>
        <p className="mt-2 text-sm text-zinc-500">Please try again.</p>
        <button className="mt-5 rounded-full bg-[#1C78FA] px-5 py-2" onClick={() => refetch()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-6 flex-wrap">
      <CartItems data={data} />
      <Checkoutbox data={data}/>
    </div>
  );
};

export default CartSection;
