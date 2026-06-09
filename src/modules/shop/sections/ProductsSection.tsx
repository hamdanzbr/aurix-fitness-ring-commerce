import { useProducts } from "@/hooks/api/useProducts";
import Products from "../components/Products";
import SidebarFilters from "../components/SidebarFilters";
import { useState } from "react";
import { ProductFilters } from "@/types/product";
import { useDebounce } from "@/hooks/useDebounce";

const ProductsSection = () => {
  const [filters, setFilters] = useState<ProductFilters>({
    minPrice: 100,
    maxPrice: 30000,
    limit: 10,
    page: 1,
    search: "",
    sort: "",
    categories: [],
    finishes: [],
    features: [],
  });
  const debouncedFilters = useDebounce(filters, 350);
  const { data, isLoading, isError, refetch, isFetching } =
    useProducts(debouncedFilters);

  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <SidebarFilters filters={filters} setFilters={setFilters} />
      <Products
        data={data}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        onRetry={() => refetch()}
      />
    </div>
  );
};

export default ProductsSection;
