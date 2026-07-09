const User = require("../models/user.model");

const listarUsuarios = async (req, res) => {

    try {

        const usuarios = await User.getAll();

        res.json(usuarios);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const crearUsuario = async (req, res) => {

    try {

        await User.create(req.body);

        res.status(201).json({
            mensaje: "Usuario creado correctamente"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const actualizarUsuario = async (req, res) => {

    try {

        await User.update(req.params.id, req.body);

        res.json({
            mensaje: "Usuario actualizado correctamente"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

const eliminarUsuario = async (req, res) => {

    try {

        await User.remove(req.params.id);

        res.json({
            mensaje: "Usuario eliminado correctamente"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

module.exports = {
    listarUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
};