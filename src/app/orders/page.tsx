import Orders from "@/modules/orders/Orders"
import CustomerLayout from "../customer/layout"

const page = () => {
  return (
    <CustomerLayout>
        <Orders/>
    </CustomerLayout>
  )
}

export default page