import { Order } from "@/types/order";
const HeaderItem = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div>
    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{label}</p>

    <h1 className="mt-1 font-bold">{value}</h1>
  </div>
);
const OrderCardHeader = ({ order }: { order: Order }) => {
  return (
    <div
      className="
            flex
            flex-col
            gap-5
            border-b
            border-[#1A1D2E]
            bg-[#0E1020]
            p-5
            lg:flex-row
            lg:items-center
          "
    >
      <HeaderItem label="Order Id" value={order._id} />
      <HeaderItem label="Placed" value={new Date(order.createdAt).toLocaleDateString()} />
      <HeaderItem
        label="Delivery"
        value={order.updatedAt ? new Date(order.updatedAt).toLocaleDateString() : "Pending"}
      />

      {/* Status */}
      <div className="lg:ml-auto">
        <div
          className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-500/20
                bg-emerald-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-emerald-400
              "
        >
          <div className="h-2 w-2 rounded-full bg-emerald-400 capitalize" />
          <h1 className="capitalize">{order.orderStatus}</h1>
        </div>
      </div>
    </div>
  );
};

export default OrderCardHeader;
