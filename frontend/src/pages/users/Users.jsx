import { useEffect, useState } from "react";
import UserForm from "../../components/UserForm";
import {
    obtenerUsuarios,
    eliminarUsuario
} from "../../services/userService";

export default function Users() {

    const [usuarios, setUsuarios] = useState([]);
    const [usuarioEditar, setUsuarioEditar] = useState(null);

    useEffect(() => {
        cargarUsuarios();
    }, []);

    const cargarUsuarios = async () => {

        try {

            const data = await obtenerUsuarios();

            setUsuarios(data);

        } catch (error) {

            console.error(error);

        }

    };

    const eliminar = async (id) => {

        if (!window.confirm("¿Eliminar este usuario?")) return;

        try {

            await eliminarUsuario(id);

            cargarUsuarios();

        } catch (error) {

            console.log(error);

            alert("Error al eliminar");

        }

    };

    return (

        <div>

            <UserForm
                recargar={cargarUsuarios}
                usuarioEditar={usuarioEditar}
            />

            <h2 className="text-3xl font-bold text-white mb-6">
                Gestión de Usuarios
            </h2>

            <table className="w-full bg-slate-900 rounded-xl overflow-hidden">

                <thead className="bg-red-700">

                    <tr>

                        <th className="p-4">ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {usuarios.map((usuario) => (

                        <tr
                            key={usuario.id}
                            className="border-b border-slate-800 text-center"
                        >

                            <td className="p-4">{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.correo}</td>
                            <td>{usuario.rol}</td>
                            <td>
                                {usuario.estado === 1 ? "Activo" : "Inactivo"}
                            </td>

                            <td className="space-x-2">

                                <button
                                    onClick={() => setUsuarioEditar(usuario)}
                                    className="bg-yellow-600 px-3 py-1 rounded"
                                >
                                    Editar
                                </button>

                                <button
                                    onClick={() => eliminar(usuario.id)}
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