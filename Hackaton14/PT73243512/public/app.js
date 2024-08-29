document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#message-form');
  const input = document.querySelector('#message-input');
  const chat = document.querySelector('#chat');

  form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const message = input.value;

      if (message.trim()) {
          const response = await fetch('/api/mensajes', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ texto: message })
          });

          const result = await response.json();
          chat.innerHTML += `<div><strong>${result.usuario}:</strong> ${result.texto}</div>`;
          input.value = '';
      }
  });
});
