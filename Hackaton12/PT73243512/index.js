const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Lista en memoria para almacenar las tareas
let tareas = [];

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // Ruta para servir el archivo HTML
    if (pathname === '/' && req.method === 'GET') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ error: '500 Internal Server Error' }));
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    // Ruta para crear una tarea
    else if (pathname === '/tareas' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const { nombre, descripcion, fecha, esCompletado } = JSON.parse(body);
                if (!nombre || !descripcion || !fecha) {
                    res.writeHead(400, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({ error: 'Faltan datos requeridos' }));
                    return;
                }

                const newTarea = {
                    id: tareas.length + 1,
                    nombre,
                    descripcion,
                    fecha,
                    esCompletado: esCompletado || false
                };

                tareas.push(newTarea);
                res.writeHead(201, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(newTarea));
            } catch (error) {
                res.writeHead(400, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ error: 'Datos inválidos' }));
            }
        });
    }
    // Ruta para mostrar las tareas pendientes
    else if (pathname === '/tareas/pending' && req.method === 'GET') {
        const pendingTareas = tareas.filter(tarea => !tarea.esCompletado);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(pendingTareas));
    }
    // Ruta para mostrar las tareas completadas
    else if (pathname === '/tareas/completed' && req.method === 'GET') {
        const completedTareas = tareas.filter(tarea => tarea.esCompletado);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(completedTareas));
    }
    // Manejar rutas no encontradas
    else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ error: '404 Not Found' }));
    }
});

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
