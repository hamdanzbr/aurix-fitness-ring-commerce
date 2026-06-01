import OrderSummary from "../components/OrderSummary";
import OrderSuccessCard from "../components/OrderSuccessCard";

const SubmitSection = () => {
  return (
    <div className="space-y-6 xl:sticky xl:top-6 h-fit">
      <OrderSummary />
      <OrderSuccessCard />
    </div>
  );
};

export default SubmitSection;