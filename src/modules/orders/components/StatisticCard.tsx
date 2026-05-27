import { LucideIcon } from "lucide-react";

type StatisticCardProps = {
  icon: LucideIcon;
  value: number | string;
  title: string;
  description: string;
};

const StatisticCard = ({
  icon: Icon,
  value,
  title,
  description,
}: StatisticCardProps) => {
  return (
    <div className="rounded-2xl bg-[#0B0F1D] p-5 border border-[#161B2D]">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#13192B]">
        <Icon className="text-[#60A5FA]" size={22} />
      </div>

      <h1 className="mt-6 text-3xl font-bold">
        {value}
      </h1>

      <h2 className="mt-2 font-medium">
        {title}
      </h2>

      <p className="mt-1 text-sm text-zinc-500">
        {description}
      </p>
    </div>
  );
};

export default StatisticCard;