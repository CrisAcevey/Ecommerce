"use client";
import Image from "next/image";
import { IProductCardProps } from "../../../public/interfaces/Interfaces";
import { useRouter } from "next/navigation";
import AddToCart from "../AddToCart";

function ProductCard({ product }: IProductCardProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/detail/${product.id}`);
  };

  return (
    <div className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={300}
        className="w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">
          {product.name}
        </h2>
        <p className="text-xl font-bold text-gray-900 mb-4">${product.price}</p>
        <div>
          <button
            onClick={handleClick}
            className="bg-black text-white font-semibold py-2 px-4 m-2 rounded-lg shadow-md hover:bg-yellow-300 hover:text-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:ring-opacity-50 text-center"
          >
            Detalles
          </button>
          <AddToCart id={product.id} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
