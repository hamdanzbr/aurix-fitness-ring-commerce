import { Button } from "@/components/ui/button";
import { sortOptions } from "../constants/shop.constants";
import ProductCard from "@/modules/home/components/ProductCard";
import { RefreshCcw } from "lucide-react";
import SelectDropdown from "./SelectDropdown";
import { Product } from "@/types/product";
import { PaginatedResponse } from "@/types/api";

type ProductProps={
   data: PaginatedResponse<Product> | undefined;
}
const Products = ({data}:ProductProps) => {

  return (
    <div className=" w-full p-3 space-y-3">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">12 Products</h1>
        <SelectDropdown placeholder="Sort By" options={sortOptions} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {data?.data?.map((prod, index) => (
          <ProductCard
            collection={prod}
            key={prod._id}
            animationIndex={index + 1}
          />
        ))}
      </div>
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
