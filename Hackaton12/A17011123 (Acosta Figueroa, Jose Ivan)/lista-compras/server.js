const http = require('http');
const mysql = require('mysql');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    } else if (req.url.startsWith('/styles.css') || req.url.startsWith('/script.js')) {
        const filePath = path.join(__dirname, 'public', req.url);
        const ext = path.extname(filePath);
        const contentType = ext === '.css' ? 'text/css' : 'application/javascript';
        
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, {'Content-Type': contentType});
            res.end(data);
        });
    } else if (req.method === 'POST' && req.url === '/create') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { nombre, descripcion, fecha, esCompletado } = JSON.parse(body);
            const query = 'INSERT INTO compras (nombre, descripcion, fecha, es_completado) VALUES (?, ?, ?, ?)';
            connection.query(query, [nombre, descripcion, fecha, esCompletado], (err) => {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('Error inserting data');
                    return;
                }
                res.writeHead(201, {'Content-Type': 'text/plain'});
                res.end('Item added');
            });
        });
    } else if (req.method === 'POST' && req.url.startsWith('/complete/')) {
        const id = req.url.split('/')[2];
        const query = 'UPDATE compras SET es_completado = TRUE WHERE id = ?';
        connection.query(query, [id], (err) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error updating data');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Item updated');
        });
    } else if (req.method === 'GET' && req.url === '/pending') {
        const query = 'SELECT * FROM compras WHERE es_completado = FALSE';
        connection.query(query, (err, results) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error fetching data');
                return;
            }
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(results));
        });
    } else if (req.method === 'GET' && req.url === '/completed') {
        const query = 'SELECT * FROM compras WHERE es_completado = TRUE';
        connection.query(query, (err, results) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error fetching data');
                return;
            }
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(results));
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
