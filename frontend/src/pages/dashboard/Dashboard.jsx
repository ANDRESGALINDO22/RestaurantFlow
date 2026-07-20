import { useEffect, useState } from "react";

import Users from "../users/Users";
import Products from "../products/Products";
import Categories from "../categories/Categories";
import Tables from "../tables/Tables";
import Inventory from "../inventory/Inventory";
import Orders from "../orders/Orders";
import Kitchen from "../kitchen/Kitchen";
import Reports from "../reports/Reports";
import { obtenerUsuarios } from "../../services/userService";
import { obtenerProductos } from "../../services/productService";
import { obtenerMesas } from "../../services/tableService";
import { obtenerPedidos } from "../../services/orderService";

export default function Dashboard() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const [modulo, setModulo] = useState("dashboard");
  const [usuarios, setUsuarios] = useState(0);
  const [productos, setProductos] = useState(0);
  const [mesas, setMesas] = useState(0);
  const [pedidos, setPedidos] = useState(0);
  useEffect(() => {
    cargarDashboard();
}, []);

const cargarDashboard = async () => {

    try {

        const usuariosData = await obtenerUsuarios();
        const productosData = await obtenerProductos();
        const mesasData = await obtenerMesas();
        const pedidosData = await obtenerPedidos();

        setUsuarios(usuariosData.length);
        setProductos(productosData.length);
        setMesas(mesasData.length);
        setPedidos(pedidosData.length);

    } catch (error) {

        console.log(error);

    }

};

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <aside className="w-72 bg-black border-r border-red-700 p-6">
        <h1 className="text-3xl font-bold text-red-600">RestaurantFlow</h1>
        <p className="text-gray-400 mt-2">Sistema POS</p>

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
          <span className="text-red-500"> {usuario?.nombre}</span>
        </h2>

        <p className="text-gray-400 mt-2">
          Panel de administración RestaurantFlow
        </p>

        <div className="mt-10">
          {modulo === "dashboard" && (
            <div className="space-y-8">
              {/* Banner */}
              <div className="bg-gradient-to-r from-black via-slate-900 to-black rounded-3xl border border-red-700 overflow-hidden shadow-2xl">
                <div className="grid grid-cols-2 items-center">
                  <div className="p-10">
                    <h1 className="text-5xl font-extrabold text-red-600">
                      🍔 RestaurantFlow
                    </h1>

                    <p className="text-2xl text-gray-300 mt-5">
                      Sistema POS Profesional
                    </p>

                    <p className="text-gray-400 mt-5 leading-8">
                      Administra usuarios, productos, inventario, pedidos, cocina,
                      mesas y reportes desde una sola plataforma.
                    </p>

                    <div className="flex gap-5 mt-8">
                      <button
                        onClick={() => setModulo("pedidos")}
                        className="bg-red-700 hover:bg-red-600 px-8 py-4 rounded-xl font-bold transition"
                      >
                        🧾 Nuevo Pedido
                      </button>

                      <button
                        onClick={() => setModulo("reportes")}
                        className="border border-red-700 hover:bg-red-700 px-8 py-4 rounded-xl transition"
                      >
                        📈 Ver Reportes
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <img
                      src="/menu-banner.png"
                      alt="Menú del Día"
                      className="w-full max-w-[650px] rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Estadísticas */}
              <div className="grid grid-cols-4 gap-6">
                <div className="bg-slate-900 rounded-2xl border border-red-700 p-6 hover:scale-105 transition">
                  <div className="text-5xl">👥</div>
                  <p className="text-gray-400 mt-3">Usuarios</p>
                  <h1 className="text-5xl font-bold text-red-500 mt-2">{usuarios}</h1>
                </div>

                <div className="bg-slate-900 rounded-2xl border border-red-700 p-6 hover:scale-105 transition">
                  <div className="text-5xl">🍔</div>
                  <p className="text-gray-400 mt-3">Productos</p>
                  <h1 className="text-5xl font-bold text-red-500 mt-2">{productos}</h1>
                </div>

                <div className="bg-slate-900 rounded-2xl border border-red-700 p-6 hover:scale-105 transition">
                  <div className="text-5xl">🪑</div>
                  <p className="text-gray-400 mt-3">Mesas</p>
                  <h1 className="text-5xl font-bold text-red-500 mt-2">{mesas}</h1>
                </div>

                <div className="bg-slate-900 rounded-2xl border border-red-700 p-6 hover:scale-105 transition">
                  <div className="text-5xl">🧾</div>
                  <p className="text-gray-400 mt-3">Pedidos</p>
                  <h1 className="text-5xl font-bold text-red-500 mt-2">{pedidos}</h1>
                </div>
              </div>

              {/* Accesos rápidos */}
              <div>
                <h2 className="text-2xl font-bold mb-5">Accesos rápidos</h2>

                <div className="grid grid-cols-4 gap-6">
                  <button
                    onClick={() => setModulo("productos")}
                    className="bg-slate-900 border border-red-700 rounded-2xl p-8 hover:bg-red-700 transition"
                  >
                    <div className="text-5xl">🍔</div>
                    <p className="mt-4 font-bold">Productos</p>
                  </button>

                  <button
                    onClick={() => setModulo("pedidos")}
                    className="bg-slate-900 border border-red-700 rounded-2xl p-8 hover:bg-red-700 transition"
                  >
                    <div className="text-5xl">🧾</div>
                    <p className="mt-4 font-bold">Pedidos</p>
                  </button>

                  <button
                    onClick={() => setModulo("cocina")}
                    className="bg-slate-900 border border-red-700 rounded-2xl p-8 hover:bg-red-700 transition"
                  >
                    <div className="text-5xl">👨‍🍳</div>
                    <p className="mt-4 font-bold">Cocina</p>
                  </button>

                  <button
                    onClick={() => setModulo("reportes")}
                    className="bg-slate-900 border border-red-700 rounded-2xl p-8 hover:bg-red-700 transition"
                  >
                    <div className="text-5xl">📈</div>
                    <p className="mt-4 font-bold">Reportes</p>
                  </button>
                </div>
              </div>
            </div>
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
