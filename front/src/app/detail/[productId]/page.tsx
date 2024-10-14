import Image from "next/image";
import { fetchProductById } from "@/lib/server/fetchProducts";
import AddToCart from "@/components/AddToCart";

async function ProductDetail({ params }: { params: { productId: string } }) {
  const products = await fetchProductById(params.productId);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-900  mb-4">
          {products.name}
        </h1>
        <div className="mb-4 flex justify-center">
          <Image
            src={products.image}
            alt={products.name}
            width={300}
            height={300}
            className="object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">{products.description}</p>
        <p className="text-xl font-semibold text-gray-900 mb-6">
          $ {products.price}
        </p>
        <AddToCart id={products.id} />
      </div>
    </div>
  );
}

export default ProductDetail;
