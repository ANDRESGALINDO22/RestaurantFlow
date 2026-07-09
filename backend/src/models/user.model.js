const db = require("../config/database");

const getAll = async () => {

    const [rows] = await db.query(`
        SELECT
            id,
            nombre,
            correo,
            rol,
            estado
        FROM usuarios
        ORDER BY id DESC
    `);

    return rows;
};

const create = async (usuario) => {

    const [result] = await db.query(
        `INSERT INTO usuarios
        (nombre, correo, password, rol, estado)
        VALUES (?, ?, ?, ?, ?)`,
        [
            usuario.nombre,
            usuario.correo,
            usuario.password,
            usuario.rol,
            usuario.estado
        ]
    );

    return result;
};

const findByEmail = async (correo) => {

    const [rows] = await db.query(
        `SELECT * FROM usuarios WHERE correo = ?`,
        [correo]
    );

    return rows[0];
};

const update = async (id, usuario) => {

    const [result] = await db.query(
        `UPDATE usuarios
        SET
            nombre = ?,
            correo = ?,
            rol = ?,
            estado = ?
        WHERE id = ?`,
        [
            usuario.nombre,
            usuario.correo,
            usuario.rol,
            usuario.estado,
            id
        ]
    );

    return result;
};
const remove = async (id) => {

    const [result] = await db.query(
        "DELETE FROM usuarios WHERE id = ?",
        [id]
    );

    return result;

};
module.exports = {
    getAll,
    create,
    findByEmail,
    update,
    remove
};