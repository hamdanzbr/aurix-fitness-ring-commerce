import { UseFormRegister } from "react-hook-form";
import { FITNESS_GOALS } from "../constants/auth.constants";
import { InferType } from "yup";
import { registerSchema } from "../validations/auth.validations";

type FitnessGoalSelectorProps = {
  register: UseFormRegister<InferType<typeof registerSchema>>;
};

export const FitnessGoalSelector = ({ register }: FitnessGoalSelectorProps) => {
  return (
    <fieldset>
      <legend className="mb-3 text-xs font-bold text-white">
        Primary Fitness Goal (Optional)
      </legend>

      <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 sm:grid-cols-3">
        {FITNESS_GOALS.map((goal) => (
          <label key={goal} className="min-w-0">
            <input
              {...register("primaryGoal")}
              className="peer sr-only"
              type="radio"
              value={goal}
            />

            <span className="flex h-8 items-center justify-center rounded-lg border border-white/[0.08] bg-[#1b1c21] px-2 text-center text-[0.68rem] font-semibold text-white/54 transition peer-checked:border-[#4aa3ff] peer-checked:bg-[#17304a] peer-checked:text-[#72b8ff] peer-focus-visible:ring-2 peer-focus-visible:ring-[#78f3ff]/35">
              {goal}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}