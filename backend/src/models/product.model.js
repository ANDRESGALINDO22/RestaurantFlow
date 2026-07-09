const db = require("../config/database");

const getAll = async () => {

    const [rows] = await db.query(`
        SELECT *
        FROM productos
        ORDER BY id DESC
    `);

    return rows;

};

const create = async (producto) => {

    const [result] = await db.query(

        `INSERT INTO productos
        (nombre, descripcion, precio, stock, categoria, imagen, estado)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,

        [
            producto.nombre,
            producto.descripcion,
            producto.precio,
            producto.stock,
            producto.categoria,
            producto.imagen,
            producto.estado
        ]

    );

    return result;

};

const update = async (id, producto) => {

    const [result] = await db.query(

        `UPDATE productos
        SET
            nombre = ?,
            descripcion = ?,
            precio = ?,
            stock = ?,
            categoria = ?,
            imagen = ?,
            estado = ?
        WHERE id = ?`,

        [
            producto.nombre,
            producto.descripcion,
            producto.precio,
            producto.stock,
            producto.categoria,
            producto.imagen,
            producto.estado,
            id
        ]

    );

    return result;

};

const remove = async (id) => {

    const [result] = await db.query(

        `DELETE FROM productos
        WHERE id = ?`,

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