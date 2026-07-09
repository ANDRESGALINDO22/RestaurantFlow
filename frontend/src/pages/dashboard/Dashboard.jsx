import { useState } from "react";

import Users from "../users/Users";
import Products from "../products/Products";
import Categories from "../categories/Categories";
import Tables from "../tables/Tables";
import Inventory from "../inventory/Inventory";
import Orders from "../orders/Orders";
import Kitchen from "../kitchen/Kitchen";
import Reports from "../reports/Reports";

export default function Dashboard() {

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    const [modulo, setModulo] = useState("dashboard");

    return (

        <div className="min-h-screen bg-slate-950 text-white flex">

            <aside className="w-72 bg-black border-r border-red-700 p-6">

                <h1 className="text-3xl font-bold text-red-600">
                    RestaurantFlow
                </h1>

                <p className="text-gray-400 mt-2">
                    Sistema POS
                </p>

                <hr className="my-6 border-red-900" />

                <div className="space-y-3">

                    <button
                        onClick={() => setModulo("dashboard")}
                        className="w-full text-left hover:bg-slate-800 p-3 rounded-lg"
                    >
                        📊 Dashboard
                    </button>

                    <button
                        onClick={() => setModulo("usuarios")}
                        className="w-full text-left hover:bg-slate-800 p-3 rounded-lg"
                    >
                        👥 Usuarios
                    </button>

                    <button
                        onClick={() => setModulo("productos")}
                        className="w-full text-left hover:bg-slate-800 p-3 rounded-lg"
                    >
                        🍔 Productos
                    </button>

                    <button
                        onClick={() => setModulo("categorias")}
                        className="w-full text-left hover:bg-slate-800 p-3 rounded-lg"
                    >
                        📂 Categorías
                    </button>

                    <button
                        onClick={() => setModulo("mesas")}
                        className="w-full text-left hover:bg-slate-800 p-3 rounded-lg"
                    >
                        🪑 Mesas
                    </button>

                    <button
                        onClick={() => setModulo("inventario")}
                        className="w-full text-left hover:bg-slate-800 p-3 rounded-lg"
                    >
                        📦 Inventario
                    </button>

                    <button
                        onClick={() => setModulo("pedidos")}
                        className="w-full text-left hover:bg-slate-800 p-3 rounded-lg"
                    >
                        🧾 Pedidos
                    </button>

                    <button
                        onClick={() => setModulo("cocina")}
                        className="w-full text-left hover:bg-slate-800 p-3 rounded-lg"
                    >
                        👨‍🍳 Cocina
                    </button>

                    <button
                        onClick={() => setModulo("reportes")}
                        className="w-full text-left hover:bg-slate-800 p-3 rounded-lg"
                    >
                        📈 Reportes
                    </button>

                </div>

                <button
                    onClick={() => {

                        localStorage.clear();
                        window.location.href = "/";

                    }}
                    className="mt-10 w-full bg-red-900 hover:bg-red-700 p-3 rounded-lg"
                >
                    🚪 Cerrar sesión
                </button>

            </aside>

            <main className="flex-1 p-10">

                <h2 className="text-4xl font-bold">

                    Bienvenido

                    <span className="text-red-500">
                        {" "}{usuario.nombre}
                    </span>

                </h2>

                <p className="text-gray-400 mt-2">
                    Panel de administración RestaurantFlow
                </p>

                <div className="mt-10">

                    {modulo === "dashboard" && (
                        <h2 className="text-3xl">
                            Bienvenido a RestaurantFlow 🚀
                        </h2>
                    )}

                    {modulo === "usuarios" && <Users />}

                    {modulo === "productos" && <Products />}

                    {modulo === "categorias" && <Categories />}

                    {modulo === "mesas" && <Tables />}

                    {modulo === "inventario" && <Inventory />}

                    {modulo === "pedidos" && <Orders />}

                    {modulo === "cocina" && <Kitchen />}

                    {modulo === "reportes" && <Reports />}

                </div>

            </main>

        </div>

    );

}