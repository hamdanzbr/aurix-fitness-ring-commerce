import { useProducts } from "@/hooks/api/useProducts";
import Products from "../components/Products";
import SidebarFilters from "../components/SidebarFilters";
import { useState } from "react";
import { ProductFilters } from "@/types/product";

const ProductsSection = () => {
    const [filters,setFilters]=useState<ProductFilters>({
      minPrice:100,
      maxPrice:30000,
      limit:10,
      page:1,
      search:'',
      sort:'',
      categories:[],
      finishes:[],
      features:[]
    })
    const { data } = useProducts(filters);

  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <SidebarFilters filters={filters} setFilters={setFilters}/>
      <Products data={data}/>
    </div>
  );
};

export default ProductsSection;