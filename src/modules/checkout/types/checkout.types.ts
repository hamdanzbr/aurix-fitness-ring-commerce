import { InferType } from "yup";
import { createOrderSchema } from "../validations/validation";

export type CreateOrderFormValues =
  InferType<typeof createOrderSchema>;