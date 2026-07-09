export default function PosCart({ carrito }) {

    const total = carrito.reduce((suma, item) => {
        return suma + (item.precio * item.cantidad);
    }, 0);

    return (

        <div className="bg-slate-900 rounded-xl p-6">

            <h2 className="text-2xl font-bold text-red-500 mb-4">
                Carrito
            </h2>

            {carrito.length === 0 && (
                <p>No hay productos.</p>
            )}

            {carrito.map((item) => (

                <div
                    key={item.id}
                    className="flex justify-between border-b border-slate-700 py-2"
                >

                    <span>
                        {item.nombre} x{item.cantidad}
                    </span>

                    <span>
                        $
                        {(item.precio * item.cantidad).toFixed(2)}
                    </span>

                </div>

            ))}

            <h2 className="text-2xl font-bold mt-6">

                Total: ${total.toFixed(2)}

            </h2>

            <button
                className="mt-6 w-full bg-red-700 p-3 rounded-xl"
            >
                Registrar Venta
            </button>

        </div>

    );

}