"use client";

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import SectionTitle from "./SectionTitle";
import { CreateOrderFormValues } from "../types/checkout.types";
import OrderInput from "./OrderInput";

const ShippingAddressForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateOrderFormValues>();
  return (
    <div className="space-y-5">
      <SectionTitle step="01" title="Shipping Address" />

      <Card
        className="
          rounded-3xl
          border
          border-[#151827]
          p-6
          lg:p-8
          ring-0
        "
      >
        <div className="grid gap-5 md:grid-cols-2">
          {/* Full Name */}
          <OrderInput
            label="Full Name *"
            placeholder="John Doe"
            registration={register("shippingAddress.fullName")}
            error={errors.shippingAddress?.fullName?.message}
          />

          {/* Phone */}
          <OrderInput
            label="Phone Number *"
            placeholder="+1 (555) 000-0000"
            registration={register("shippingAddress.phoneNumber")}
            error={errors.shippingAddress?.phoneNumber?.message}
            type="tel"
          />

          {/* Email */}
          <div className="md:col-span-2">
            <OrderInput
              label="Email Address *"
              placeholder="john@example.com"
              registration={register("shippingAddress.email")}
              error={errors.shippingAddress?.email?.message}
              type="email"
            />
          </div>

          {/* Address 1 */}
          <div className="md:col-span-2">
            <OrderInput
              label="Address Line 1 *"
              placeholder="123 Wellness Street"
              registration={register("shippingAddress.addressLine1")}
              error={errors.shippingAddress?.addressLine1?.message}
            />
          </div>

          {/* Address 2 */}
          <div className="md:col-span-2">
            <OrderInput
              label="Address Line 2"
              placeholder="Apt, Suite, Floor (optional)"
              registration={register("shippingAddress.addressLine2")}
              error={errors.shippingAddress?.addressLine2?.message}
            />
          </div>

          {/* City */}
          <OrderInput
            label="City *"
            placeholder="New York"
            registration={register("shippingAddress.city")}
            error={errors.shippingAddress?.city?.message}
          />
          {/* State */}
          <OrderInput
            label="State *"
            placeholder="NY"
            registration={register("shippingAddress.state")}
            error={errors.shippingAddress?.state?.message}
          />

          {/* Country */}
          <OrderInput
            label="Country *"
            placeholder="United States"
            registration={register("shippingAddress.country")}
            error={errors.shippingAddress?.country?.message}
          />

          {/* Postal Code */}
          <OrderInput
            label="Postal Code *"
            placeholder="10001"
            registration={register("shippingAddress.postalCode")}
            error={errors.shippingAddress?.postalCode?.message}
          />
          {/* Landmark */}
          <OrderInput
            label="Landmark"
            placeholder="Near Central Park (optional)"
            registration={register("shippingAddress.landmark")}
            error={errors.shippingAddress?.landmark?.message}
          />
        </div>

        {/* Checkbox */}
        <div className="mt-6 flex items-center gap-3">
          <Checkbox id="save-address" />

          <label htmlFor="save-address" className="text-sm text-zinc-400">
            Save this address for future orders
          </label>
        </div>
      </Card>
    </div>
  );
};

export default ShippingAddressForm;
