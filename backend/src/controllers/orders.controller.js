const Order = require("../models/orders.model");

const listarPedidos = async (req, res) => {

    try {

        const datos = await Order.getAll();

        res.json(datos);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const crearPedido = async (req, res) => {

    try {

        await Order.create(req.body);

        res.json({
            mensaje: "Pedido creado"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const actualizarPedido = async (req, res) => {

    try {

        await Order.update(req.params.id, req.body);

        res.json({
            mensaje: "Pedido actualizado"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const eliminarPedido = async (req, res) => {

    try {

        await Order.remove(req.params.id);

        res.json({
            mensaje: "Pedido eliminado"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

module.exports = {
    listarPedidos,
    crearPedido,
    actualizarPedido,
    eliminarPedido
};