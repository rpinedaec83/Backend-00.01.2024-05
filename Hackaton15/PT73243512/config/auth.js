const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const { User } = require('../models');

passport.use(new GoogleStrategy({
  clientID: 'GOOGLE_CLIENT_ID',
  clientSecret: 'GOOGLE_CLIENT_SECRET',
  callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOrCreate({
      where: { oauth_id: profile.id },
      defaults: { name: profile.displayName, email: profile.emails[0].value, token_acceso: accessToken }
    });
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
