require("dotenv").config();

const bcrypt = require("bcryptjs");
const db = require("../config/database");

async function createAdmin() {

    try {

        const password = await bcrypt.hash("123456", 10);

        await db.query(`
            INSERT INTO usuarios
            (nombre, correo, password, rol_id)
            VALUES
            (?, ?, ?, ?)
        `, [
            "Administrador",
            "admin@restaurantflow.com",
            password,
            1
        ]);

        console.log("✅ Administrador creado correctamente.");

        process.exit();

    } catch (error) {

        console.log(error);

        process.exit();

    }

}

createAdmin();