const db = require("../config/database");

const getAll = async () => {

    const [rows] = await db.query(`
        SELECT
            pedidos.id,
            mesas.numero AS mesa,
            usuarios.nombre AS usuario,
            pedidos.fecha,
            pedidos.estado,
            pedidos.total
        FROM pedidos
        INNER JOIN mesas
            ON pedidos.mesa_id = mesas.id
        INNER JOIN usuarios
            ON pedidos.usuario_id = usuarios.id
        ORDER BY pedidos.id DESC
    `);

    return rows;

};

const create = async (pedido) => {

    const [result] = await db.query(
        `
        INSERT INTO pedidos
        (mesa_id, usuario_id, estado, total)
        VALUES (?, ?, ?, ?)
        `,
        [
            pedido.mesa_id,
            pedido.usuario_id,
            pedido.estado,
            pedido.total
        ]
    );

    return result.insertId;

};

const update = async (id, pedido) => {

    const [result] = await db.query(
        `
        UPDATE pedidos
        SET
            mesa_id=?,
            usuario_id=?,
            estado=?,
            total=?
        WHERE id=?
        `,
        [
            pedido.mesa_id,
            pedido.usuario_id,
            pedido.estado,
            pedido.total,
            id
        ]
    );

    return result;

};

const remove = async (id) => {

    const [result] = await db.query(
        "DELETE FROM pedidos WHERE id=?",
        [id]
    );

    return result;

};

module.exports = {
    getAll,
    create,
    update,
    remove
};