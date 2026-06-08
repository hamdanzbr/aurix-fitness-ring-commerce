import GuestRoute from "@/components/routes/GuestRoute";
import { LoginPage } from "@/modules/auth/pages/LoginPage";

export default function Page() {
  return(
    <GuestRoute>
     <LoginPage />
    </GuestRoute>
    );
}
