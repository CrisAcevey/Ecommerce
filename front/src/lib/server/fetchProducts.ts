import { IProduct } from "../../../public/interfaces/Interfaces";

export async function fetchProducts() {
    try {
        const response = await fetch("https://pm-4-fe-cris-acevey-3xzr.vercel.app/products");
        const products = await response.json();
        return products;
    } catch (error) {
        console.log(error);
    }
    
}

export async function fetchProductById(id: string): Promise<IProduct> {
    const response = await fetch(`https://pm-4-fe-cris-acevey-3xzr.vercel.app/products/${id}`);
    const product = await response.json();
    return product;
}