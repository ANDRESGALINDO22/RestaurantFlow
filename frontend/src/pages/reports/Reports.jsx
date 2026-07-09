import { useEffect, useState } from "react";

import { obtenerReporte } from "../../services/reportService";

export default function Reports() {

    const [datos, setDatos] = useState({});

    useEffect(() => {

        cargar();

    }, []);

    const cargar = async () => {

        const data = await obtenerReporte();

        setDatos(data);

    };

    const Card = ({ titulo, valor }) => (

        <div className="bg-slate-900 rounded-xl p-6 shadow-lg">

            <h3 className="text-gray-400 mb-2">

                {titulo}

            </h3>

            <h2 className="text-4xl font-bold text-red-500">

                {valor}

            </h2>

        </div>

    );

    return (

        <div>

            <h2 className="text-3xl font-bold text-white mb-8">

                Reportes del Sistema

            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                <Card
                    titulo="Usuarios"
                    valor={datos.usuarios}
                />

                <Card
                    titulo="Productos"
                    valor={datos.productos}
                />

                <Card
                    titulo="Categorías"
                    valor={datos.categorias}
                />

                <Card
                    titulo="Mesas"
                    valor={datos.mesas}
                />

                <Card
                    titulo="Pedidos"
                    valor={datos.pedidos}
                />

                <Card
                    titulo="Ventas"
                    valor={`$ ${datos.ventas}`}
                />

                <Card
                    titulo="Pedidos Pendientes"
                    valor={datos.pendientes}
                />

            </div>

        </div>

    );

}