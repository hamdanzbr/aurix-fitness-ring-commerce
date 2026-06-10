import type { Id } from "./api";

export type UserRole = "customer" | "admin";

export type User = {
  id: Id;
  name: string;
  email: string;
  role?: UserRole;
  phone?: string;
  avatarUrl?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  phone?: string;
};

export type AuthResponse = {
  user: User;
  accessToken: string;
};

export type UpdateProfilePayload = Partial<Pick<User, "name" | "phone" | "avatarUrl">>;
