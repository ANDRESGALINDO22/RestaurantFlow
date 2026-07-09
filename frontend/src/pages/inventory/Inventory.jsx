import { useEffect, useState } from "react";

import InventoryForm from "../../components/InventoryForm";

import {

    obtenerInventario,
    eliminarInventario

} from "../../services/inventoryService";

export default function Inventory() {

    const [inventario, setInventario] = useState([]);

    const [inventarioEditar, setInventarioEditar] = useState(null);

    useEffect(() => {

        cargarInventario();

    }, []);

    const cargarInventario = async () => {

        const data = await obtenerInventario();

        setInventario(data);

    };

    const eliminar = async (id) => {

        if (!window.confirm("¿Eliminar registro?")) return;

        await eliminarInventario(id);

        cargarInventario();

    };

    return (

        <div>

            <InventoryForm

                recargar={cargarInventario}

                inventarioEditar={inventarioEditar}

            />

            <table className="w-full bg-slate-900 rounded-xl overflow-hidden">

                <thead className="bg-red-700">

                    <tr>

                        <th className="p-4">ID</th>
                        <th>Producto</th>
                        <th>Stock</th>
                        <th>Mínimo</th>
                        <th>Unidad</th>
                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {inventario.map((i) => (

                        <tr
                            key={i.id}
                            className="border-b border-slate-800 text-center"
                        >

                            <td className="p-4">{i.id}</td>
                            <td>{i.producto}</td>
                            <td>{i.stock}</td>
                            <td>{i.stock_minimo}</td>
                            <td>{i.unidad}</td>

                            <td>

                                <button
                                    onClick={() => setInventarioEditar(i)}
                                    className="bg-yellow-600 px-3 py-1 rounded mr-2"
                                >
                                    Editar
                                </button>

                                <button
                                    onClick={() => eliminar(i.id)}
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