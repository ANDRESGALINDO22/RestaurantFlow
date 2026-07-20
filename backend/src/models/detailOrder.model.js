const db = require("../config/database");

const create = async (detalle) => {

    const [result] = await db.query(

        `
        INSERT INTO detalle_pedido
        (pedido_id, producto_id, cantidad, precio, subtotal)
        VALUES (?, ?, ?, ?, ?)
        `,

        [

            detalle.pedido_id,
            detalle.producto_id,
            detalle.cantidad,
            detalle.precio,
            detalle.subtotal

        ]

    );

    return result;

};

module.exports = {

    create

};