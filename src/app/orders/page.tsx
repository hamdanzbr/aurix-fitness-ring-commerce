import Orders from "@/modules/orders/Orders"
import CustomerLayout from "../../components/layout/CustomerLayout"
import ProtectedRoute from "@/components/routes/ProtectedRoute"

const page = () => {
  return (
    <ProtectedRoute>
      <CustomerLayout>
          <Orders/>
      </CustomerLayout>
    </ProtectedRoute>
  )
}

export default page