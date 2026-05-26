import CartItems from "../components/CartItems";
import Checkoutbox from "../components/Checkoutbox";

const CartSection = () => {
  return (
    <div className="flex gap-6">
      <CartItems />
      <Checkoutbox />
    </div>
  );
};

export default CartSection;
