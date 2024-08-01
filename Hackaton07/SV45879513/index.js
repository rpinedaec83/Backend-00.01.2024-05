const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Ruta para consultar los datos de un usuario de GitHub
app.get('/github/:username', async (req, res) => {
    const username = req.params.username;

    try {
        // Realiza una solicitud GET a la API de GitHub
        const response = await axios.get(`https://api.github.com/users/${username}`);
        
        // Envía la respuesta al cliente
        res.json(response.data);
    } catch (error) {
        // Manejo de errores
        if (error.response) {
            res.status(error.response.status).json({ error: error.response.data });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

app.listen(port, () => {
    console.log(`API Gateway running on http://localhost:${port}`);
});
