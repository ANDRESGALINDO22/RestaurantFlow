import { useEffect, useState } from "react";

import {
    crearInventario,
    actualizarInventario
} from "../services/inventoryService";

import { obtenerProductos } from "../services/productService";

export default function InventoryForm({ recargar, inventarioEditar }) {

    const [productos, setProductos] = useState([]);

    const [form, setForm] = useState({

        producto_id: "",
        stock: "",
        stock_minimo: "",
        unidad: "Unidad"

    });

    useEffect(() => {

        cargarProductos();

    }, []);

    useEffect(() => {

        if (inventarioEditar) {

            setForm(inventarioEditar);

        }

    }, [inventarioEditar]);

    const cargarProductos = async () => {

        const data = await obtenerProductos();

        setProductos(data);

    };

    const cambiar = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const guardar = async () => {

        if (inventarioEditar) {

            await actualizarInventario(inventarioEditar.id, form);

            alert("Inventario actualizado");

        } else {

            await crearInventario(form);

            alert("Inventario registrado");

        }

        setForm({

            producto_id: "",
            stock: "",
            stock_minimo: "",
            unidad: "Unidad"

        });

        recargar();

    };

    return (

        <div className="bg-slate-900 rounded-xl p-6 mb-8">

            <h2 className="text-2xl font-bold text-red-500 mb-6">

                {inventarioEditar ? "Editar Inventario" : "Nuevo Inventario"}

            </h2>

            <div className="grid grid-cols-4 gap-4">

                <select
                    name="producto_id"
                    value={form.producto_id}
                    onChange={cambiar}
                    className="p-3 rounded bg-slate-800"
                >

                    <option value="">Producto</option>

                    {productos.map((p) => (

                        <option key={p.id} value={p.id}>

                            {p.nombre}

                        </option>

                    ))}

                </select>

                <input
                    name="stock"
                    value={form.stock}
                    onChange={cambiar}
                    placeholder="Stock"
                    className="p-3 rounded bg-slate-800"
                />

                <input
                    name="stock_minimo"
                    value={form.stock_minimo}
                    onChange={cambiar}
                    placeholder="Stock mínimo"
                    className="p-3 rounded bg-slate-800"
                />

                <input
                    name="unidad"
                    value={form.unidad}
                    onChange={cambiar}
                    placeholder="Unidad"
                    className="p-3 rounded bg-slate-800"
                />

            </div>

            <button
                onClick={guardar}
                className="mt-6 bg-red-700 px-8 py-3 rounded-xl"
            >

                {inventarioEditar ? "Actualizar" : "Guardar"}

            </button>

        </div>

    );

}