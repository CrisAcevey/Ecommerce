"use client"
import Link from "next/link"
import { useContext } from "react"
import { UserContext } from "@/context/user"


export default function Navbar() {
    const {isLogged, logOut} = useContext(UserContext);
    return (
        <>
        <nav className="bg-black">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/">
                            <span className="text-white hover:bg-white hover:text-black rounded-lg p-2 m-1">Ecomerce</span>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="ml-2">
                        <Link href="/home" className="text-white hover:bg-white hover:text-black rounded-lg p-2 m-1">Productos</Link>
                        <Link href="/carrito" className="text-white hover:bg-white hover:text-black rounded-lg p-2 m-1">Carrito</Link>
                        {isLogged ? <Link href="/user" className="text-white hover:bg-white hover:text-black rounded-lg p-2 m-1">Usuario</Link> : <Link href="/singup" className="text-black bg-yellow-200 hover:bg-white rounded-lg p-2 m-1">Ingresar o Registrarse</Link> }
                        {isLogged && (<button onClick={logOut} className="text-black bg-yellow-200 hover:bg-white rounded-lg p-2 m-1 border-none focus:outline-none">Desconectarse</button>)}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}