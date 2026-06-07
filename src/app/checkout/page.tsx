import Checkout from "@/modules/checkout/Checkout"
import CustomerLayout from "../../components/layout/CustomerLayout"

const page = () => {
  return (
    <CustomerLayout>
        <Checkout/>
    </CustomerLayout>
  )
}

export default page