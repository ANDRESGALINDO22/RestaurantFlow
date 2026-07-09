const db = require("../config/database");

const getAll = async () => {

    const [rows] = await db.query(`
        SELECT
            inventario.id,
            productos.nombre AS producto,
            inventario.stock,
            inventario.stock_minimo,
            inventario.unidad
        FROM inventario
        INNER JOIN productos
        ON inventario.producto_id = productos.id
        ORDER BY inventario.id DESC
    `);

    return rows;

};

const create = async (inventario) => {

    const [result] = await db.query(
        `
        INSERT INTO inventario
        (producto_id, stock, stock_minimo, unidad)
        VALUES (?, ?, ?, ?)
        `,
        [
            inventario.producto_id,
            inventario.stock,
            inventario.stock_minimo,
            inventario.unidad
        ]
    );

    return result;

};

const update = async (id, inventario) => {

    const [result] = await db.query(
        `
        UPDATE inventario
        SET
            producto_id=?,
            stock=?,
            stock_minimo=?,
            unidad=?
        WHERE id=?
        `,
        [
            inventario.producto_id,
            inventario.stock,
            inventario.stock_minimo,
            inventario.unidad,
            id
        ]
    );

    return result;

};

const remove = async (id) => {

    const [result] = await db.query(
        "DELETE FROM inventario WHERE id=?",
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