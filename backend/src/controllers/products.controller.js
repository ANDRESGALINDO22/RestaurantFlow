const Product = require("../models/product.model");

const listarProductos = async (req, res) => {

    try {

        const productos = await Product.getAll();

        res.json(productos);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const crearProducto = async (req, res) => {

    try {

        await Product.create(req.body);

        res.status(201).json({
            mensaje: "Producto creado correctamente"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const actualizarProducto = async (req, res) => {

    try {

        await Product.update(req.params.id, req.body);

        res.json({
            mensaje: "Producto actualizado correctamente"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const eliminarProducto = async (req, res) => {

    try {

        await Product.remove(req.params.id);

        res.json({
            mensaje: "Producto eliminado correctamente"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

module.exports = {
    listarProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};