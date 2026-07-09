import { useEffect, useState } from "react";

import {
    crearPedido,
    actualizarPedido
} from "../services/orderService";

import { obtenerMesas } from "../services/tableService";
import { obtenerUsuarios } from "../services/userService";

export default function OrderForm({ recargar, pedidoEditar }) {

    const [mesas, setMesas] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    const [form, setForm] = useState({

        mesa_id: "",
        usuario_id: "",
        estado: "Pendiente",
        total: 0

    });

    useEffect(() => {

        cargarDatos();

    }, []);

    useEffect(() => {

        if (pedidoEditar) {

            setForm(pedidoEditar);

        }

    }, [pedidoEditar]);

    const cargarDatos = async () => {

        setMesas(await obtenerMesas());

        setUsuarios(await obtenerUsuarios());

    };

    const cambiar = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const guardar = async () => {

        if (pedidoEditar) {

            await actualizarPedido(pedidoEditar.id, form);

            alert("Pedido actualizado");

        } else {

            await crearPedido(form);

            alert("Pedido creado");

        }

        setForm({

            mesa_id: "",
            usuario_id: "",
            estado: "Pendiente",
            total: 0

        });

        recargar();

    };

    return (

        <div className="bg-slate-900 rounded-xl p-6 mb-8">

            <h2 className="text-2xl font-bold text-red-500 mb-6">

                {pedidoEditar ? "Editar Pedido" : "Nuevo Pedido"}

            </h2>

            <div className="grid grid-cols-4 gap-4">

                <select
                    name="mesa_id"
                    value={form.mesa_id}
                    onChange={cambiar}
                    className="p-3 rounded bg-slate-800"
                >

                    <option value="">Mesa</option>

                    {mesas.map((m) => (

                        <option key={m.id} value={m.id}>

                            {m.numero}

                        </option>

                    ))}

                </select>

                <select
                    name="usuario_id"
                    value={form.usuario_id}
                    onChange={cambiar}
                    className="p-3 rounded bg-slate-800"
                >

                    <option value="">Usuario</option>

                    {usuarios.map((u) => (

                        <option key={u.id} value={u.id}>

                            {u.nombre}

                        </option>

                    ))}

                </select>

                <select
                    name="estado"
                    value={form.estado}
                    onChange={cambiar}
                    className="p-3 rounded bg-slate-800"
                >

                    <option>Pendiente</option>
                    <option>Preparando</option>
                    <option>Entregado</option>
                    <option>Pagado</option>

                </select>

                <input
                    name="total"
                    value={form.total}
                    onChange={cambiar}
                    placeholder="Total"
                    className="p-3 rounded bg-slate-800"
                />

            </div>

            <button
                onClick={guardar}
                className="mt-6 bg-red-700 px-8 py-3 rounded-xl"
            >

                {pedidoEditar ? "Actualizar" : "Guardar"}

            </button>

        </div>

    );

}