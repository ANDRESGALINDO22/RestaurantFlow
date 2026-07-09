const Inventory = require("../models/inventory.model");

const listarInventario = async (req, res) => {

    try {

        const datos = await Inventory.getAll();

        res.json(datos);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const crearInventario = async (req, res) => {

    try {

        await Inventory.create(req.body);

        res.json({
            mensaje: "Registro creado"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const actualizarInventario = async (req, res) => {

    try {

        await Inventory.update(req.params.id, req.body);

        res.json({
            mensaje: "Actualizado"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const eliminarInventario = async (req, res) => {

    try {

        await Inventory.remove(req.params.id);

        res.json({
            mensaje: "Eliminado"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

module.exports = {
    listarInventario,
    crearInventario,
    actualizarInventario,
    eliminarInventario
};