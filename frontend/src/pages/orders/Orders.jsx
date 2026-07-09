import { useEffect, useState } from "react";

import OrderForm from "../../components/OrderForm";

import {
    obtenerPedidos,
    eliminarPedido
} from "../../services/orderService";

export default function Orders() {

    const [pedidos, setPedidos] = useState([]);

    const [pedidoEditar, setPedidoEditar] = useState(null);

    useEffect(() => {

        cargarPedidos();

    }, []);

    const cargarPedidos = async () => {

        const data = await obtenerPedidos();

        setPedidos(data);

    };

    const editar = (pedido) => {

        setPedidoEditar(pedido);

    };

    const eliminar = async (id) => {

        if (!window.confirm("¿Eliminar pedido?")) return;

        await eliminarPedido(id);

        cargarPedidos();

    };

    return (

        <div>

            <OrderForm
                recargar={cargarPedidos}
                pedidoEditar={pedidoEditar}
            />

            <h2 className="text-3xl font-bold text-white mb-6">

                Gestión de Pedidos

            </h2>

            <table className="w-full bg-slate-900 rounded-xl overflow-hidden">

                <thead className="bg-red-700">

                    <tr>

                        <th className="p-4">ID</th>
                        <th>Mesa</th>
                        <th>Usuario</th>
                        <th>Estado</th>
                        <th>Total</th>
                        <th>Fecha</th>
                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {pedidos.map((pedido) => (

                        <tr
                            key={pedido.id}
                            className="border-b border-slate-800 text-center"
                        >

                            <td className="p-4">{pedido.id}</td>

                            <td>{pedido.mesa}</td>

                            <td>{pedido.usuario}</td>

                            <td>{pedido.estado}</td>

                            <td>${pedido.total}</td>

                            <td>{pedido.fecha}</td>

                            <td className="space-x-2">

                                <button
                                    onClick={() => editar(pedido)}
                                    className="bg-yellow-600 px-3 py-1 rounded"
                                >
                                    Editar
                                </button>

                                <button
                                    onClick={() => eliminar(pedido.id)}
                                    className="bg-red-700 px-3 py-1 rounded"
                                >
                                    Eliminar
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}