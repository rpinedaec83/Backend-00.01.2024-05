const express = require('express');
const app = express();
const config = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/payments', paymentRoutes);

const port = config.port;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
