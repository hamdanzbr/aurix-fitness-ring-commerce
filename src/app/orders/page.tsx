import Orders from "@/modules/orders/Orders"
import CustomerLayout from "../../components/layout/CustomerLayout"

const page = () => {
  return (
    <CustomerLayout>
        <Orders/>
    </CustomerLayout>
  )
}

export default page