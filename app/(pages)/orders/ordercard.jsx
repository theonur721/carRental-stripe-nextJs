import Image from "next/image";

const OrderCard = ({ order }) => {
  console.log(order);

  return (
    <div className="border border-zinc-700/40 bg-zinc-900/30 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-xl hover:bg-zinc-800/40 transition-all duration-300 cursor-pointer grid items-center grid-cols-3 xl:grid-cols-5 gap-4">
      <div className="flex justify-center">
        <Image
          src={order.product.imageUrl}
          width={200}
          height={200}
          alt={order.product.make}
          unoptimized
          className="rounded-lg object-cover shadow-sm hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h2 className="flex flex-col md:flex-row md:items-center gap-1 text-lg">
        <span className="text-zinc-300">{order.product.make}</span>
        <span className="font-bold text-white md:ms-2">
          {order.product.model}
        </span>
      </h2>

      <h2 className="flex flex-col md:flex-row md:items-center gap-1 text-sm">
        <span className="text-zinc-400 whitespace-nowrap">Ödenen Tutar:</span>
        <span className="font-bold text-green-500">{order.money_spend}</span>
      </h2>

      <h2 className="flex flex-col md:flex-row md:items-center gap-1 text-sm max-xl:ps-7">
        <span className="text-zinc-400 whitespace-nowrap">Alım Tarihi:</span>
        <span className="font-bold text-blue-400">
          {new Date(order.createdAt).toLocaleDateString()}
        </span>
      </h2>

      <h2 className="flex flex-col md:flex-row md:items-center gap-1 text-sm">
        <span className="text-zinc-400 whitespace-nowrap">Ödeme Tipi:</span>
        <span className="font-bold text-purple-400">{order.type}</span>
      </h2>
    </div>
  );
};

export default OrderCard;
