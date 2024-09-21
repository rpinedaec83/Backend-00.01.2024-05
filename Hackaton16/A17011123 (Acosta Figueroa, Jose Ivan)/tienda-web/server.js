const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");
const authenticateJWT = require("./middlewares/auth.middleware");

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
const productRoutes = require("./routes/product.routes");
const userRoutes = require("./routes/user.routes");
const paymentRoutes = require("./routes/payment.routes");
const cartRoutes = require("./routes/cart.routes");
const orderRoutes = require("./routes/order.routes");

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/payments", paymentRoutes);
app.use("/carts", authenticateJWT, cartRoutes); //  necesita identificacion
app.use("/orders", authenticateJWT, orderRoutes); //  necesita identificacion
// Sincronización de la base de datos
db.sequelize.sync().then(() => {
  console.log("DB sincronizada");
});

// Levantar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
