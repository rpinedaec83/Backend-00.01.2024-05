const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../src/models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Función para firmar el token JWT
const generateToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Estrategia de Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.BACKEND_URL}/api/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Buscar usuario por Google ID
        let user = await User.findOne({ where: { googleId: profile.id } });

        if (!user) {
          // Si no existe, crear un nuevo usuario
          user = await User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            authMethod: 'google',
            googleId: profile.id,
          });
        }

        // Generar el token JWT
        const token = generateToken(user);

        // Devolver el usuario y el token en el callback
        return done(null, { user, token });
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Estrategia de GitHub OAuth
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `${process.env.BACKEND_URL}/api/auth/github/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Obtener el email del perfil de GitHub
        let email = null;
        if (profile.emails && profile.emails.length > 0) {
          email = profile.emails[0].value;
        }

        // Buscar usuario por GitHub ID
        let user = await User.findOne({ where: { githubId: profile.id } });

        if (!user) {
          // Si no existe, crear un nuevo usuario
          user = await User.create({
            name: profile.displayName || profile.username,
            email: email,
            authMethod: 'github',
            githubId: profile.id,
          });
        }

        // Generar el token JWT
        const token = generateToken(user);

        // Devolver el usuario y el token en el callback
        return done(null, { user, token });
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

module.exports = passport;
