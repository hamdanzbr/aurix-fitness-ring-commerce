import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import RatingIndicator from "./RatingIndicator";

const RatingCard = () => {
  return (
<Card
  className="
    rounded-3xl
    border
    border-[#1A1D2E]
    ring-[#1A1D2E]
    bg-[#0C0C17]
    p-8
    shadow-[0_0_40px_rgba(59,130,246,0.05)]
  "
>
          <div>
        <h1 className="text-5xl font-bold tracking-tight">
          4.9<span className="ml-1 text-lg text-zinc-500"> / 5.0</span>
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
            <h1 className="text-zinc-500 mt-2 text-sm">98% users recommend Aurix</h1>
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
