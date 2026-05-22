import { Button } from "@/components/ui/button"
import { productCollections } from "../constants/shop.constants"
import ProductCard from "@/modules/home/components/ProductCard"

const Products = () => {
  return (
    <div className=" w-full p-3">
        <div className="flex justify-between items-center">
            <h1>12 Products</h1>
            <Button className={'bg-[#0C0C0D] border border-[#1A1A1C]'}>Sort By</Button>
        </div>
        <div className="grid grid-cols-4 gap-6">
            {
                productCollections.map((prod)=>(
                    <ProductCard collection={prod} key={prod.id} />
                ))
            }
        </div>
    </div>
  )
}

export default Products