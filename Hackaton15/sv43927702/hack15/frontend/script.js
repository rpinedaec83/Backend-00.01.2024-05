
document.addEventListener('DOMContentLoaded', async function() {
    const userSection = document.getElementById('user-section');
    const createPackageBtn = document.getElementById('create-package-btn');
    const packagesList = document.getElementById('packages-list');
  
    try {
      const response = await axios.get('/profile');
      const user = response.data;
  
    
      userSection.innerHTML = `<h2>Welcome, ${user.nombre}</h2>`;
      createPackageBtn.style.display = 'block';
  
      
      createPackageBtn.addEventListener('click', async function() {
        const newPackage = {
          destinatario_id: 2,  
          peso: 1.5,
          dimensiones: '30x30x30',
          descripcion: 'Ropa',
        };
        const response = await axios.post('/package', newPackage);
        displayPackage(response.data);
      });
  
      // Obtener y mostrar los paquetes
      const packagesResponse = await axios.get('/package');
      packagesResponse.data.forEach(pkg => displayPackage(pkg));
  
    } catch (error) {
      // Si el usuario no está autenticado, mostrar un botón de login
      userSection.innerHTML = `<a href="/auth/google">Login with Google</a>`;
    }
  
    // Función para mostrar un paquete en la lista
    function displayPackage(pkg) {
      const li = document.createElement('li');
      li.textContent = `${pkg.descripcion} - ${pkg.estado}`;
      packagesList.appendChild(li);
    }
  });
  