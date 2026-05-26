import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const ReviewCard = () => {
  return (
    <Card
      className="
    rounded-3xl
    border
    border-[#1A1D2E]
    ring-[#1A1D2E]
    bg-[#0C0C17]
    p-6
    transition-all
    duration-300
    hover:border-[#2B3F74]
    hover:shadow-[0_0_30px_rgba(59,130,246,0.05)]
  "
    >
      <div className="flex flex-wrap items-start gap-4">
        <Avatar className="h-12 w-12 border border-[#1A1D2E]">
          <AvatarFallback className="bg-[#111827] text-white">
            JD
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-bold text-sm">John Doe</h1>
          <p className="text-zinc-500 text-xs">2 Days ago</p>
        </div>
        <div className="flex border bg-[#10192B] border-[#1D355E] rounded-full gap-1 px-3 py-1 items-center">
          <Check className="text-[#3B82F6]" size={16} />
          <h1 className="text-xs text-[#60A5FA] font-bold">Verified user</h1>
        </div>
        <div className="flex items-center gap-1 ml-auto">
          <Star size={12} className="fill-[#60A5FA] text-[#60A5FA]" />
          <Star size={12} className="fill-[#60A5FA] text-[#60A5FA]" />
          <Star size={12} className="fill-[#60A5FA] text-[#60A5FA]" />
          <Star size={12} className="fill-[#60A5FA] text-[#60A5FA]" />
          <Star size={12} className="fill-[#60A5FA] text-[#60A5FA]" />
        </div>
      </div>

      <div>
        <h1 className="text-xl font-semibold tracking-tight">The benchmark of smart wearables</h1>
        <p className="mt-3 leading-relaxed text-zinc-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
          laborum deleniti, eveniet suscipit accusantium exercitationem quam
          magni debitis, dolorum officia ipsa. Necessitatibus ipsam voluptate
          nihil fugiat culpa eos temporibus veniam.
        </p>
      </div>
    </Card>
  );
};

export default ReviewCard;
