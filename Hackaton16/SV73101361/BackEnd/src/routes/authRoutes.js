const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const passport = require('passport');
require('../../config/passport');


// Rutas de registro e inicio de sesión
router.post('/register', authController.register);
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Debe ser un email válido'),
    body('password').not().isEmpty().withMessage('La contraseña es requerida'),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    // Lógica de inicio de sesión
    const { email, password } = req.body;
    // Procesar inicio de sesión...

    res.status(200).json({
      success: true,
      message: 'Inicio de sesión exitoso',
    });
  }
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Generar token JWT
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    // Redirigir al frontend con el token
    res.redirect(`${process.env.FRONTEND_URL}/oauth/callback?token=${token}`);
  }
);

// Ruta para iniciar la autenticación con GitHub
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

// Callback de GitHub OAuth
router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    // Generar token JWT
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    // Redirigir al frontend con el token
    res.redirect(`${process.env.FRONTEND_URL}/oauth/callback?token=${token}`);
  }
);

module.exports = router;
