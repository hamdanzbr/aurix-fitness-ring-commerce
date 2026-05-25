import BuySection from "./sections/BuySection";
import Review from "./sections/Review";

const ProductDetails = () => {
  return (
    <div className="mx-auto max-w-[1600px] px-4 py-8 lg:px-8">
      <BuySection />
      <Review />
    </div>
  );
};

export default ProductDetails;
