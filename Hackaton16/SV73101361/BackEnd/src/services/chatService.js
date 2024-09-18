import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:5000'; // Cambia esto según tu configuración

class ChatService {
  constructor() {
    this.socket = io(SOCKET_URL);

    this.socket.on('connect', () => {
      console.log('Conectado al servidor de chat');
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor de chat');
    });
  }

  sendMessage(message) {
    this.socket.emit('chatMessage', message);
  }

  onChatResponse(callback) {
    this.socket.on('chatResponse', callback);
  }

  onChatError(callback) {
    this.socket.on('chatError', callback);
  }
}

export default new ChatService();
