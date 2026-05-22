import Products from "../components/Products";
import SidebarFilters from "../components/SidebarFilters";

const ProductsSection = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <SidebarFilters />
      <Products />
    </div>
  );
};

export default ProductsSection;