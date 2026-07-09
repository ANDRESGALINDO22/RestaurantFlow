const db = require("../config/database");

const getAll = async () => {

    const [rows] = await db.query(`
        SELECT *
        FROM categorias
        ORDER BY id DESC
    `);

    return rows;

};

const create = async (categoria) => {

    const [result] = await db.query(

        `INSERT INTO categorias
        (nombre, descripcion, estado)
        VALUES (?, ?, ?)`,

        [
            categoria.nombre,
            categoria.descripcion,
            categoria.estado
        ]

    );

    return result;

};

const update = async (id, categoria) => {

    const [result] = await db.query(

        `UPDATE categorias
        SET
            nombre = ?,
            descripcion = ?,
            estado = ?
        WHERE id = ?`,

        [
            categoria.nombre,
            categoria.descripcion,
            categoria.estado,
            id
        ]

    );

    return result;

};

const remove = async (id) => {

    const [result] = await db.query(
        `DELETE FROM categorias WHERE id = ?`,
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