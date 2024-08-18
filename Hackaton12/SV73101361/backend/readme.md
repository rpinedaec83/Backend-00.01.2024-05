
# Proyecto Ventas con Node.js Nativo

Este proyecto es un simple servidor y cliente web para gestionar una lista de compras, utilizando únicamente el módulo `http` de Node.js sin librerías adicionales como Express.

## Requisitos Previos

Asegúrate de tener instalados los siguientes requisitos antes de empezar:

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

## Configuración del Backend

### 1. Clonar el repositorio

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/jorge-holguin/Ventas.NET.git
```

### 2. Navegar al directorio del backend

```bash
cd Ventas.NET/backend
```

### 3. Configurar las variables de entorno

Crea un archivo `.env` en la carpeta `backend` y añade las siguientes configuraciones:

```plaintext
PORT=3000
```

### 4. Ejecutar el servidor

Puedes iniciar el servidor en modo desarrollo:

```bash
node index.js
```

El backend estará disponible en `http://localhost:3000`.

## Configuración del Frontend

### 1. Navegar al directorio del frontend

```bash
cd Ventas.NET/frontend
```

### 2. Abrir el archivo `index.html`

Puedes abrir el archivo `index.html` en un navegador web.

### Ejecución Completa

1. **Ejecuta el backend**: Asegúrate de que el backend esté corriendo en `http://localhost:3000`.
2. **Abre el frontend**: Abre el archivo `index.html` en tu navegador.

Con ambos en funcionamiento, el frontend podrá interactuar con el backend para gestionar la lista de compras.

## Problemas Comunes

### 1. Error de conexión

Si el frontend no puede conectarse al backend, asegúrate de que:

- El backend esté corriendo en el puerto 3000.
- No haya errores en la consola del backend o frontend.

### 2. Problemas con dependencias

Este proyecto no tiene dependencias externas, así que cualquier problema probablemente esté relacionado con la instalación de Node.js.

## Contribuciones

Si deseas contribuir a este proyecto, por favor crea un pull request o abre un issue para discutir los cambios que deseas realizar.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
