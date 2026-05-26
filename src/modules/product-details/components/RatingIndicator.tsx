import { Progress } from "@/components/ui/progress";

type Progressprops={
    value:number;
    label:string;
    percentage:string;
}
const RatingIndicator = ({ value, label, percentage }: Progressprops) => {
  return (
<div className="flex items-center gap-4">
  <span className="w-[52px] text-sm text-zinc-400">
    {label}
  </span>

  <Progress
    value={value}
    className="
      h-2
      flex-1
      rounded-full
      bg-[#1A1B35]
    "
  />

  <span className="w-[40px] text-right text-sm text-zinc-500">
    {percentage}
  </span>
</div>
  );
};

export default RatingIndicator;
