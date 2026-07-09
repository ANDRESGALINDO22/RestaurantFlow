const express = require("express");

const router = express.Router();

const {
    obtenerReporte
} = require("../controllers/reports.controller");

router.get("/", obtenerReporte);

module.exports = router;