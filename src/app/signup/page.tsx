import GuestRoute from "@/components/routes/GuestRoute";
import SignupPage from "@/modules/auth/pages/SignupPage";

export default function Page() {
  return (
    <GuestRoute>
      <SignupPage />
    </GuestRoute>
  );
}
