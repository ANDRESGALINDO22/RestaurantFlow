const Kitchen = require("../models/kitchen.model");

const listarPedidos = async (req, res) => {

    try {

        const datos = await Kitchen.getAll();

        res.json(datos);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const actualizarEstado = async (req, res) => {

    try {

        await Kitchen.cambiarEstado(
            req.params.id,
            req.body.estado
        );

        res.json({
            mensaje: "Estado actualizado"
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
    actualizarEstado
};