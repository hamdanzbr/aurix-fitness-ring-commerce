import Checkout from "@/modules/checkout/Checkout"
import CustomerLayout from "../../components/layout/CustomerLayout"
import ProtectedRoute from "@/components/routes/ProtectedRoute"

const page = () => {
  return (
    <ProtectedRoute>
      <CustomerLayout>
          <Checkout/>
      </CustomerLayout>
    </ProtectedRoute>
  )
}

export default page