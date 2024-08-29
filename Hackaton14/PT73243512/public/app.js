document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const mensajeInput = document.getElementById('mensaje-input');
    const sendButton = document.getElementById('send-button');
    const clearButton = document.getElementById('clear-button');
  
    function loadMensajes() {
      fetch('/api/mensaje')
        .then(response => response.json())
        .then(mensajes => {
          chatBox.innerHTML = mensajes.map(msj => `
            <div class="mensaje">
              <strong>${msj.username}:</strong> ${msj.mensaje}
            </div>
          `).join('');
          chatBox.scrollTop = chatBox.scrollHeight;
        });
    }
  
    function sendMensaje() {
      const mensaje = mensajeInput.value.trim();
      if (!mensaje) return;
  
      fetch('/api/mensaje', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: 'user123',
          username: 'usuario1',
          mensaje
        })
      })
      .then(response => response.json())
      .then(() => {
        mensajeInput.value = '';
        loadMensajes();
      });
    }
  
    function clearMensajes() {
      fetch('/api/mensaje', { method: 'DELETE' })
        .then(() => loadMensajes());
    }
  
    sendButton.addEventListener('click', sendMensaje);
    clearButton.addEventListener('click', clearMensajes);
  
    loadMensajes();
  });
  