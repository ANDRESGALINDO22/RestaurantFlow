import { useEffect, useState } from "react";

import TableForm from "../../components/TableForm";
import QRCodeModal from "../../components/QRCodeModal";

import {
    obtenerMesas,
    eliminarMesa
} from "../../services/tableService";

export default function Tables() {

    const [mesas, setMesas] = useState([]);

    const [mesaEditar, setMesaEditar] = useState(null);

    const [mostrarQR, setMostrarQR] = useState(false);

    const [mesaQR, setMesaQR] = useState(null);

    useEffect(() => {

        cargarMesas();

    }, []);

    const cargarMesas = async () => {

        const data = await obtenerMesas();

        setMesas(data);

    };

    const eliminar = async (id) => {

        if (!window.confirm("¿Eliminar mesa?")) return;

        await eliminarMesa(id);

        cargarMesas();

    };

    return (

        <div>

            <TableForm
                recargar={cargarMesas}
                mesaEditar={mesaEditar}
            />

            <table className="w-full bg-slate-900 rounded-xl overflow-hidden">

                <thead className="bg-red-700">

                    <tr>

                        <th className="p-4">ID</th>
                        <th>Número</th>
                        <th>Capacidad</th>
                        <th>Estado</th>
                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {mesas.map((mesa) => (

                        <tr
                            key={mesa.id}
                            className="border-b border-slate-800 text-center"
                        >

                            <td className="p-4">{mesa.id}</td>
                            <td>{mesa.numero}</td>
                            <td>{mesa.capacidad}</td>
                            <td>{mesa.estado}</td>

                            <td className="space-x-2">

                                <button
                                    onClick={() => setMesaEditar(mesa)}
                                    className="bg-yellow-600 px-3 py-1 rounded"
                                >
                                    Editar
                                </button>

                                <button
                                    onClick={() => eliminar(mesa.id)}
                                    className="bg-red-700 px-3 py-1 rounded"
                                >
                                    Eliminar
                                </button>

                                <button
                                    onClick={() => {

                                        setMesaQR(mesa.numero);
                                        setMostrarQR(true);

                                    }}
                                    className="bg-green-700 hover:bg-green-600 px-3 py-1 rounded"
                                >
                                    📱 QR
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

            <QRCodeModal
                open={mostrarQR}
                onClose={() => setMostrarQR(false)}
                mesa={mesaQR}
            />

        </div>

    );

}