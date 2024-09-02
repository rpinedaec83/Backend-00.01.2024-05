document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#mensaje-form');
    const input = document.querySelector('#mensaje-input');
    const chat = document.querySelector('#chat');
  
    const socket = io();
  
    form.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const mensaje = input.value.trim();
  
        if (mensaje) {
            
            socket.emit('sendMensaje', mensaje, (error) => {
                if (error) {
                    console.error('Error:', error);
                }
            });

            input.value = '';
        }
    });
  
 
    socket.on('mensaje', (data) => {
        const { usuario, texto } = data;
        const mensageHTML = `<div><strong>${usuario}:</strong> ${texto}</div>`;
        chat.innerHTML += mensageHTML;
        chat.scrollTop = chat.scrollHeight;
    });
});
