import FormSection from "./sections/FormSection"
import Header from "./sections/Header"
import SubmitSection from "./sections/SubmitSection"

const Checkout = () => {
  return (
    <div className="mx-auto max-w-[1600px] px-4 py-8 lg:px-8">
      <Header />

      <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_420px]">
        <FormSection />
        <SubmitSection />
      </div>
    </div>
  );
};

export default Checkout;