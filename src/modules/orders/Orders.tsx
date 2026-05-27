import Header from "./sections/Header";
import OrdersSection from "./sections/OrdersSection";
import Statistics from "./sections/Statistics";

const Orders = () => {
  return (
    <div className="space-y-8  p-8 px-16">
      <Header/>
      <Statistics/>
      <OrdersSection/>
    </div>
  );
};

export default Orders;
