"use client";

import { createContext, useEffect, useState } from "react"
import { ICartContextType, IProduct } from "../../public/interfaces/Interfaces";
import { addItem, removeItems } from "@/utils/helpers";


export const CartContext = createContext<ICartContextType>({
    cartItems: [],
    addToCart: ()=>{},
    removeFromCart: ()=>{},
    total: 0,
    proceedToCheckout: ()=>{}
});

const checkout = async (cartItem: IProduct[]) =>{
    try {
        const products = cartItem.map((item) => item.id);
        const token = localStorage.getItem("token");
        const response = await fetch("https://pm-4-fe-cris-acevey-3xzr.vercel.app/orders", {
            method:"POST",
            headers:{
                Authorization: `${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({products}),
        });
        
    } catch (error) {
        alert(error);
    }
}


export const CartProvider = ({children}:{children: React.ReactNode}) =>{

        const [ cartItems, setCartItems ] = useState<IProduct[]>([]);
        const [total, setTotal] = useState(0);

        const addToCart = async (product: number) =>{
            const updateCart = await addItem(cartItems, product);
            setCartItems(updateCart);
        }

        const removeFromCart = (product:number)=>{
            setCartItems(removeItems(cartItems, product));
        }

        const proceedToCheckout = ()=>{
            checkout(cartItems);
            setCartItems([]);
        }

        useEffect(()=>{
            const total = cartItems.reduce((acc, item) => acc + item.price, 0);
            setTotal(total);
        }, [cartItems]);

        return (
            <CartContext.Provider value={{cartItems, total, addToCart, removeFromCart, proceedToCheckout}}>{children}</CartContext.Provider>
        );

};