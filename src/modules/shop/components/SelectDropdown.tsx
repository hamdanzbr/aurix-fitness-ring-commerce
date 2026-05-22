"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectOptionType } from "../types/shop.types";

export type SelectDropdownProps = {
  placeholder?: string;
  options: SelectOptionType[];
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
};

const SelectDropdown = ({
  placeholder = "Select",
  options,
  value,
  onValueChange,
  className,
}: SelectDropdownProps 
) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger
        className={`
          w-[190px]
          bg-[#0C0C0D]
          border-[#1A1A1C]
          text-white
          focus:ring-0
          focus:ring-offset-0
          ${className}
        `}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent
        className="
          border-[#1A1A1C]
          bg-[#0C0C0D]
          text-white
        "
      >
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="focus:bg-[#18181B] focus:text-white"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectDropdown;