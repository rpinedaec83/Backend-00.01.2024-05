const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

console.log('authMiddleware cargado');

// Middleware para proteger rutas
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return res.status(401).json({ message: 'No autorizado, se requiere un token' });
  }

  try {
    // Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Obtener el usuario del token
    req.user = await User.findByPk(decoded.id);

    if (!req.user) {
      return res.status(401).json({ message: 'No autorizado, usuario no encontrado' });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: 'Token no válido', error: error.message });
  }
};

// Middleware para verificar rol de administrador
const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Acceso denegado, se requiere rol de administrador' });
  }
};

// Middleware para autenticar JWT en general
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1]; // Quitar "Bearer" del header

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Token no válido' });
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: 'No autorizado' });
  }
};

// Exportar todos los middlewares
module.exports = {
  protect,
  admin,
  authenticateJWT,
};
