require("dotenv").config();

const express = require("express");
const cors = require("cors");

const db = require("./config/database");

const authRoutes = require("./routes/auth.routes");
const usersRoutes = require("./routes/users.routes");
const productsRoutes = require("./routes/products.routes");
const categoriesRoutes = require("./routes/categories.routes");
const tablesRoutes = require("./routes/tables.routes");
const inventoryRoutes = require("./routes/inventory.routes");
const ordersRoutes = require("./routes/orders.routes");
const detailOrderRoutes = require("./routes/detailOrder.routes");
const kitchenRoutes = require("./routes/kitchen.routes");
const reportsRoutes = require("./routes/reports.routes");

const app = express();

console.log("DB_USER:", process.env.DB_USER);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_NAME:", process.env.DB_NAME);

db.getConnection()
.then((connection) => {

    console.log("✅ Conectado a MySQL");

    connection.release();

})
.catch((err) => {

    console.error(err);

});

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/tables", tablesRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/detail-orders", detailOrderRoutes);
app.use("/api/kitchen", kitchenRoutes);
app.use("/api/reports", reportsRoutes);

app.get("/", (req, res) => {

    res.json({
        mensaje: "RestaurantFlow API funcionando 🚀"
    });

});

module.exports = app;