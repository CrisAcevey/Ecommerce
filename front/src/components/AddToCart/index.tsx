"use client";

import { useContext } from "react";
import { CartContext } from "@/context/cart";
import { UserContext } from "@/context/user";
import Swal from 'sweetalert2';

function AddToCart({ id }: { id: number }) {
  const { addToCart } = useContext(CartContext);
  const { isLogged } = useContext(UserContext);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (!isLogged) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Necesitas iniciar sesión para añadir productos al carrito.',
      });
      return;
    }

    addToCart(id);
    Swal.fire({
      icon: 'success',
      title: '¡Producto añadido!',
      text: 'Producto añadido al carrito exitosamente.',
      timer: 1500,
      showConfirmButton: false,
    });
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-300 hover:text-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:ring-opacity-50"
      >
        Añadir al carrito
      </button>
    </div>
  );
}

export default AddToCart;