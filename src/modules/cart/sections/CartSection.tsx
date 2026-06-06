"use client";
import { useCart } from "@/hooks/api/useCart";
import CartItems from "../components/CartItems";
import Checkoutbox from "../components/Checkoutbox";

const CartSection = () => {
  const { data } = useCart();

  return (
    <div className="flex gap-6">
      <CartItems data={data} />
      <Checkoutbox data={data}/>
    </div>
  );
};

export default CartSection;
