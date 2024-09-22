const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

no
const db = mysql.createConnection({
  host: process.env.DB_HOST || '${DB_HOST}',
  user: process.env.DB_USER || '${DB_USER}',
  password: process.env.DB_PASSWORD || '${DB_PASSWORD}',
  database: process.env.DB_NAME || '${DB_NAME}'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});


app.post('/adduser', (req, res) => {
  const { name, email } = req.body;
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(query, [name, email], (err, result) => {
    if (err) throw err;
    res.send('Usuario agregado exitosamente');
  });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
