import { useEffect, useState } from "react";

import CategoryForm from "../../components/CategoryForm";

import {
    obtenerCategorias,
    eliminarCategoria
} from "../../services/categoryService";

export default function Categories() {

    const [categorias, setCategorias] = useState([]);

    const [categoriaEditar, setCategoriaEditar] = useState(null);

    useEffect(() => {

        cargarCategorias();

    }, []);

    const cargarCategorias = async () => {

        const data = await obtenerCategorias();

        setCategorias(data);

    };

    const eliminar = async (id) => {

        if (!window.confirm("¿Eliminar categoría?")) return;

        await eliminarCategoria(id);

        cargarCategorias();

    };

    return (

        <div>

            <CategoryForm
                recargar={cargarCategorias}
                categoriaEditar={categoriaEditar}
            />

            <table className="w-full bg-slate-900 rounded-xl">

                <thead className="bg-red-700">

                    <tr>

                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {categorias.map((categoria) => (

                        <tr
                            key={categoria.id}
                            className="text-center border-b border-slate-700"
                        >

                            <td>{categoria.id}</td>
                            <td>{categoria.nombre}</td>
                            <td>{categoria.descripcion}</td>
                            <td>{categoria.estado === 1 ? "Activo" : "Inactivo"}</td>

                            <td>

                                <button
                                    onClick={() => setCategoriaEditar(categoria)}
                                    className="bg-yellow-600 px-3 py-1 rounded mr-2"
                                >
                                    Editar
                                </button>

                                <button
                                    onClick={() => eliminar(categoria.id)}
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