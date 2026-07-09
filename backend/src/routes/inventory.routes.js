console.log("✅ inventory.routes cargado");
const express = require("express");

const router = express.Router();

const {
    listarInventario,
    crearInventario,
    actualizarInventario,
    eliminarInventario
} = require("../controllers/inventory.controller");
console.log(require("../controllers/inventory.controller"));

router.get("/", listarInventario);

router.post("/", crearInventario);

router.put("/:id", actualizarInventario);

router.delete("/:id", eliminarInventario);

module.exports = router;