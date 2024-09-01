require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const OpenAI = require('openai');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.PORT || 3000;

app.use(express.static('public'));

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

io.on('connection', (socket) => {
    console.log('Nuevo usuario conectado');
    const conversationHistory = [];

    socket.on('sendMensaje', async (mensaje, callback) => {
        try {
            console.log('Mensaje del usuario:', mensaje);
            conversationHistory.push({ role: 'user', content: mensaje });

            const completion = await openai.chat.completions.create({
                model: process.env.MODEL || 'gpt-3.5-turbo',
                mensajes: conversationHistory,
            });

            const response = completion.choices[0]?.mensaje?.content || 'No hay respuesta del bot';
            console.log('Respuesta del bot:', response);
            
            conversationHistory.push({ role: 'assistant', content: response });
            socket.emit('mensaje', { usuario: 'ChatBot', texto: response });

            if (typeof callback === 'function') {
                callback();
            }
        } catch (error) {
            console.error('Error:', error);
            if (typeof callback === 'function') {
                callback('Error: No se pudo conectar al chatbot');
            }
            // Notificar al cliente sobre el problema de cuota
            socket.emit('mensjae', { usuario: 'Sistema', texto: 'Lo siento, el chatbot está actualmente fuera de servicio debido a limitaciones de cuota. Intenta nuevamente más tarde.' });
        }
    });

    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

server.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`);
});
