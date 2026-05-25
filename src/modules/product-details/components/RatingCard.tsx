import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import RatingIndicator from "./RatingIndicator";

const RatingCard = () => {
  return (
    <Card className="px-6 bg-[#0C0C17] rounded-xl ring-[#0C0C17] w-1/3 h-min">
      <div>
        <h1 className="text-3xl font-bold">
          4.9 <span className="text-xs text-zinc-500"> / 5.0</span>
        </h1>
      </div>

      <div>
          <div className="flex items-center gap-1 mt-3">
            <Star size={12} className="fill-[#60A5FA] text-[#60A5FA]" />
            <Star size={12} className="fill-[#60A5FA] text-[#60A5FA]" />
            <Star size={12} className="fill-[#60A5FA] text-[#60A5FA]" />
            <Star size={12} className="fill-[#60A5FA] text-[#60A5FA]" />
            <Star size={12} className="fill-[#60A5FA] text-[#60A5FA]" />
          </div>
          <div>
            <h1 className="text-zinc-500">98% users recommend Aurix</h1>
          </div>
      </div>

      <div className="flex flex-col gap-3 mt-6">
          <RatingIndicator value={94}label="5 Star" percentage="94%" />
          <RatingIndicator value={2} label="4 Star" percentage="2%" />
          <RatingIndicator value={2} label="3 Star" percentage="2%" />
          <RatingIndicator value={1} label="2 Star" percentage="1%" />
          <RatingIndicator value={1} label="1 Star" percentage="1%" />
      </div>
    </Card>
  );
};

export default RatingCard;
