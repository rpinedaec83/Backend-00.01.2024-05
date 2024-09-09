const { verifyToken } = require('../config/jwt');

// Middleware para validar el token JWT
const validateJwt = (req, res, next) => {
  // Obtener el token del encabezado Authorization
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'No se proporcionó un token.' });
  }

  try {
    // Verificar y decodificar el token
    const decoded = verifyToken(token);
    req.user = decoded; // Añadir la información decodificada del token al request
    next(); // Continuar con la siguiente función en la ruta
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Token inválido.' });
  }
};

module.exports = validateJwt;
