const express = require('express');
const session = require('express-session');
const passport = require('passport');
const { sequelize, User, Package, Message, Location } = require('./models');
require('dotenv').config();
require('./auth');

const app = express();
app.use(express.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }), 
  (req, res) => {
    res.redirect('/');
  }
);

app.get('/profile', (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Not logged in' });
  }
  res.json(req.user);
});

app.post('/package', async (req, res) => {
  const { destinatario_id, peso, dimensiones, descripcion } = req.body;
  if (!req.user) {
    return res.status(401).json({ message: 'Not logged in' });
  }
  const paquete = await Package.create({
    remitente_id: req.user.id,
    destinatario_id,
    peso,
    dimensiones,
    descripcion,
    estado: 'en tránsito',
  });
  res.json(paquete);
});

app.get('/package/:id/locations', async (req, res) => {
  const ubicaciones = await Location.findAll({ where: { paquete_id: req.params.id }, order: [['createdAt', 'ASC']] });
  res.json(ubicaciones);
});

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
