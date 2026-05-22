import { Button } from "@/components/ui/button";
import { productCollections, sortOptions } from "../constants/shop.constants";
import ProductCard from "@/modules/home/components/ProductCard";
import { RefreshCcw } from "lucide-react";
import SelectDropdown from "./SelectDropdown";
const Products = () => {
  return (
    <div className=" w-full p-3 space-y-3">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">12 Products</h1>
        <SelectDropdown
          placeholder="Sort By"
          options={sortOptions}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {productCollections.map((prod) => (
          <ProductCard collection={prod} key={prod.id} />
        ))}
      </div>
      <div className="mt-6">
        <Button className="bg-[#18181B] border border-[#1A1A1C] flex items-center justify-center gap-1 mx-auto p-5 rounded-full">
          <RefreshCcw />
          <h1>Load More Products</h1>
        </Button>
      </div>
    </div>
  );
};

export default Products;
