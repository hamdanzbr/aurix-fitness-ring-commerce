import {
  BadgePercent,
  Briefcase,
  CalendarCheck,
  Loader,
  X,
} from "lucide-react";
import StatisticCard from "../components/StatisticCard";


const Statistics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      <StatisticCard
        icon={Briefcase}
        value={14}
        title="Total Orders"
        description="Since account creation"
      />

      <StatisticCard
        icon={CalendarCheck}
        value={5}
        title="Delivered Orders"
        description="Successfully completed"
      />

      <StatisticCard
        icon={Loader}
        value={9}
        title="Processing"
        description="Currently in fulfillment"
      />

      <StatisticCard
        icon={X}
        value={0}
        title="Cancelled Orders"
        description="Since account creation"
      />

      <StatisticCard
        icon={BadgePercent}
        value="$120"
        title="Total Savings"
        description="Across all orders"
      />
    </div>
  );
};

export default Statistics;