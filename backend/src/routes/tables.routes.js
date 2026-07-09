const express = require("express");

const router = express.Router();

const {

    listarMesas,
    crearMesa,
    actualizarMesa,
    eliminarMesa

} = require("../controllers/tables.controller");

router.get("/", listarMesas);

router.post("/", crearMesa);

router.put("/:id", actualizarMesa);

router.delete("/:id", eliminarMesa);

module.exports = router;