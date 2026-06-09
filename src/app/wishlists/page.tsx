import CustomerLayout from "@/components/layout/CustomerLayout"
import ProtectedRoute from "@/components/routes/ProtectedRoute"
import Wishlists from "@/modules/wishlists/Wishlists"

const page = () => {
  return (
    <ProtectedRoute>
        <CustomerLayout>
            <Wishlists/>
        </CustomerLayout>
    </ProtectedRoute>
  )
}

export default page