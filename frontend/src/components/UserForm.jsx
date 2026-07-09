import { useState, useEffect } from "react";
import {
    crearUsuario,
    actualizarUsuario
} from "../services/userService";

export default function UserForm({ recargar, usuarioEditar }) {

    const [form, setForm] = useState({
        nombre: "",
        correo: "",
        password: "",
        rol: "Administrador",
        estado: 1
    });

    useEffect(() => {

        if (usuarioEditar) {

            setForm({
                nombre: usuarioEditar.nombre,
                correo: usuarioEditar.correo,
                password: "",
                rol: usuarioEditar.rol,
                estado: usuarioEditar.estado
            });

        }

    }, [usuarioEditar]);

    const cambiar = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const guardar = async () => {

        try {

            if (usuarioEditar) {

                await actualizarUsuario(usuarioEditar.id, form);

                alert("Usuario actualizado correctamente");

            } else {

                await crearUsuario(form);

                alert("Usuario creado correctamente");

            }

            setForm({
                nombre: "",
                correo: "",
                password: "",
                rol: "Administrador",
                estado: 1
            });

            recargar();

        } catch (error) {

            console.log(error);

            alert("Error al guardar");

        }

    };

    return (

        <div className="bg-slate-900 rounded-xl p-6 mb-8">

            <h2 className="text-2xl font-bold text-red-500 mb-6">

                {usuarioEditar ? "Editar Usuario" : "Nuevo Usuario"}

            </h2>

            <div className="grid grid-cols-2 gap-4">

                <input
                    name="nombre"
                    value={form.nombre}
                    onChange={cambiar}
                    placeholder="Nombre"
                    className="p-3 rounded bg-slate-800"
                />

                <input
                    name="correo"
                    value={form.correo}
                    onChange={cambiar}
                    placeholder="Correo"
                    className="p-3 rounded bg-slate-800"
                />

                {!usuarioEditar && (

                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={cambiar}
                        placeholder="Contraseña"
                        className="p-3 rounded bg-slate-800"
                    />

                )}

                <select
                    name="rol"
                    value={form.rol}
                    onChange={cambiar}
                    className="p-3 rounded bg-slate-800"
                >

                    <option>Administrador</option>
                    <option>Empleado</option>
                    <option>Cajero</option>

                </select>

            </div>

            <button
                onClick={guardar}
                className="mt-6 bg-red-700 hover:bg-red-600 px-8 py-3 rounded-xl"
            >

                {usuarioEditar ? "Actualizar Usuario" : "Guardar Usuario"}

            </button>

        </div>

    );

}