const db = require("../config/database");

const getAll = async () => {

    const [rows] = await db.query(`
        SELECT *
        FROM mesas
        ORDER BY id DESC
    `);

    return rows;

};

const create = async (mesa) => {

    const [result] = await db.query(

        `INSERT INTO mesas
        (numero, capacidad, estado)
        VALUES (?, ?, ?)`,

        [
            mesa.numero,
            mesa.capacidad,
            mesa.estado
        ]

    );

    return result;

};

const update = async (id, mesa) => {

    const [result] = await db.query(

        `UPDATE mesas
        SET
            numero = ?,
            capacidad = ?,
            estado = ?
        WHERE id = ?`,

        [
            mesa.numero,
            mesa.capacidad,
            mesa.estado,
            id
        ]

    );

    return result;

};

const remove = async (id) => {

    const [result] = await db.query(
        `DELETE FROM mesas WHERE id = ?`,
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