import { useEffect, useState } from "react";

import {
    obtenerProductos,
    obtenerMesas
} from "../../services/posService";

import PosCart from "../../components/PosCart";

export default function Pos() {

    const [productos, setProductos] = useState([]);
    const [mesas, setMesas] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [mesa, setMesa] = useState("");

    useEffect(() => {

        cargar();

    }, []);

    const cargar = async () => {

        const p = await obtenerProductos();

        const m = await obtenerMesas();

        setProductos(p);

        setMesas(m);

    };

    const agregar = (producto) => {

        const existe = carrito.find(p => p.id === producto.id);

        if (existe) {

            setCarrito(

                carrito.map(item =>

                    item.id === producto.id

                        ? {
                            ...item,
                            cantidad: item.cantidad + 1
                        }

                        : item

                )

            );

        } else {

            setCarrito([

                ...carrito,

                {
                    ...producto,
                    cantidad: 1
                }

            ]);

        }

    };

    return (

        <div>

            <h2 className="text-3xl font-bold mb-6">
                Punto de Venta
            </h2>

            <select
                value={mesa}
                onChange={(e) => setMesa(e.target.value)}
                className="bg-slate-900 p-3 rounded mb-6"
            >

                <option value="">Seleccione una mesa</option>

                {mesas.map((m) => (

                    <option
                        key={m.id}
                        value={m.id}
                    >

                        Mesa {m.numero}

                    </option>

                ))}

            </select>

            <div className="grid grid-cols-2 gap-8">

                <div>

                    <div className="grid grid-cols-2 gap-4">

                        {productos.map((producto) => (

                            <div
                                key={producto.id}
                                className="bg-slate-900 rounded-xl p-4"
                            >

                                <h3 className="font-bold">

                                    {producto.nombre}

                                </h3>

                                <p>

                                    ${producto.precio}

                                </p>

                                <button
                                    onClick={() => agregar(producto)}
                                    className="mt-4 bg-red-700 px-4 py-2 rounded"
                                >

                                    Agregar

                                </button>

                            </div>

                        ))}

                    </div>

                </div>

                <PosCart carrito={carrito} />

            </div>

        </div>

    );

}