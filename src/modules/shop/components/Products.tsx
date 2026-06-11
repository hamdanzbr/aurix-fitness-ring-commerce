import { Button } from "@/components/ui/button";
import { sortOptions } from "../constants/shop.constants";
import ProductCard from "@/modules/home/components/ProductCard";
import { RefreshCcw, Search } from "lucide-react";
import SelectDropdown from "./SelectDropdown";
import { Product, ProductFilters } from "@/types/product";
import { PaginatedResponse } from "@/types/api";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";
import LoadingProducts from "./LoadingProducts";

type ProductProps = {
  data: PaginatedResponse<Product> | undefined;
  isLoading?: boolean;
  isFetching?: boolean;
  isError?: boolean;
  onRetry?: () => void;
  setFilters: Dispatch<SetStateAction<ProductFilters>>;
  filters: ProductFilters;
};

const Products = ({
  data,
  isLoading = false,
  isFetching = false,
  isError = false,
  setFilters,
  onRetry,
  filters,
}: ProductProps) => {
  const products = data?.data ?? [];
  const totalProducts = data?.pagination?.total ?? products.length;

  if (isError) {
    return (
      <div className="w-full p-3">
        <div className="rounded-3xl border border-[#1A1A1C] bg-[#070709] p-8 text-center">
          <h1 className="font-bold">Unable to load products</h1>
          <p className="mt-2 text-sm text-zinc-500">Please try again.</p>
          <Button className="mt-5 rounded-full" onClick={onRetry}>
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-3 space-y-3">
      <div className="flex flex-col gap-3">
                <div className="relative w-full">
          <Search
            size={16}
            className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-zinc-500
      "
          />

          <Input
            value={filters.keyword}
            onChange={(e) => {
              setFilters((prev) => ({ ...prev, keyword: e.target.value }));
            }}
            placeholder="Search orders..."
            className="
        h-11
        rounded-full
        border-[#1A1A1C]
        bg-[#0C0C0D]
        pl-11
        text-white
        placeholder:text-zinc-500
        focus-visible:ring-0
        focus-visible:ring-offset-0
      "
          />
        </div>
        <h1 className="font-bold">
          {isFetching ? "Updating Products..." : `${totalProducts} Products`}
        </h1>
        {/* <SelectDropdown
          className="ml-auto"
          placeholder="Sort By"
          options={sortOptions}
        /> */}
      </div>
      {isLoading?<LoadingProducts/>: products.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((prod, index) => (
            <ProductCard
              collection={prod}
              key={prod._id}
              animationIndex={index + 1}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-[#1A1A1C] bg-[#070709] p-8 text-center">
          <h1 className="font-bold">No products found</h1>
          <p className="mt-2 text-sm text-zinc-500">
            Try adjusting your filters.
          </p>
        </div>
      )}
      <div className="mt-6">
        {data?.pagination &&
          data.pagination.page < data.pagination.totalPages && (
            <Button className="bg-[#18181B] border border-[#1A1A1C] flex items-center justify-center gap-1 mx-auto p-5 rounded-full">
              <RefreshCcw />
              <h1>Load More Products</h1>
            </Button>
          )}
      </div>
    </div>
  );
};

export default Products;
