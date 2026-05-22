import Products from "../components/Products"
import SidebarFilters from "../components/SidebarFilters"

const ProductsSection = () => {
  return (
    <div className="flex">
        <SidebarFilters/>
        <Products/>
    </div>
  )
}

export default ProductsSection