import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const ReviewCard = () => {
  return (
    <Card className="w-full bg-[#0C0C17] rounded-xl ring-[#0C0C17] p-8">
      <div className="flex items-center gap-3">
        <Avatar />
        <div>
          <h1 className="font-bold text-sm">John Doe</h1>
          <p className="text-zinc-500 text-xs">2 Days ago</p>
        </div>
        <div className="flex border bg-[#11182E] border-zinc-500 rounded-full gap-1 px-3 py-1 items-center">
          <Check className="text-[#3B82F6]" size={16} />
          <h1 className="text-xs text-[#3B82F6] font-bold">Verified user</h1>
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
        <h1 className="font-bold text-lg">The benchmark of smart wearables</h1>
        <p className="text-zinc-500 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, laborum deleniti, eveniet suscipit accusantium exercitationem quam magni debitis, dolorum officia ipsa. Necessitatibus ipsam voluptate nihil fugiat culpa eos temporibus veniam.</p>
      </div>
    </Card>
  );
};

export default ReviewCard;
