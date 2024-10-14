"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { IProduct, IProductContextType } from "../../public/interfaces/Interfaces";
import { fetchProducts } from "@/lib/server/fetchProducts";



export const ProductContext = createContext<IProductContextType>({
    products: [],
    isLoading: true,
    error: null,
})

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await fetchProducts();
                setProducts(products);
                setIsLoading(false);
            } catch (err) {
                setError("Failed to fetch products");
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <ProductContext.Provider value={{ products, isLoading, error }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
};