let map;
let markers = [];

// Inicializar Google Maps
function initMap() {
  const defaultLocation = { lat: -12.0464, lng: -77.0428 }; // Lima, Perú
  map = new google.maps.Map(document.getElementById("map"), {
    center: defaultLocation,
    zoom: 8,
  });

  // Obtener y mostrar paquetes en el mapa
  getPackages();
}

// Obtener la lista de paquetes
const getPackages = async () => {
  try {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage

    if (!token) {
      throw new Error('No se encontró el token de autenticación.');
    }

    const response = await fetch('http://localhost:3000/api/packages', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Error al obtener los paquetes');
    }

    const data = await response.json();
    const packageList = document.getElementById('packages');
    packageList.innerHTML = ''; // Limpiar la lista antes de mostrar nuevos paquetes

    // Limpiar los marcadores anteriores
    clearMarkers();

    // Procesar los paquetes recibidos
    data.packages.forEach(pkg => {
      // Añadir paquete a la lista de la UI
      const listItem = document.createElement('li');
      listItem.textContent = `Paquete: ${pkg.trackingNumber} - Ubicación: ${pkg.location}`;
      packageList.appendChild(listItem);

      // Añadir marcador en el mapa basado en la ubicación del paquete
      addMarker(pkg.location);
    });
  } catch (error) {
    console.error('Error:', error.message);
    alert('Error al obtener los paquetes. Por favor, inténtalo nuevamente.');
  }
};

// Añadir un marcador en el mapa basado en la ubicación
const addMarker = (location) => {
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: location }, (results, status) => {
    if (status === "OK") {
      const marker = new google.maps.Marker({
        position: results[0].geometry.location,
        map: map,
      });
      markers.push(marker);
      map.setCenter(results[0].geometry.location);
    } else {
      console.error(`Error de geocoding: ${status}`);
      alert('No se pudo encontrar la ubicación del paquete.');
    }
  });
};

// Función para eliminar todos los marcadores del mapa
const clearMarkers = () => {
  markers.forEach(marker => marker.setMap(null)); // Eliminar cada marcador del mapa
  markers = []; // Vaciar el array de marcadores
};

// Inicializar el mapa cuando se cargue la página
window.onload = initMap;
