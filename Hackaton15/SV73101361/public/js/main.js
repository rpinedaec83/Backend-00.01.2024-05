// Importar la librería jwt-decode si es necesario (usando CDN o instalada localmente)
// <script src="https://cdn.jsdelivr.net/npm/jwt-decode/build/jwt-decode.min.js"></script>

// Función para verificar si el usuario está autenticado
const checkAuth = () => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    // Redirigir a login si no hay token
    window.location.href = '/login.html';
  } else {
    // Decodificar el token JWT para obtener los datos del usuario
    try {
      const decodedToken = jwt_decode(token);

      // Mostrar el nombre del usuario en el dashboard
      const usernameElement = document.getElementById('username');
      if (usernameElement) {
        usernameElement.textContent = `Hola, ${decodedToken.name || decodedToken.email}!`;
      }

    } catch (error) {
      console.error('Error al decodificar el token JWT:', error);
      alert('Error al obtener la información del usuario.');
      // Si ocurre un error, redirigir al login
      window.location.href = '/login.html';
    }
  }
};

// Cerrar sesión
document.getElementById('logout')?.addEventListener('click', () => {
  localStorage.removeItem('token'); // Remover token
  window.location.href = '/';       // Redirigir a inicio
});

// Ejecutar al cargar la página
window.onload = checkAuth;
