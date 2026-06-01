import Checkout from "@/modules/checkout/Checkout"
import CustomerLayout from "../customer/layout"

const page = () => {
  return (
    <CustomerLayout>
        <Checkout/>
    </CustomerLayout>
  )
}

export default page