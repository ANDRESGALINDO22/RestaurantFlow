const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {

    try {

        const { correo, password } = req.body;

        const user = await User.findByEmail(correo);

        if (!user) {

            return res.status(401).json({
                ok: false,
                mensaje: "Correo o contraseña incorrectos"
            });

        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {

            return res.status(401).json({
                ok: false,
                mensaje: "Correo o contraseña incorrectos"
            });

        }

        const token = jwt.sign(
            {
                id: user.id,
                rol: user.rol
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "8h"
            }
        );

        res.json({
            ok: true,
            token,
            usuario: {
                id: user.id,
                nombre: user.nombre,
                correo: user.correo,
                rol: user.rol
            }
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            mensaje: "Error del servidor"
        });

    }

};