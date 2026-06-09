// validations/order.validation.ts

import * as yup from "yup";

export const createOrderSchema = yup.object({
  shippingAddress: yup.object({
    fullName: yup.string().required("Full name is required"),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(/^[0-9]{10,15}$/, "Invalid phone number"),

    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email"),

    addressLine1: yup.string().required("Address is required"),

    addressLine2: yup.string().optional(),

    city: yup.string().required("City is required"),

    state: yup.string().required("State is required"),

    country: yup.string().required("Country is required"),

    postalCode: yup.string().required("Postal code is required"),

    landmark: yup.string().optional(),
  }),

  deliveryMethod: yup
    .string()
    .oneOf(["standard", "express"])
    .required(),

  paymentMethod: yup
    .string()
    .oneOf(["cod", "card", "stripe"])
    .required(),
});