const http = require('http');
const fs = require('fs');
const url = require('url');

let shoppingList = [];

if (fs.existsSync('data.json')) {
    const data = fs.readFileSync('data.json');
    shoppingList = JSON.parse(data);
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    if (path === '/crear') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const item = JSON.parse(body);
            shoppingList.push(item);

            fs.writeFileSync('data.json', JSON.stringify(shoppingList));

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Item agregado con éxito' }));
        });

    } else if (path === '/pendientes') {
        const pendientes = shoppingList.filter(item => !item.EsCompletado);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(pendientes));

    } else if (path === '/completados') {
        const completados = shoppingList.filter(item => item.EsCompletado);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(completados));

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
});

const PORT = 3090;
server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
