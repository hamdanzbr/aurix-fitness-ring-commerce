import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import {
  RefreshCcw,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";

const Buybox = ({ product }: { product: Product | undefined }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-3">
        <div className="rounded-full border border-[#1E2235] bg-[#0E1220] px-3 py-1 text-xs font-medium tracking-wide text-[#8FAFFF]">
          NEW RELEASE
        </div>
        <h1 className="text-xs">GEN 3 ULTRA</h1>
      </div>

      <div>
        <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
          {product?.name}
        </h1>
        <div className="flex items-center gap-1 mt-3">
          <Star size={12} className="fill-[#60A5FA] text-[#60A5FA]" />
          <Star size={12} className="fill-[#60A5FA] text-[#60A5FA]" />
          <Star size={12} className="fill-[#60A5FA] text-[#60A5FA]" />
          <Star size={12} className="fill-[#60A5FA] text-[#60A5FA]" />
          <Star size={12} className="fill-[#60A5FA] text-[#60A5FA]" />
          <h1 className="text-xs ml-2">{`${product?.averageRating || 4.8}/5 (${product?.totalRatings} Reviews)`}</h1>
        </div>
      </div>

      <div
        className="
    rounded-3xl
    border
    border-[#1A1D2E]
    bg-[#0F1121]
    p-6
  "
      >
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-bold text-3xl">{product?.discountPrice}</h1>
          <h1 className=" text-zinc-500 line-through mt-2 ml-3">
            {product?.price}
          </h1>
          <Button
            className={
              "text-[#076B2B] border rounded-full border-[#0B413C] bg-[#0E222B] font-bold ml-3"
            }
          >
            Save{" "}
            {`$${product?.price && product?.discountPrice ? product?.price - product?.discountPrice : ""}`}
          </Button>
          <div className="rounded-full bg-[#102031] px-3 py-1 text-sm font-medium text-[#7DD3FC]">
            In stock and ready to ship
          </div>
        </div>
        <div>
          <h1 className="text-sm text-zinc-500">
            or 29$/mo with 0% APR financing options
          </h1>
        </div>
      </div>

      <div>
        <p className="text-zinc-400">{product?.description}</p>
      </div>

      <div className="flex items-center gap-4">
        {/* <div className="flex flex-col items-center">
          <button
            className={
              "bg-[#FCFDFF] w-12 h-12 rounded-full border-4 border-[#1A1110] transition-all duration-300     hover:scale-110"
            }
          ></button>
          <h1 className="text-sm">Matte black</h1>
        </div>

        <div className="flex flex-col items-center">
          <button
            className={
              "bg-[#FCFDFF] w-12 h-12 rounded-full border-4 border-[#868581] transition-all duration-300     hover:scale-110"
            }
          ></button>
          <h1 className="text-sm">Matte black</h1>
        </div>

        <div className="flex flex-col items-center">
          <button
            className={
              "bg-[#FCFDFF] w-12 h-12 rounded-full border-4 border-[#B07811] transition-all duration-300     hover:scale-110"
            }
          ></button>
          <h1 className="text-sm">Nebula Gold</h1>
        </div>

        <div className="flex flex-col items-center">
          <button
            className={
              "bg-[#FCFDFF] w-12 h-12 rounded-full border-4 border-[#FCBFCA] transition-all duration-300     hover:scale-110"
            }
          ></button>
          <h1 className="text-sm">Aurora Rose</h1>
        </div> */}
        {product?.availableFinishes?.map((finish) => (
          <div className="flex flex-col items-center">
            <button
              className={
                "bg-[#FCFDFF] w-12 h-12 rounded-full border-4 border-[#FCBFCA] transition-all duration-300     hover:scale-110"
              }
            ></button>
            <h1 className="text-sm">{finish}</h1>
          </div>
        ))}
      </div>

      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-[#757DA0]">Select Ring Size</h1>
          <h1 className="text-[#3780F6] underline">
            How to measure?free sizing kit included
          </h1>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {product?.availableSizes?.map((size) => (
            <Button
              key={size}
              className={
                "w-12 h-12 rounded-full bg-[#0B0C1B] border border-[#1A1D2E] hover:border-[#3B81F5]"
              }
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 items-center rounded-full border border-[#1A1D2E] bg-[#101222] px-2">
            <Button variant="ghost" size="icon">
              -
            </Button>
            <h1 className="text-sm">1</h1>
            <Button variant="ghost" size="icon">
              +
            </Button>
          </div>
          <div className="w-full">
            <Button
              className={
                "flex items-center gap-2 bg-[#3B81F5] rounded-full p-3 h-14 text-base font-semibold transition-all duration-300 hover:bg-[#256DE8] w-full"
              }
            >
              <ShoppingCart size={16} />
              <h1>Add to Cart</h1>
            </Button>
          </div>
        </div>
        <div>
          <Button
            className={
              "flex items-center gap-2 bg-[#F8FAFF] rounded-full p-3 font-bold h-14 hover:bg-zinc-200 w-full text-black"
            }
          >
            <h1>Buy Now with express checkout</h1>
          </Button>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="bg-[#101222] rounded-lg p-4 flex flex-col items-center border border-[#1A1D2E]">
            <Truck className="text-[#2F65C0]" />
            <h2 className="font-bold text-lg">Free Shipping</h2>
            <p className="text-zinc-400 text-center">On all orders over $100</p>
          </div>
          <div className="bg-[#101222] rounded-lg p-4 flex flex-col items-center border border-[#1A1D2E]">
            <ShieldCheck className="text-[#2F65C0]" />
            <h2 className="font-bold text-lg">{product?.warrantyAvailable ? `${product.warrantyMonths} Month Warranty` : "No Warranty"}</h2>
            <p className="text-zinc-400 text-center">Guaranteed protection</p>
          </div>
          <div className="bg-[#101222] rounded-lg p-4 flex flex-col items-center border border-[#1A1D2E]">
            <RefreshCcw className="text-[#2F65C0]" />
            <h2 className="font-bold text-lg">30-Day Returns</h2>
            <p className="text-zinc-400 text-center">
              Hassle free sizing swaps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buybox;
