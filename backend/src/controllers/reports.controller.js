const Report = require("../models/reports.model");

const obtenerReporte = async (req, res) => {

    try {

        const datos = await Report.getReport();

        res.json(datos);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

module.exports = {
    obtenerReporte
};