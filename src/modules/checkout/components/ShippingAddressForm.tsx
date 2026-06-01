"use client";

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import SectionTitle from "./SectionTitle";

const ShippingAddressForm = () => {
  return (
    <div className="space-y-5">
      <SectionTitle
        step="01"
        title="Shipping Address"
      />

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
          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
              Full Name *
            </label>

            <Input
              placeholder="John Doe"
              className="
                h-12
                rounded-xl
                border-[#1A1D2E]
              "
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
              Phone Number *
            </label>

            <Input
              placeholder="+1 (555) 000-0000"
              className="
                h-12
                rounded-xl
                border-[#1A1D2E]
              "
            />
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
              Email Address *
            </label>

            <Input
              placeholder="john@example.com"
              className="
                h-12
                rounded-xl
                border-[#1A1D2E]
              "
            />
          </div>

          {/* Address 1 */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
              Address Line 1 *
            </label>

            <Input
              placeholder="123 Wellness Street"
              className="
                h-12
                rounded-xl
                border-[#1A1D2E]
              "
            />
          </div>

          {/* Address 2 */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
              Address Line 2
            </label>

            <Input
              placeholder="Apt, Suite, Floor (optional)"
              className="
                h-12
                rounded-xl
                border-[#1A1D2E]
              "
            />
          </div>

          {/* City */}
          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
              City *
            </label>

            <Input
              placeholder="New York"
              className="
                h-12
                rounded-xl
                border-[#1A1D2E]
              "
            />
          </div>

          {/* State */}
          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
              State / Province *
            </label>

            <Input
              placeholder="NY"
              className="
                h-12
                rounded-xl
                border-[#1A1D2E]
              "
            />
          </div>

          {/* Country */}
          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
              Country *
            </label>

            <Input
              placeholder="United States"
              className="
                h-12
                rounded-xl
                border-[#1A1D2E]
              "
            />
          </div>

          {/* Postal Code */}
          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
              Postal Code *
            </label>

            <Input
              placeholder="10001"
              className="
                h-12
                rounded-xl
                border-[#1A1D2E]
              "
            />
          </div>

          {/* Landmark */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
              Landmark
            </label>

            <Input
              placeholder="Near Central Park (optional)"
              className="
                h-12
                rounded-xl
                border-[#1A1D2E]
              "
            />
          </div>
        </div>

        {/* Checkbox */}
        <div className="mt-6 flex items-center gap-3">
          <Checkbox id="save-address" />

          <label
            htmlFor="save-address"
            className="text-sm text-zinc-400"
          >
            Save this address for future orders
          </label>
        </div>
      </Card>
    </div>
  );
};

export default ShippingAddressForm;