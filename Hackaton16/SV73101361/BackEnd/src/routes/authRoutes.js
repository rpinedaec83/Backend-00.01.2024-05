const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('../../config/passport');

// Rutas de registro e inicio de sesión
router.post('/register', (req, res, next) => {
  const { email, password } = req.body;

  // Validar si los campos requeridos están presentes
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'El correo electrónico y la contraseña son requeridos.',
    });
  }

  // Pasar al controlador de registro
  authController.register(req, res, next);
});

// Ruta de login sin express-validator
router.post('/login', (req, res, next) => {
  const { email, password } = req.body;

  // Validar si los campos requeridos están presentes
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'El correo electrónico y la contraseña son requeridos.',
    });
  }

  // Pasar al controlador de login
  authController.login(req, res, next);
});

// Ruta para iniciar la autenticación con Google
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback de Google OAuth con JWT
router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }), // No usar sesiones
  (req, res) => {
    const { token } = req.user; // Obtener el token generado en el callback de Passport
    // Redirigir al frontend con el token
    res.redirect(`${process.env.FRONTEND_URL}/oauth/callback?token=${token}`);
  }
);

// Ruta para iniciar la autenticación con GitHub
router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

// Callback de GitHub OAuth con JWT
router.get(
  '/github/callback',
  passport.authenticate('github', { session: false }), // No usar sesiones
  (req, res) => {
    const { token } = req.user; // Obtener el token generado en el callback de Passport
    // Redirigir al frontend con el token
    res.redirect(`${process.env.FRONTEND_URL}/oauth/callback?token=${token}`);
  }
);

module.exports = router;
