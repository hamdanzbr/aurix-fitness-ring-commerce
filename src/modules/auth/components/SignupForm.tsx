"use client";

import { Button } from "@/components/ui/button";
import { AtSign, LockKeyhole, Mail, User } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  AUTH_COPY,
  AUTH_LINKS,
} from "../constants/auth.constants";
import { usePasswordVisibility } from "../hooks/usePasswordVisibility";
import { AuthInput } from "./AuthInput";
import { PasswordToggle } from "./PasswordToggle";
import { SocialLoginButton } from "./SocialLoginButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validations/auth.validations";
import { useForm, useWatch } from "react-hook-form";
import type { Resolver, UseFormRegisterReturn } from "react-hook-form";
import type { InferType } from "yup";
import Error from "./Error";
import { FitnessGoalSelector } from "./FitnessGoalSelector";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { useRegister } from "@/hooks/api/useRegister";
import { useRouter } from "next/navigation";

type SignupPasswordFieldProps = {
  autoComplete: string;
  label: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: string;
};

function SignupPasswordField({
  autoComplete,
  label,
  placeholder = "Password",
  registration,
  error,
}: SignupPasswordFieldProps) {
  const { inputType, isPasswordVisible, togglePasswordVisibility } =
    usePasswordVisibility();

  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold text-white">{label}</span>

      <span className="flex h-9 items-center gap-3 rounded-lg border border-white/[0.08] bg-[#1b1c21] px-3">
        <LockKeyhole className="h-4 w-4 text-white/48" aria-hidden="true" />

        <input
          {...registration}
          className="min-w-0 flex-1 bg-transparent text-sm font-medium text-white outline-none"
          type={inputType}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />

        <PasswordToggle
          isVisible={isPasswordVisible}
          onToggle={togglePasswordVisibility}
        />
      </span>

      {error && <Error error={error} />}
    </label>
  );
}

export function SignupForm() {
  const{mutate:signup,isPending}=useRegister()
  const router=useRouter()
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<InferType<typeof registerSchema>>({
    resolver: yupResolver(registerSchema) as unknown as Resolver<
      InferType<typeof registerSchema>
    >,
    mode: "onChange",
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      primaryGoal: "",
    },
  });

  const password = useWatch({ control, name: "password", defaultValue: "" });
  const onSubmit = (data: InferType<typeof registerSchema>) => {
    signup(data,{
      onSuccess:()=>{
        router.push('/home')
      }
    });
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 sm:grid-cols-2">
        <AuthInput
          fieldClassName="h-9"
          icon={<User className="h-4 w-4" />}
          label="Full Name"
          placeholder="John Doe"
          error={errors.name?.message}
          {...register("name")}
        />
        <AuthInput
          fieldClassName="h-9"
          icon={<AtSign className="h-4 w-4" />}
          label="Username"
          placeholder="johndoe"
          error={errors.username?.message}
          {...register("username")}
        />
      </div>

      <AuthInput
        fieldClassName="h-9"
        icon={<Mail className="h-4 w-4" />}
        label="Email Address"
        type="email"
        placeholder="john@example.com"
        error={errors.email?.message}
        {...register("email")}
      />

      <div className="space-y-3">
        <div className="grid gap-4 sm:grid-cols-2">
          <SignupPasswordField
            label="Password"
            autoComplete="new-password"
            registration={register("password")}
            error={errors.password?.message}
          />

          <SignupPasswordField
            label="Confirm Password"
            autoComplete="new-password"
            registration={register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
        </div>
        <PasswordStrengthMeter password={password} />
      </div>

      <FitnessGoalSelector register={register} />

      <label className="flex items-start gap-3 text-xs leading-5 text-white/58">
        <input
          type="checkbox"
          name="terms"
          className="mt-0.5 h-3.5 w-3.5 rounded border-white/[0.08] bg-[#1b1c21] accent-[#78f3ff]"
        />
        <span>
          By creating an account, you agree to our{" "}
          <Link
            className="font-bold text-white underline decoration-white/35 underline-offset-3"
            href={AUTH_LINKS.terms}
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            className="font-bold text-white underline decoration-white/35 underline-offset-3"
            href={AUTH_LINKS.privacy}
          >
            Privacy Policy
          </Link>
        </span>
      </label>

      <div className="grid gap-3 pt-1 sm:grid-cols-2">
        <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.99 }}>
          <Button
            disabled={!isValid || isPending}
            type="submit"
            className="h-10 w-full rounded-lg bg-white text-xs font-semibold text-black transition hover:bg-[#dffbff]"
          >
            {isPending ? "Creating..." : "Create Account"}
          </Button>
        </motion.div>
        <SocialLoginButton
          provider="google"
          label="Sign up with Google"
          className="h-10 text-xs"
        />
      </div>

      <p className="pt-3 text-center text-xs text-white/62">
        {AUTH_COPY.loginPrompt}{" "}
        <Link
          className="font-bold text-white transition hover:text-[#78f3ff]"
          href={AUTH_LINKS.login}
        >
          {AUTH_COPY.loginCta}
        </Link>
      </p>
    </form>
  );
}
