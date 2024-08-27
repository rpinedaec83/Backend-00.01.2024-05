const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');
const cursoRoutes = require('./routes/cursoRoutes');
const ordenesRoutes = require('./routes/ordenesRoutes');
const cuponRoutes = require('./routes/cuponRoutes');

const index = express();
const PORT = process.env.PORT || 8000;


connectDB();


index.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  allowedHeaders: ['Accept', 'Authorization', 'Content-Type', 'X-Requested-With', 'Range']
}));


index.use(express.json());


index.use('/api/auth', authRoutes);
index.use('/api/curso', cursoRoutes);
index.use('/api/ordenes', ordenesRoutes);
index.use('/api/cupon', cuponRoutes);


index.use((req, res, next) => {
  res.status(404).json({ message: 'Recurso no encontrado' });
});


index.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

index.listen(PORT, () => {
  console.log(`index listening at port ${PORT}`);
});
