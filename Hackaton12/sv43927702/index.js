const http = require('http');
const url = require('url');

let listaCompras = [];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    
    if (pathname === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
            <head><title>Lista de Compras.</title></head>
            <body>
                <h1>Crear la Lista de Compras</h1>
                <form action="/crear-lista" method="POST">
                    <label>Nombre: <input type="text" name="nombre"></label><br>
                    <label>Descripcion: <input type="text" name="descripcion"></label><br>
                    <label>Fecha: <input type="date" name="fecha"></label><br>
                    <label>Completado: 
                        <select name="esCompletado">
                            <option value="false">No</option>
                            <option value="true">Si</option>
                        </select>
                    </label><br><br>
                    <button type="submit">Agregar a la Lista</button>
                </form>
                <h2>Elementos Pendientes</h2>
                <ul>
                    ${listaCompras.filter(item => !item.esCompletado).map(item => `
                        <li>${item.nombre} - ${item.descripcion} (Fecha: ${item.fecha})</li>
                    `).join('')}
                </ul>
                <h2>Elementos Completados</h2>
                <ul>
                    ${listaCompras.filter(item => item.esCompletado).map(item => `
                        <li>${item.nombre} - ${item.descripcion} (Fecha: ${item.fecha})</li>
                    `).join('')}
                </ul>
            </body>
            </html>
        `);
    }
    // Ruta para crear un elemento en la lista
    else if (pathname === '/crear-lista' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const params = new URLSearchParams(body);
            const nombre = params.get('nombre');
            const descripcion = params.get('descripcion');
            const fecha = params.get('fecha');
            const esCompletado = params.get('esCompletado') === 'true';

            listaCompras.push({ nombre, descripcion, fecha, esCompletado });

            res.writeHead(302, { 'Location': '/' });
            res.end();
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Página no encontrada</h1>');
    }
});

server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

