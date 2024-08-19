// app/routes/color.routes.js

const colors = [];

module.exports = function(app) {
    // Crear un nuevo color
    app.post('/color', (req, res) => {
        const { description } = req.body;
        if (!description) {
            return res.status(400).send('Descripción es requerida.');
        }

        const newColor = { id: colors.length + 1, description };
        colors.push(newColor);
        res.status(201).json(newColor);
    });

    // Obtener todos los colores
    app.get('/color', (req, res) => {
        res.json(colors);
    });

    // Obtener un color por ID
    app.get('/color/:id', (req, res) => {
        const colorId = parseInt(req.params.id, 10);
        const color = colors.find(c => c.id === colorId);
        if (!color) {
            return res.status(404).send('Color no encontrado.');
        }
        res.json(color);
    });

    // Actualizar un color por ID
    app.put('/color/:id', (req, res) => {
        const colorId = parseInt(req.params.id, 10);
        const { description } = req.body;

        const colorIndex = colors.findIndex(c => c.id === colorId);
        if (colorIndex === -1) {
            return res.status(404).send('Color no encontrado.');
        }

        if (description) colors[colorIndex].description = description;

        res.json(colors[colorIndex]);
    });

    // Eliminar un color por ID
    app.delete('/color/:id', (req, res) => {
        const colorId = parseInt(req.params.id, 10);
        const colorIndex = colors.findIndex(c => c.id === colorId);

        if (colorIndex === -1) {
            return res.status(404).send('Color no encontrado.');
        }

        colors.splice(colorIndex, 1);
        res.status(204).send(); // 204 No Content
    });
};
