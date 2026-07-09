const Category = require("../models/category.model");

const listarCategorias = async (req, res) => {

    try {

        const categorias = await Category.getAll();

        res.json(categorias);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const crearCategoria = async (req, res) => {

    try {

        await Category.create(req.body);

        res.status(201).json({
            mensaje: "Categoría creada correctamente"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const actualizarCategoria = async (req, res) => {

    try {

        await Category.update(req.params.id, req.body);

        res.json({
            mensaje: "Categoría actualizada"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const eliminarCategoria = async (req, res) => {

    try {

        await Category.remove(req.params.id);

        res.json({
            mensaje: "Categoría eliminada"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

module.exports = {
    listarCategorias,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria
};