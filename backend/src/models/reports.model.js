const db = require("../config/database");

const getReport = async () => {

    const [[usuarios]] = await db.query(
        "SELECT COUNT(*) total FROM usuarios"
    );

    const [[productos]] = await db.query(
        "SELECT COUNT(*) total FROM productos"
    );

    const [[categorias]] = await db.query(
        "SELECT COUNT(*) total FROM categorias"
    );

    const [[mesas]] = await db.query(
        "SELECT COUNT(*) total FROM mesas"
    );

    const [[pedidos]] = await db.query(
        "SELECT COUNT(*) total FROM pedidos"
    );

    const [[ventas]] = await db.query(
        "SELECT IFNULL(SUM(total),0) total FROM pedidos"
    );

    const [[pendientes]] = await db.query(
        "SELECT COUNT(*) total FROM pedidos WHERE estado='Pendiente'"
    );

    return {
        usuarios: usuarios.total,
        productos: productos.total,
        categorias: categorias.total,
        mesas: mesas.total,
        pedidos: pedidos.total,
        ventas: ventas.total,
        pendientes: pendientes.total
    };

};

module.exports = {
    getReport
};