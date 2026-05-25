import Buybox from "../components/Buybox"
import ProductImage from "../components/ProductImage"

const BuySection = () => {
  return (
    <div className="grid grid-cols-2 min-h-screen gap-16">
        <ProductImage/>
        <Buybox/>
    </div>
  )
}

export default BuySection