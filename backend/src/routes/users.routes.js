const express = require("express");

const router = express.Router();

const {
    listarUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
} = require("../controllers/users.controller");

router.get("/", listarUsuarios);

router.post("/", crearUsuario);

router.put("/:id", actualizarUsuario);

router.delete("/:id", eliminarUsuario);

module.exports = router;