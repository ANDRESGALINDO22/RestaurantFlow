const DetailOrder = require("../models/detailOrder.model");

const crearDetalle = async (req, res) => {

    try {

        await DetailOrder.create(req.body);

        res.json({
            mensaje: "Detalle creado"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

module.exports = {

    crearDetalle

};