const express = require('express');
const mysql = require('mysql');
const axios = require('axios');

const app = express();
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pacha2024',
    database: 'sistema_pagos'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});

const kulquiApiKey = '';
const kulquiSecretKey = '';

app.post('/crear-pago', async (req, res) => {
    const { producto_id } = req.body;

    db.query('SELECT * FROM productos WHERE id = ?', [producto_id], async (err, producto) => {
        if (err) throw err;

        const precio = producto[0].precio;
        const nombre = producto[0].nombre;

        try {
       
            const respuestaKulqui = await axios.post('https://api.kulqui.com/v1/payments', {
                amount: precio,         
                currency: 'PEN',        
                description: nombre,    
                email: 'cristian1609@gmail.com', 
                
            }, {
                headers: {
                    'Authorization': `Bearer ${kulquiApiKey}`,
                    'Content-Type': 'application/json'
                }
            });

          
            res.json({ url: respuestaKulqui.data.redirect_url });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error creando el pago con Kulqui');
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
