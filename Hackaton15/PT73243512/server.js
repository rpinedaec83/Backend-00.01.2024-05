const express = require('express');
const passport = require('passport');
const session = require('express-session');
const { sequelize } = require('./models');
const packageRoutes = require('./routes/package');
require('./config/auth');

const app = express();
app.use(express.json());
app.use(session({ secret: 'SECRET', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/paquetes');
});

app.use('/paquetes', packageRoutes);

app.listen(3000, async () => {
  console.log('Servidor iniciado en http://localhost:3000');
  await sequelize.authenticate();
  console.log('Base de datos conectada');
});
