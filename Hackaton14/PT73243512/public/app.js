document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#mensaje-form');
    const input = document.querySelector('#mensaje-input');
    const chat = document.querySelector('#chat');
  
   
    const socket = io();
  
    form.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const message = input.value.trim();
  
        if (message) {
            
            socket.emit('sendMensaje', { texto: message, usuario: 'Anónimo' });
  
           
            input.value = '';
        }
    });
  
   
    socket.on('receiveMensaje', (data) => {
        chat.innerHTML += `<div><strong>${data.usuario}:</strong> ${data.texto}</div>`;
        chat.scrollTop = chat.scrollHeight;
    });
  });
  