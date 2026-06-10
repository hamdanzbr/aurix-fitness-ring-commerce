type SectionTitleProps = {
  step: string;
  title: string;
};

const SectionTitle = ({
  step,
  title,
}: SectionTitleProps) => {
  return (
    <div className="flex items-center gap-3">
      {/* Step Circle */}
      <div
        className="
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-full
          border
          border-[#1C78FA]/30
          bg-[#1C78FA]/10
          text-[11px]
          font-semibold
          text-[#60A5FA]
        "
      >
        {step}
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-white">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;