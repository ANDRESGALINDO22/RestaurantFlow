const express = require("express");

const router = express.Router();

const {
    listarPedidos,
    actualizarEstado
} = require("../controllers/kitchen.controller");

router.get("/", listarPedidos);

router.put("/:id", actualizarEstado);

module.exports = router;