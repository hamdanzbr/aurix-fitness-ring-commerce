import { ChevronRight } from "lucide-react";

const Header = () => {
  return (
    <div className="border-b border-[#151827] pb-8">
      <div className="flex items-center gap-2 text-sm text-zinc-500">
        <span>Home</span>
        <ChevronRight size={14} />
        <span>Cart</span>
        <ChevronRight size={14} />
        <span className="text-white">Checkout</span>
      </div>

      <h1 className="mt-4 text-5xl font-bold">
        Checkout
      </h1>

      <p className="mt-3 text-zinc-400">
        Complete your order and begin your wellness journey.
      </p>
    </div>
  );
};

export default Header;