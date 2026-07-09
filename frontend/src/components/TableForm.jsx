import { useEffect, useState } from "react";

import {
    crearMesa,
    actualizarMesa
} from "../services/tableService";

export default function TableForm({ recargar, mesaEditar }) {

    const [form, setForm] = useState({

        numero: "",
        capacidad: "",
        estado: "Libre"

    });

    useEffect(() => {

        if (mesaEditar) {

            setForm(mesaEditar);

        }

    }, [mesaEditar]);

    const cambiar = (e) => {

        setForm({

            ...form,
            [e.target.name]: e.target.value

        });

    };

    const guardar = async () => {

        if (mesaEditar) {

            await actualizarMesa(mesaEditar.id, form);

            alert("Mesa actualizada");

        } else {

            await crearMesa(form);

            alert("Mesa creada");

        }

        setForm({

            numero: "",
            capacidad: "",
            estado: "Libre"

        });

        recargar();

    };

    return (

        <div className="bg-slate-900 rounded-xl p-6 mb-8">

            <h2 className="text-2xl font-bold text-red-500 mb-6">

                {mesaEditar ? "Editar Mesa" : "Nueva Mesa"}

            </h2>

            <div className="grid grid-cols-3 gap-4">

                <input
                    name="numero"
                    value={form.numero}
                    onChange={cambiar}
                    placeholder="Número"
                    className="p-3 rounded bg-slate-800"
                />

                <input
                    name="capacidad"
                    value={form.capacidad}
                    onChange={cambiar}
                    placeholder="Capacidad"
                    className="p-3 rounded bg-slate-800"
                />

                <select
                    name="estado"
                    value={form.estado}
                    onChange={cambiar}
                    className="p-3 rounded bg-slate-800"
                >

                    <option>Libre</option>
                    <option>Ocupada</option>
                    <option>Reservada</option>

                </select>

            </div>

            <button
                onClick={guardar}
                className="mt-6 bg-red-700 px-8 py-3 rounded-xl"
            >

                {mesaEditar ? "Actualizar" : "Guardar"}

            </button>

        </div>

    );

}