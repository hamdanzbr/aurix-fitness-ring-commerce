import CartSection from "./sections/CartSection"
import Header from "./sections/Header"

const Cart = () => {
  return (
    <div className="p-8 px-16 space-y-16">
        <Header/>
        <CartSection/>
    </div>
  )
}

export default Cart