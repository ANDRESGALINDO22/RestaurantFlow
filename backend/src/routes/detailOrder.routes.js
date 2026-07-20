const express = require("express");

const router = express.Router();

const {
    crearDetalle
} = require("../controllers/detailOrder.controller");

router.post("/", crearDetalle);

module.exports = router;