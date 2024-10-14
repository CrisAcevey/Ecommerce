"use client"
import { useContext } from "react";
import { UserContext } from "@/context/user";

function DatosDelUsuarioComponent() {
    const {user} = useContext(UserContext)

    return ( <div>
        <p>{user?.user?.name}</p>
        <p>{user?.user?.email}</p>
        <p>{user?.user?.phone}</p>
        <p>{user?.user?.address}</p>
    </div> );
}

export default DatosDelUsuarioComponent;