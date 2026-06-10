"use client";
import FormSection from "./sections/FormSection";
import Header from "./sections/Header";
import SubmitSection from "./sections/SubmitSection";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateOrderFormValues } from "./types/checkout.types";
import { createOrderSchema } from "./validations/validation";
import { useCreateOrder } from "@/hooks/api/useOrders";

const Checkout = () => {
  const methods = useForm<CreateOrderFormValues>({
  resolver: yupResolver(createOrderSchema),
  mode: "onChange",
  defaultValues: {
    shippingAddress: {
      fullName: "",
      phoneNumber: "",
      email: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
      landmark: "",
    },
    deliveryMethod: "standard",
    paymentMethod: "cod",
  },
});
const{mutate:createOrder,isSuccess,data:orderSuccessData,isPending}=useCreateOrder()
const onSubmit = (data: CreateOrderFormValues) => {
  createOrder(data);
};
  return (
    <div className="mx-auto max-w-[1600px] px-4 py-8 lg:px-8">
      <Header />

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_420px]">
            {!isSuccess && <FormSection />}
            <SubmitSection orderSuccessData={orderSuccessData} isPending={isPending || false} isSuccess={isSuccess} />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Checkout;
