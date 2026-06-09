"use client"
import { useProductDetails } from "@/hooks/api/useProductDetails";
import BuySection from "./sections/BuySection";
import Review from "./sections/Review";
import { useParams } from "next/navigation";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id as string;
  const{data}=useProductDetails(id)
  
  return (
    <div className="mx-auto max-w-[1600px] px-4 py-8 lg:px-8 relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,129,245,0.08),transparent_40%)]" />
      <BuySection product={data?.product} />
      <Review />
    </div>
  );
};

export default ProductDetails;
