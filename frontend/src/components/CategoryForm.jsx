import { useEffect, useState } from "react";

import {
    crearCategoria,
    actualizarCategoria
} from "../services/categoryService";

export default function CategoryForm({ recargar, categoriaEditar }) {

    const [form, setForm] = useState({

        nombre: "",
        descripcion: "",
        estado: 1

    });

    useEffect(() => {

        if (categoriaEditar) {

            setForm(categoriaEditar);

        }

    }, [categoriaEditar]);

    const cambiar = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const guardar = async () => {

        if (categoriaEditar) {

            await actualizarCategoria(categoriaEditar.id, form);

            alert("Categoría actualizada");

        } else {

            await crearCategoria(form);

            alert("Categoría creada");

        }

        setForm({

            nombre: "",
            descripcion: "",
            estado: 1

        });

        recargar();

    };

    return (

        <div className="bg-slate-900 rounded-xl p-6 mb-8">

            <h2 className="text-2xl font-bold text-red-500 mb-6">

                {categoriaEditar ? "Editar Categoría" : "Nueva Categoría"}

            </h2>

            <div className="grid grid-cols-2 gap-4">

                <input
                    name="nombre"
                    value={form.nombre}
                    onChange={cambiar}
                    placeholder="Nombre"
                    className="p-3 rounded bg-slate-800"
                />

                <textarea
                    name="descripcion"
                    value={form.descripcion}
                    onChange={cambiar}
                    placeholder="Descripción"
                    className="p-3 rounded bg-slate-800"
                />

            </div>

            <button
                onClick={guardar}
                className="mt-6 bg-red-700 px-8 py-3 rounded-xl"
            >

                {categoriaEditar ? "Actualizar" : "Guardar"}

            </button>

        </div>

    );

}