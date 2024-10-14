import { IProductCardProps } from "../../../public/interfaces/Interfaces";
import Image from "next/image";

function CartItem({ product, remove }: IProductCardProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4">
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={300}
        className="w-full object-cover"
      />
      <span className="text-xl font-semibold text-gray-900 mb-4">
        {product.name}
      </span>
      <p className="text-lg font-medium text-gray-800 mb-4">
        Precio: ${product.price}
      </p>
      <button
        className="w-full bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-200 hover:text-black transition duration-300"
        onClick={remove}
      >
        Eliminar
      </button>
    </div>
  );
}

export default CartItem;
