import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    obtenerMenu,
    crearPedido,
    crearDetallePedido
} from "../../services/clientService";

export default function ClientMenu() {

    const { mesa } = useParams();

    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {

        cargarMenu();

    }, []);

   const cargarMenu = async () => {

    try {

        const data = await obtenerMenu();

        setProductos(data);

    } catch (error) {

        console.log("Backend no disponible, cargando menú de demostración.");

        setProductos([
            {
                id: 1,
                nombre: "Hamburguesa Clásica",
                descripcion: "Carne de res, queso y papas",
                precio: 18000
            },
            {
                id: 2,
                nombre: "Pizza Personal",
                descripcion: "Jamón y queso",
                precio: 22000
            },
            {
                id: 3,
                nombre: "Perro Caliente",
                descripcion: "Salchicha, queso y salsas",
                precio: 12000
            },
            {
                id: 4,
                nombre: "Gaseosa",
                descripcion: "400 ml",
                precio: 4000
            }
        ]);

    }

};
    const calcularTotal = (lista) => {

        const nuevoTotal = lista.reduce(

            (sum, item) => sum + (Number(item.precio) * item.cantidad),

            0

        );

        setTotal(nuevoTotal);

    };

    const agregarProducto = (producto) => {

        const existe = carrito.find(p => p.id === producto.id);

        let nuevoCarrito;

        if (existe) {

            nuevoCarrito = carrito.map(p =>

                p.id === producto.id

                    ? {

                        ...p,

                        cantidad: p.cantidad + 1

                    }

                    : p

            );

        } else {

            nuevoCarrito = [

                ...carrito,

                {

                    ...producto,

                    cantidad: 1

                }

            ];

        }

        setCarrito(nuevoCarrito);

        calcularTotal(nuevoCarrito);

    };

    const disminuirProducto = (id) => {

        let nuevoCarrito = carrito.map(item =>

            item.id === id

                ? {

                    ...item,

                    cantidad: item.cantidad - 1

                }

                : item

        );

        nuevoCarrito = nuevoCarrito.filter(item => item.cantidad > 0);

        setCarrito(nuevoCarrito);

        calcularTotal(nuevoCarrito);

    };

    const eliminarProducto = (id) => {

        const nuevoCarrito = carrito.filter(item => item.id !== id);

        setCarrito(nuevoCarrito);

        calcularTotal(nuevoCarrito);

    };

    const enviarPedido = async () => {

        try {

            if (carrito.length === 0) {

                alert("Agrega productos al carrito");

                return;

            }

            // Crear pedido principal

            const pedido = await crearPedido({

                mesa_id: Number(mesa),
                usuario_id: 1,
                estado: "Pendiente",
                total: total

            });

            // Guardar detalle de cada producto

            for (const item of carrito) {

                await crearDetallePedido({

                    pedido_id: pedido.pedido_id,
                    producto_id: item.id,
                    cantidad: item.cantidad,
                    precio: item.precio,
                    subtotal: Number(item.precio) * item.cantidad

                });

            }

            alert("🎉 Pedido enviado correctamente");

            // Limpiar carrito

            setCarrito([]);
            setTotal(0);

        } catch (error) {

            console.log(error);

            alert("Error al enviar pedido");

        }

    };

    return (

        <div className="min-h-screen bg-slate-950 text-white p-10">

            <h1 className="text-5xl font-bold text-red-600 text-center">
                🍔 RestaurantFlow
            </h1>

            <h2 className="text-3xl text-center mt-5">
                Mesa #{mesa}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

    {productos.map((producto) => (

        <div
            key={producto.id}
            className="bg-slate-900 rounded-2xl border border-red-700 p-6 flex flex-col"
        >

            <div className="text-6xl text-center">
                🍔
            </div>

            <h2 className="text-xl font-bold text-center mt-4">
                {producto.nombre}
            </h2>

            <p className="text-gray-400 text-center text-sm mt-2 flex-1">
                {producto.descripcion}
            </p>

            <h3 className="text-red-500 text-3xl font-bold text-center mt-4">
                ${Number(producto.precio).toLocaleString()}
            </h3>

            <button
                onClick={() => agregarProducto(producto)}
                className="mt-5 w-full bg-red-700 hover:bg-red-600 py-3 rounded-xl font-bold"
            >
                Agregar
            </button>

        </div>

    ))}

</div>

            <div className="mt-12 bg-slate-900 rounded-2xl border border-red-700 p-8">

                <h2 className="text-3xl font-bold text-red-500 mb-6">
                    🛒 Mi Pedido
                </h2>

                {

                    carrito.length === 0 ?

                        (

                            <p className="text-gray-400">
                                No hay productos agregados.
                            </p>

                        )

                        :

                        carrito.map((item) => (

                            <div
                                key={item.id}
                                className="flex justify-between items-center border-b border-slate-700 py-4"
                            >

                                <div>

                                    <h3 className="font-bold text-lg">
                                        {item.nombre}
                                    </h3>

                                    <div className="flex items-center gap-3 mt-2">

                                        <button
                                            onClick={() => disminuirProducto(item.id)}
                                            className="bg-red-700 w-8 h-8 rounded-full"
                                        >
                                            -
                                        </button>

                                        <span className="font-bold">
                                            {item.cantidad}
                                        </span>

                                        <button
                                            onClick={() => agregarProducto(item)}
                                            className="bg-green-700 w-8 h-8 rounded-full"
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>

                                <div className="text-right">

                                    <h3 className="text-red-500 font-bold text-xl">
                                        ${(Number(item.precio) * item.cantidad).toLocaleString()}
                                    </h3>

                                    <button
                                        onClick={() => eliminarProducto(item.id)}
                                        className="mt-2 bg-red-900 hover:bg-red-700 px-3 py-1 rounded-lg"
                                    >
                                        🗑️ Eliminar
                                    </button>

                                </div>

                            </div>

                        ))

                }

                <h2 className="text-3xl font-bold text-right text-red-500 mt-8">
                    Total: ${total.toLocaleString()}
                </h2>

                <button
                    onClick={enviarPedido}
                    className="mt-6 w-full bg-green-700 hover:bg-green-600 py-4 rounded-xl text-xl font-bold"
                >
                    ✅ Enviar Pedido
                </button>

            </div>

        </div>

    );

}