const openAIService = require('../services/openAIService');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');

    socket.on('chatMessage', async (msg) => {
      try {
        // Llama al servicio de OpenAI para obtener la respuesta del chatbot
        const response = await openAIService.getChatbotResponse(msg);

        // Envía la respuesta al cliente
        socket.emit('chatResponse', response);
      } catch (error) {
        console.error('Error al procesar el mensaje:', error);
        socket.emit('chatError', 'Ocurrió un error al procesar tu mensaje.');
      }
    });

    socket.on('disconnect', () => {
      console.log('Cliente desconectado');
    });
  });
};
