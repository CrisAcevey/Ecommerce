import { ILogin, IRegisterUser } from "../../../public/interfaces/Interfaces";

export const postRegister = async (user: IRegisterUser)=>{
    const response = await fetch("https://pm-4-fe-cris-acevey-3xzr.vercel.app/users/register",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
};

export const postLogin = async (credentials: ILogin) =>{
    const response = await fetch("https://pm-4-fe-cris-acevey-3xzr.vercel.app/users/login",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    const data = await response.json();
    return data;
};

export const getUserOrders = async (token: any)=>{
    try {
        const response = await fetch("https://pm-4-fe-cris-acevey-3xzr.vercel.app/users/orders", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching orders:", error);
        return [];
    }
}