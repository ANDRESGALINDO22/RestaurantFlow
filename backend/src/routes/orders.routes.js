const express = require("express");

const router = express.Router();

const {
    listarPedidos,
    crearPedido,
    actualizarPedido,
    eliminarPedido
} = require("../controllers/orders.controller");

router.get("/", listarPedidos);

router.post("/", crearPedido);

router.put("/:id", actualizarPedido);

router.delete("/:id", eliminarPedido);

module.exports = router;