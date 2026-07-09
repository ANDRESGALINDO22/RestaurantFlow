import { useEffect, useState } from "react";

import {
    crearProducto,
    actualizarProducto
} from "../services/productService";

export default function ProductForm({ recargar, productoEditar }) {

    const [form, setForm] = useState({

        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        categoria: "",
        imagen: "",
        estado: 1

    });

    useEffect(() => {

        if (productoEditar) {

            setForm(productoEditar);

        }

    }, [productoEditar]);

    const cambiar = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const guardar = async () => {

        try {

            if (productoEditar) {

                await actualizarProducto(productoEditar.id, form);

                alert("Producto actualizado");

            } else {

                await crearProducto(form);

                alert("Producto creado");

            }

            setForm({

                nombre: "",
                descripcion: "",
                precio: "",
                stock: "",
                categoria: "",
                imagen: "",
                estado: 1

            });

            recargar();

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="bg-slate-900 rounded-xl p-6 mb-8">

            <h2 className="text-2xl font-bold text-red-500 mb-6">

                {productoEditar ? "Editar Producto" : "Nuevo Producto"}

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
                    name="categoria"
                    value={form.categoria}
                    onChange={cambiar}
                    placeholder="Categoría"
                    className="p-3 rounded bg-slate-800"
                />

                <input
                    name="precio"
                    value={form.precio}
                    onChange={cambiar}
                    placeholder="Precio"
                    className="p-3 rounded bg-slate-800"
                />

                <input
                    name="stock"
                    value={form.stock}
                    onChange={cambiar}
                    placeholder="Stock"
                    className="p-3 rounded bg-slate-800"
                />

                <input
                    name="imagen"
                    value={form.imagen}
                    onChange={cambiar}
                    placeholder="URL Imagen"
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

                {productoEditar ? "Actualizar Producto" : "Guardar Producto"}

            </button>

        </div>

    );

}