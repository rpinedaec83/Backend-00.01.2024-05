// Lógica para manejar el inicio de sesión con Google
document.getElementById('login-google').addEventListener('click', () => {
    // Redirigir al backend para la autenticación con Google en el puerto 3000
    window.location.href = 'http://localhost:3000/auth/google';
  });
  
  // Lógica para manejar el inicio de sesión con GitHub
  document.getElementById('login-github').addEventListener('click', () => {
    // Redirigir al backend para la autenticación con GitHub en el puerto 3000
    window.location.href = 'http://localhost:3000/auth/github';
  });
  