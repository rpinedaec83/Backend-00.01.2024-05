const http = require("node:http");
const url = require("node:url");

// Lista de compras
let listaCompras = [];

// Crear servidor
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;
    const path = parsedUrl.pathname;

    // Ruta para agregar un elemento a la lista de compras
    if (method === 'POST' && path === '/crear/lista') {
        let body = '';

        // Recibir los datos enviados en el request
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                // Parseamos el body y obtenemos los campos
                const { nombre, descripcion, fecha, esCompletado } = JSON.parse(body);

                // Validación de campos requeridos
                if (!nombre || !descripcion || !fecha) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Todos los campos (nombre, descripcion, fecha) son obligatorios.' }));
                }

                // Crear el nuevo item
                const nuevoItem = {
                    nombre,
                    descripcion,
                    fecha,
                    esCompletado: esCompletado || false,
                };

                // Agregar a la lista de compras
                listaCompras.push(nuevoItem);

                // Respuesta exitosa
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Elemento añadido a la lista de compras', item: nuevoItem }));
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Error al procesar los datos. Asegúrate de que el formato sea correcto.' }));
            }
        });
    }
    // Ruta para mostrar los elementos pendientes
    else if (method === 'GET' && path === '/pendientes') {
        const pendientes = listaCompras.filter(item => !item.esCompletado);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(pendientes));
    }
    // Ruta para mostrar los elementos completados
    else if (method === 'GET' && path === '/completados') {
        const completados = listaCompras.filter(item => item.esCompletado);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(completados));
    }
    // Ruta no encontrada
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
});

// Iniciar el servidor
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});