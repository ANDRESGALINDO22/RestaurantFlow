const express = require("express");

const router = express.Router();

const {

    listarProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto

} = require("../controllers/products.controller");

router.get("/", listarProductos);

router.post("/", crearProducto);

router.put("/:id", actualizarProducto);

router.delete("/:id", eliminarProducto);

module.exports = router;