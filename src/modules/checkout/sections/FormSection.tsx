import ShippingAddressForm from "../components/ShippingAddressForm";
import DeliveryMethods from "../components/DeliveryMethods";
import PaymentMethods from "../components/PaymentMethods";

const FormSection = () => {
  return (
    <div className="space-y-8">
      <ShippingAddressForm />

      <DeliveryMethods />

      <PaymentMethods />
    </div>
  );
};

export default FormSection;