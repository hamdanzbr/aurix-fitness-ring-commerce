import Cart from "@/modules/cart/Cart";
import CustomerLayout from "../../components/layout/CustomerLayout";
import ProtectedRoute from "@/components/routes/ProtectedRoute";

const page = () => {
  return (
    <ProtectedRoute>
      <CustomerLayout>
        <Cart />
      </CustomerLayout>
    </ProtectedRoute>
  );
};

export default page;
