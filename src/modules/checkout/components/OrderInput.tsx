import { Input } from "@/components/ui/input";
import Error from "@/modules/auth/components/Error";
import { UseFormRegisterReturn } from "react-hook-form";

type OrderInputProps = {
  label: string;
  placeholder?: string;
  error?: string;
  registration?: UseFormRegisterReturn;
  className?: string;
  type?: string;
};

const OrderInput = ({
  label,
  placeholder,
  error,
  registration,
  className,
  type = "text",
}: OrderInputProps) => {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
        {label}
      </label>

      <Input
        {...registration}
        placeholder={placeholder}
        className={`
          h-12
          rounded-xl
          border-[#1A1D2E]
          ${className}
        `}
        type={type}
      />

      {error && <Error error={error} />}
    </div>
  );
};

export default OrderInput;