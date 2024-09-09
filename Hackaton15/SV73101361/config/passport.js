const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/User');

// Estrategia de Google OAuth
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}, 
async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ where: { googleId: profile.id } });

    if (!user) {
      const email = profile.emails?.[0].value;
      if (!email) return done(new Error('Correo no encontrado en el perfil de Google'));

      user = await User.create({
        googleId: profile.id,
        name: profile.displayName,
        email: email,
      });
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

// Estrategia de GitHub OAuth
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: '/auth/github/callback'
},
async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ where: { githubId: profile.id } });

    if (!user) {
      const email = profile.emails?.[0].value;
      if (!email) return done(new Error('Correo no encontrado en el perfil de GitHub'));

      user = await User.create({
        githubId: profile.id,
        name: profile.displayName,
        email: email,
      });
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
