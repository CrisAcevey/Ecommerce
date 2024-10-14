export interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    password: string;
    credential?: ICredential;
    orders?: IOrderResponse[];

}

export interface IOrderResponse{
    id: number;
    status: string;
    date: string;
    user: IUser;
    products: IProduct[];
}




export interface IProduct {
    id: number; 
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

export interface ICategory {
    id: number;
    name: string;
    products: IProduct[];
}

export interface IOrder {
    id: number;
    status: string;
    date: Date;
}

export interface ICredential {
    id: number;
    password: string;
}

export interface IRegisterUser {
    name: string
    email: string
    password: string
    address: string
    phone: string
}

export interface ILogin {
    email:string;
    password: string;
}

export interface ICreateOrder {
    userId: number;
    products: number[];
}


export interface IProductCardProps {
    product: IProduct;
    remove?: ()=>void;
}

export interface IProductGridProps{
    products: IProduct[];
}

export interface IProductContext{
    products: IProduct[];
}

export interface IProductContextType {
    products: IProduct[];
    isLoading: boolean;
    error: string | null;
}

export interface ICartContextType{
    cartItems: IProduct[];
    addToCart: (product: number) => void;
    removeFromCart: (product:number) => void;
    total: number;
    proceedToCheckout: ()=>void;
}


export interface IUserResponse {
    login:boolean;
    user: Partial<IUser> | null;
    token: string;
}

export interface IUserContextType {
    user: Partial<IUserResponse> | null;
    setUser: React.Dispatch<React.SetStateAction<Partial<IUserResponse> | null>>;
    isLogged: boolean;
    setIsLogged: (isLogged: boolean) => void;
    login: (credentials: ILogin) => Promise<boolean>;
    register: (user: Omit<IUser, "id">) => Promise<boolean>;
    getOrders: () => void;
    orders: IOrderResponse[] | [];
    logOut: () => void;
}