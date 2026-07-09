const Table = require("../models/table.model");

const listarMesas = async (req, res) => {

    try {

        const mesas = await Table.getAll();

        res.json(mesas);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const crearMesa = async (req, res) => {

    try {

        await Table.create(req.body);

        res.status(201).json({
            mensaje: "Mesa creada correctamente"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const actualizarMesa = async (req, res) => {

    try {

        await Table.update(req.params.id, req.body);

        res.json({
            mensaje: "Mesa actualizada correctamente"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const eliminarMesa = async (req, res) => {

    try {

        await Table.remove(req.params.id);

        res.json({
            mensaje: "Mesa eliminada correctamente"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

module.exports = {
    listarMesas,
    crearMesa,
    actualizarMesa,
    eliminarMesa
};