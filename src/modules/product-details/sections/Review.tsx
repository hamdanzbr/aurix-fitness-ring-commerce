import RatingCard from "../components/RatingCard";
import ReviewCard from "../components/ReviewCard";

const Review = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-8">
        <h1 className="font-bold text-4xl">Endorsed by high performers</h1>
        <h1 className="text-zinc-500 text-sm">
          Based on 1420 worldwide verified purchase
        </h1>
      </div>

      <div className="flex gap-6 mt-6">
        <RatingCard />
        <div className=" w-full space-y-3">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default Review;
