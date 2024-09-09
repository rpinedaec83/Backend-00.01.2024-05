const socket = io('http://localhost:3000');  // Conectar a Socket.IO en localhost:3000

// Escuchar mensajes entrantes
socket.on('mensajeRecibido', (data) => {
  const messagesDiv = document.getElementById('messages');
  const messageItem = document.createElement('p');
  messageItem.textContent = `Mensaje: ${data}`;
  messagesDiv.appendChild(messageItem);
});

// Enviar mensaje al servidor
document.getElementById('send-message').addEventListener('click', () => {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;

  if (message) {
    socket.emit('enviarMensaje', message);  // Enviar mensaje al servidor
    messageInput.value = '';  // Limpiar el campo
  }
});
