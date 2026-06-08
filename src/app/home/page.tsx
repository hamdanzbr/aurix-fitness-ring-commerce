import Home from "@/modules/home/Home";
import CustomerLayout from "../../components/layout/CustomerLayout";
import GuestRoute from "@/components/routes/GuestRoute";

function page() {
  return (
      <CustomerLayout>
        <Home />
      </CustomerLayout>
  );
}

export default page;
