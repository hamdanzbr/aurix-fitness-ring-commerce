"use client"
import { useProductDetails } from "@/hooks/api/useProductDetails";
import BuySection from "./sections/BuySection";
import Review from "./sections/Review";
import { useParams } from "next/navigation";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id as string;
  const{data,isLoading,isError,refetch}=useProductDetails(id)

  if (isLoading) {
    return (
      <div className="mx-auto max-w-[1600px] px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="h-[560px] rounded-3xl bg-[#0B0D18] animate-pulse" />
          <div className="h-[560px] rounded-3xl bg-[#0F1121] animate-pulse" />
        </div>
      </div>
    );
  }

  if (isError || !data?.product) {
    return (
      <div className="mx-auto max-w-[1600px] px-4 py-8 lg:px-8">
        <div className="rounded-3xl border border-[#1A1D2E] bg-[#0F1121] p-8 text-center">
          <h1 className="font-bold">Unable to load product</h1>
          <p className="mt-2 text-sm text-zinc-500">Please try again.</p>
          <button className="mt-5 rounded-full bg-[#1C78FA] px-5 py-2" onClick={() => refetch()}>
            Retry
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="mx-auto max-w-[1600px] px-4 py-8 lg:px-8 relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,129,245,0.08),transparent_40%)]" />
      <BuySection product={data?.product} />
      <Review />
    </div>
  );
};

export default ProductDetails;
