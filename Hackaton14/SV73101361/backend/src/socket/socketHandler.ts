import { Server, Socket } from 'socket.io';
import Message from '../models/messageModel';
import { streamChatResponse } from '../services/openaiService';

export const configureSocket = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log('A user connected:', socket.id);

    // Envía el historial de mensajes cuando un nuevo usuario se conecta
    Message.findAll().then(messages => {
      socket.emit('loadHistory', messages);
    });

    socket.on('message', async (messageContent: string) => {
      // Guardar el mensaje del usuario en la base de datos
      const userMessage = await Message.create({ content: messageContent, sender: 'user' });

      // Enviar el mensaje del usuario solo a otros clientes conectados, no a sí mismo
      socket.broadcast.emit('message', userMessage);

      // Verificar si el mensaje contiene "/chat"
      if (messageContent.includes('/chat')) {
        // Eliminar el comando "/chat" del contenido del mensaje antes de enviar a GPT-4
        const query = messageContent.replace('/chat', '').trim();

        // Obtener la respuesta del bot usando OpenAI
        const stream = await streamChatResponse(query);
        let accumulatedText = '';

        for await (const chunk of stream) {
          accumulatedText += chunk.choices[0]?.delta?.content || '';
        }

        // Guardar la respuesta del bot en la base de datos
        const botMessage = await Message.create({ content: accumulatedText, sender: 'bot' });

        // Enviar la respuesta del bot a todos los clientes conectados
        io.emit('message', botMessage);
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};
