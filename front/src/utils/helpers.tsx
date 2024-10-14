import { fetchProductById } from "@/lib/server/fetchProducts";
import { IProduct } from "../../public/interfaces/Interfaces";

export const addItem = async (
    cartItems: IProduct[],
    product: number,
): Promise<IProduct[]>=>{
    const existingProuct = cartItems.find((item) => item.id === product );

    if(existingProuct){
        return[...cartItems, existingProuct];
    }
    const data = await fetchProductById(product.toString());
    return [...cartItems, data];
}

export const removeItems = (cartItems: IProduct[], productId: number): IProduct[] => {
    const index = cartItems.findIndex(item => item.id === productId);
    if (index !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        return updatedCartItems;
    }
    return cartItems;
};