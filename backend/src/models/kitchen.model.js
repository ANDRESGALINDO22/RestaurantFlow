const db = require("../config/database");

const getAll = async () => {

    const [rows] = await db.query(`
        SELECT
            pedidos.id,
            mesas.numero AS mesa,
            usuarios.nombre AS usuario,
            pedidos.estado,
            pedidos.total,
            pedidos.fecha
        FROM pedidos
        INNER JOIN mesas
            ON pedidos.mesa_id = mesas.id
        INNER JOIN usuarios
            ON pedidos.usuario_id = usuarios.id
        ORDER BY pedidos.fecha DESC
    `);

    return rows;

};

const cambiarEstado = async (id, estado) => {

    const [result] = await db.query(
        `
        UPDATE pedidos
        SET estado = ?
        WHERE id = ?
        `,
        [estado, id]
    );

    return result;

};

module.exports = {
    getAll,
    cambiarEstado
};