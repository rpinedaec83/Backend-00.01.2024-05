const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Importar rutas
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');
const orderRoutes = require('./routes/orders');
const paymentRoutes = require('./routes/payments');
const couponRoutes = require('./routes/coupons');

// Definir rutas
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/coupons', couponRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
