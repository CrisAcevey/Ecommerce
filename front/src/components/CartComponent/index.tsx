"use client";

import { useContext } from "react";
import { CartContext } from "@/context/cart";
import CartItem from "../CartItem";
import { UserContext } from "@/context/user";
import Swal from "sweetalert2";

function CartComponent() {
  const { cartItems, removeFromCart, total, proceedToCheckout } =
    useContext(CartContext);
  const { getOrders, isLogged } = useContext(UserContext);

  const handleClick = () => {
    if (!isLogged) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Necesitas iniciar sesión para completar la compra.",
      });
      return;
    }

    proceedToCheckout();
    getOrders();
    Swal.fire({
      icon: "success",
      title: "¡Compra realizada!",
      text: "Compra realizada con éxito. Ingrese en la sección de usuario para ver sus compras.",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="p-4 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
              >
                <CartItem
                  product={item}
                  remove={() => removeFromCart(item.id)}
                />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-700">
              <h1 className="mt-4 text-3xl font-extrabold text-gray-900 mb-6 shadow-md">
                No tienes productos en el carrito
              </h1>
            </div>
          )}
        </div>
        {total > 0 && (
          <div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow-lg max-w-sm mx-auto">
            <p className="text-2xl font-bold text-gray-900 mb-4">
              Total: ${total}
            </p>
            <button
              onClick={handleClick}
              className="w-full bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-300 hover:text-black transition duration-300"
            >
              Comprar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartComponent;
