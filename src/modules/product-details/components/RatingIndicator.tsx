import { Progress } from "@/components/ui/progress";

type Progressprops={
    value:number;
    label:string;
    percentage:string;
}
const RatingIndicator = ({ value, label, percentage }: Progressprops) => {
  return (
    <div className="flex items-center gap-5">
      <h1 className="inline">{label}</h1>
      <Progress
        value={value}
        className="w-full h-2 border border-[#1A1B35] rounded-full flex-1 bg-[#1A1B35]"
      />
      <h1 className="">{percentage}</h1>
    </div>
  );
};

export default RatingIndicator;
