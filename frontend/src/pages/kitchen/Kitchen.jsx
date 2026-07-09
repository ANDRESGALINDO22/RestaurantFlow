import { useEffect, useState } from "react";

import {
    obtenerPedidosCocina,
    actualizarEstado
} from "../../services/kitchenService";

export default function Kitchen() {

    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {

        cargarPedidos();

    }, []);

    const cargarPedidos = async () => {

        const data = await obtenerPedidosCocina();

        setPedidos(data);

    };

    const cambiarEstado = async (id, estado) => {

        await actualizarEstado(id, estado);

        cargarPedidos();

    };

    return (

        <div>

            <h2 className="text-3xl font-bold text-white mb-6">

                Cocina

            </h2>

            <table className="w-full bg-slate-900 rounded-xl">

                <thead className="bg-red-700">

                    <tr>

                        <th className="p-4">Mesa</th>
                        <th>Usuario</th>
                        <th>Estado</th>
                        <th>Total</th>
                        <th>Acción</th>

                    </tr>

                </thead>

                <tbody>

                    {pedidos.map((pedido) => (

                        <tr
                            key={pedido.id}
                            className="text-center border-b border-slate-800"
                        >

                            <td>{pedido.mesa}</td>

                            <td>{pedido.usuario}</td>

                            <td>{pedido.estado}</td>

                            <td>${pedido.total}</td>

                            <td>

                                <select
                                    value={pedido.estado}
                                    onChange={(e) =>
                                        cambiarEstado(
                                            pedido.id,
                                            e.target.value
                                        )
                                    }
                                    className="bg-slate-800 p-2 rounded"
                                >

                                    <option>Pendiente</option>
                                    <option>Preparando</option>
                                    <option>Entregado</option>
                                    <option>Pagado</option>

                                </select>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}