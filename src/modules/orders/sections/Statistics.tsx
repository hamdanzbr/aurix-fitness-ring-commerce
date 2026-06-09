"use client"
import {
  BadgePercent,
  Briefcase,
  CalendarCheck,
  Loader,
  X,
} from "lucide-react";
import StatisticCard from "../components/StatisticCard";
import { useOrderStats } from "@/hooks/api/useOrders";


const Statistics = () => {
  const{data}=useOrderStats() 
  if(!data) return 
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      <StatisticCard
        icon={Briefcase}
        value={data?.totalOrders}
        title="Total Orders"
        description="Since account creation"
      />

      <StatisticCard
        icon={CalendarCheck}
        value={data.deliveredOrders}
        title="Delivered Orders"
        description="Successfully completed"
      />

      <StatisticCard
        icon={Loader}
        value={data.processingOrders}
        title="Processing"
        description="Currently in fulfillment"
      />

      <StatisticCard
        icon={X}
        value={data.cancelledOrders}
        title="Cancelled Orders"
        description="Since account creation"
      />

      <StatisticCard
        icon={BadgePercent}
        value={data.totalSpent}
        title="Total Spent"
        description="Across all orders"
      />
    </div>
  );
};

export default Statistics;