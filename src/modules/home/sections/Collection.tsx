
import {
  ChevronRight,
} from "lucide-react";

import { collections } from "../constants/home.constants";
import ProductCard from "../components/ProductCard";

const Collection = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 py-20 sm:px-6 lg:px-16">
      {/* Header */}
      <div className="flex items-end justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            The Collection
          </h1>

          <p className="mt-2 text-sm sm:text-base text-zinc-400">
            Choose the perfect finish for your style.
          </p>
        </div>

        <button className="group flex items-center gap-1 text-sm font-medium text-[#1C78FA] transition-colors hover:text-blue-400">
          View All

          <ChevronRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Collection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {collections.map((collection) => (
            <ProductCard collection={collection} key={collection.id}/>
        ))}
      </div>
    </section>
  );
};

export default Collection;