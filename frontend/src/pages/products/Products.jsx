import { useEffect, useState } from "react";

import ProductForm from "../../components/ProductForm";

import {

    obtenerProductos,
    eliminarProducto

} from "../../services/productService";

export default function Products() {

    const [productos, setProductos] = useState([]);

    const [productoEditar, setProductoEditar] = useState(null);

    useEffect(() => {

        cargarProductos();

    }, []);

    const cargarProductos = async () => {

        const data = await obtenerProductos();

        setProductos(data);

    };

    const eliminar = async (id) => {

        if (!window.confirm("¿Eliminar producto?")) return;

        await eliminarProducto(id);

        cargarProductos();

    };

    return (

        <div>

            <ProductForm
                recargar={cargarProductos}
                productoEditar={productoEditar}
            />

            <table className="w-full bg-slate-900 rounded-xl">

                <thead className="bg-red-700">

                    <tr>

                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Estado</th>
                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {productos.map((producto) => (

                        <tr
                            key={producto.id}
                            className="text-center border-b border-slate-700"
                        >

                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.categoria}</td>
                            <td>${producto.precio}</td>
                            <td>{producto.stock}</td>
                            <td>

                                {producto.estado === 1 ? "Activo" : "Inactivo"}

                            </td>

                            <td>

                                <button

                                    onClick={() => setProductoEditar(producto)}

                                    className="bg-yellow-600 px-3 py-1 rounded mr-2"

                                >

                                    Editar

                                </button>

                                <button

                                    onClick={() => eliminar(producto.id)}

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