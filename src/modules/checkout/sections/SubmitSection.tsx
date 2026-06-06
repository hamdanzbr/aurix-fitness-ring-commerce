import OrderSummary from "../components/OrderSummary";
import OrderSuccessCard from "../components/OrderSuccessCard";

const SubmitSection = ({ isSuccess,orderSuccessData,isPending }: { isSuccess: boolean; orderSuccessData: any; isPending: boolean }) => {
  return (
    <div className="space-y-6 xl:sticky xl:top-6 h-fit">
      {!isSuccess && <OrderSummary isPending={isPending} />}
      {isSuccess && <OrderSuccessCard orderSuccessData={orderSuccessData} />}
    </div>
  );
};

export default SubmitSection;