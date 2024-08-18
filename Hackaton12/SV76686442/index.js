const http = require('http');
const url = require('url');

let listaCompras = [];

// Crear el servidor
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    
    // Ruta para crear una nueva lista de compras
    if (parsedUrl.pathname === '/crear' && req.method === 'POST') {
        let body = '';

        // Leer datos del cuerpo de la solicitud
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // Cuando se recibe todo el cuerpo
        req.on('end', () => {
            try {
                const { nombre, descripcion, fecha, esCompletado } = JSON.parse(body);

                // Validar los parámetros
                if (nombre && descripcion && fecha) {
                    listaCompras.push({
                        nombre,
                        descripcion,
                        fecha,
                        esCompletado: esCompletado === true,
                    });

                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end('<h1>Lista de compra creada con éxito!</h1>');
                } else {
                    res.writeHead(400, { 'Content-Type': 'text/html' });
                    res.end('<h1>Error: Todos los campos son obligatorios.</h1>');
                }
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                res.end('<h1>Error: Formato JSON inválido.</h1>');
            }
        });
    }

    // Ruta para mostrar los pendientes
    else if (parsedUrl.pathname === '/pendientes' && req.method === 'GET') {
        const pendientes = listaCompras.filter(item => !item.esCompletado);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Listas de compras pendientes:</h1>');
        res.write('<ul>');
        pendientes.forEach(item => {
            res.write(`<li>${item.nombre} - ${item.descripcion} - ${item.fecha}</li>`);
        });
        res.write('</ul>');
        res.end();
    }

    // Ruta para mostrar los completados
    else if (parsedUrl.pathname === '/completados' && req.method === 'GET') {
        const completados = listaCompras.filter(item => item.esCompletado);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Listas de compras completadas:</h1>');
        res.write('<ul>');
        completados.forEach(item => {
            res.write(`<li>${item.nombre} - ${item.descripcion} - ${item.fecha}</li>`);
        });
        res.write('</ul>');
        res.end();
    }

    // Ruta no encontrada
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Página no encontrada</h1>');
    }
});

server.listen(8080, () => {
    console.log('Servidor ejecutándose en http://localhost:8080');
});
