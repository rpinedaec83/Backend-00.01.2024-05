const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Registro de usuario
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Crear nuevo usuario
    const newUser = await User.create({
      name,
      email,
      password, // El hashing se realiza en el hook del modelo
    });

    // Generar token JWT
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    // Enviar respuesta
    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error: error.message });
  }
};

// Inicio de sesión de usuario
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar si el usuario existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    // Verificar la contraseña
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    // Generar token JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    // Enviar respuesta
    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error: error.message });
  }
};

// Callback de Google OAuth
exports.googleCallback = async (req, res) => {
  try {
    // El usuario ya está autenticado gracias a Passport
    const user = req.user;

    // Generar token JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    // Redirigir al frontend con el token (puedes ajustar esto según tu implementación)
    res.redirect(`http://localhost:5173/oauth/callback?token=${token}`);
  } catch (error) {
    res.status(500).json({ message: 'Error en la autenticación con Google', error: error.message });
  }
};

// Callback de GitHub OAuth
exports.githubCallback = async (req, res) => {
  try {
    // El usuario ya está autenticado gracias a Passport
    const user = req.user;

    // Generar token JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    // Redirigir al frontend con el token (puedes ajustar esto según tu implementación)
    res.redirect(`http://localhost:5173/oauth/callback?token=${token}`);
  } catch (error) {
    res.status(500).json({ message: 'Error en la autenticación con GitHub', error: error.message });
  }
};
