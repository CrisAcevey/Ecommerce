"use client"
import { IProduct } from "../../../public/interfaces/Interfaces";
import ProductCard from "../ProductComponent";
import { useContext } from "react";
import { ProductContext } from "@/context/products";

 function ProductsGridComponent() {
  
    const {products, isLoading, error} = useContext(ProductContext);
    if (isLoading) return (<p>Loading products..</p>)
        if (error) return (<p>{error}</p>)
    return (
        <div className="flex justify-center m-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product: IProduct) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  </div>
    );
}

export default ProductsGridComponent;