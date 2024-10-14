"use client";
import { useContext, useEffect, useState, useCallback } from "react";
import { UserContext } from "@/context/user";
import { useRouter } from "next/navigation";

function UserComponent() {
  const { user, orders, getOrders, isLogged } = useContext(UserContext);
  const [ordersLoaded, setOrdersLoaded] = useState(false);
  const router = useRouter();

  const memoizedGetOrders = useCallback(() => {
    if (!ordersLoaded) {
      getOrders();
      setOrdersLoaded(true);
    }
  }, [ordersLoaded, getOrders]);

  useEffect(() => {
    if (!isLogged) {
      router.push("/home");
    } else {
      memoizedGetOrders();
    }
  }, [isLogged, memoizedGetOrders, router]);

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
        <div className="max-w-lg w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900  mb-4">
              {user?.user?.name}
            </h1>
            <p className="text-gray-700  mb-2">Email: {user?.user?.email}</p>
            <p className="text-gray-700 0 mb-4">Phone: {user?.user?.phone}</p>
            <p className="text-gray-700  mb-4">Phone: {user?.user?.address}</p>
          </div>
          <div className="border-t border-gray-200 ">
            <h2 className="text-xl font-semibold text-gray-900  p-4">
              Compras
            </h2>

            <div className="border-b border-gray-200  p-4">
              <div className="mt-4 -mb-3">
                <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden ">
                  <div
                    className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"
                    style={{ backgroundPosition: `10px 10px` }}
                  ></div>
                  <div className="relative rounded-xl overflow-auto">
                    <div className="shadow-sm overflow-hidden my-8">
                      <div className="table border-collapse table-auto w-full text-sm">
                        <div className="table-header-group">
                          <div className="table-row">
                            <div className="table-cell border-b  font-medium p-4 pl-8 pt-0 pb-3 text-black  text-left">
                              Fecha
                            </div>
                            <div className="table-cell border-b  font-medium p-4 pr-8 pt-0 pb-3 text-black  text-left">
                              Estado
                            </div>
                          </div>
                        </div>
                        {orders?.map((order: any) => (
                          <div
                            key={order.id}
                            className="table-row-group bg-white "
                          >
                            <div className="table-row">
                              <div className="table-cell border-b border-slate-100  p-4 pl-8 text-black ">
                                {order.date.split("T")[0]}
                              </div>
                              <div className="table-cell border-b border-slate-100  p-4 pr-8 text-green-700 ">
                                {order.status}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserComponent;
