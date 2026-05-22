import { Slider } from "@/components/ui/slider";

const SidebarFilters = () => {
  return (
    <div className="w-[300px] p-4 rounded-lg space-y-9">
      <div className="flex flex-col">
        <h1 className="font-bold">Category</h1>
        <div className="flex flex-col mt-3 gap-1">
          {[
            "Smart Rings",
            "Fitness Trackers",
            "Sleep Monitoring",
            "Digital Rings",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 justify-between"
            >
              <h1 className="cursor-pointer text-[#A19CA5] text-sm">{item}</h1>
              <h1 className="text-sm text-[#A19CA5]">{"12"}</h1>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className="font-bold mt-6">Price Range</h1>
        <Slider defaultValue={[0,100]} max={100} min={1} className={" border mt-3"} />
      </div>

      <div className="flex flex-col mt-3">
        <h1 className="font-bold">Finish</h1>
        <div className="flex flex-col mt-3 gap-1">
          {["Matte Black", "Titanium", "Silver", "Rose Gold"].map(
            (item, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={item}
                  id={item}
                  className="accent-[#1C78FA]"
                />
                <h1 className="cursor-pointer text-[#A19CA5] text-sm">
                  {item}
                </h1>
                <h1 className="text-sm text-[#A19CA5] ml-auto">{"12"}</h1>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="flex flex-col mt-3">
        <h1 className="font-bold">Features</h1>
        <div className="flex flex-col mt-3 gap-1">
          {["Heart rate", "Sleep Tracking", "Water Resistance", "GPS"].map(
            (item, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={item}
                  id={item}
                  className="accent-[#1C78FA]"
                />
                <h1 className="cursor-pointer text-[#A19CA5] text-sm">
                  {item}
                </h1>
                <h1 className="text-sm text-[#A19CA5] ml-auto">{"12"}</h1>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarFilters;
