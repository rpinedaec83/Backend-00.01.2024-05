
# Proyecto de Plataforma de Cursos con Autenticación OAuth, Pagos con Stripe y Chat en Tiempo Real

Este proyecto es una plataforma de cursos en línea que permite a los usuarios registrarse e iniciar sesión utilizando OAuth con Google y GitHub, procesar pagos con Stripe para la compra de cursos, y comunicarse con un chatbot integrado utilizando Socket.io y la API de OpenAI.

## Tabla de Contenidos
1. [Características](#caracteristicas)
2. [Tecnologías Utilizadas](#tecnologias-utilizadas)
3. [Requisitos Previos](#requisitos-previos)
4. [Instalación](#instalacion)
5. [Configuración](#configuracion)
6. [Ejecución del Proyecto](#ejecucion-del-proyecto)
7. [Estructura del Proyecto](#estructura-del-proyecto)
8. [API Endpoints](#api-endpoints)
9. [Manejo de Errores y Validación](#manejo-de-errores-y-validacion)
10. [Seguridad](#seguridad)
11. [Consideraciones Finales](#consideraciones-finales)
12. [Licencia](#licencia)

## Características
- **Autenticación con OAuth 2.0**: Permite a los usuarios registrarse e iniciar sesión utilizando sus cuentas de Google o GitHub.
- **Procesamiento de Pagos con Stripe**: Los usuarios pueden comprar cursos a través de pagos seguros utilizando Stripe.
- **Chat en Tiempo Real**: Integración de un chatbot utilizando Socket.io y la API de OpenAI para proporcionar recomendaciones de cursos y soporte al usuario.
- **Panel de Usuario**: Los usuarios autenticados pueden ver sus perfiles y pedidos.
- **Interfaz de Usuario Moderna**: Utiliza React con Material UI y Tailwind CSS para una experiencia de usuario atractiva y responsiva.
- **Manejo de Errores y Validación**: Implementación de middleware para el manejo de errores y validación de datos en el backend.

## Tecnologías Utilizadas

### Backend
- Node.js y Express.js: Para crear el servidor y las API RESTful.
- Passport.js: Para la autenticación con OAuth (Google y GitHub).
- JWT (JSON Web Tokens): Para mantener sesiones de usuario seguras.
- Stripe API: Para el procesamiento de pagos.
- Socket.io: Para la comunicación en tiempo real en el chat.
- OpenAI API: Para integrar el chatbot con inteligencia artificial.
- Sequelize: ORM para interactuar con la base de datos.
- express-validator: Para la validación de datos de entrada.
- Middleware Personalizado: Para el manejo de errores y rutas no encontradas.

### Frontend
- React: Biblioteca para construir interfaces de usuario.
- Vite: Herramienta de construcción rápida para desarrollo con React.
- Material UI: Biblioteca de componentes de interfaz de usuario.
- Tailwind CSS: Framework CSS utilitario para estilos personalizados.
- React Router: Para el manejo de rutas en la aplicación.
- Axios: Para realizar solicitudes HTTP al backend.
- Socket.io-client: Cliente de Socket.io para el chat en tiempo real.
- @stripe/stripe-js: Para integrar Stripe en el frontend.

## Requisitos Previos
- Node.js (versión 14 o superior)
- NPM o Yarn
- Cuenta de Stripe: Para manejar los pagos.
- Credenciales de API de Google y GitHub: Para la autenticación OAuth.
- Cuenta de OpenAI: Para acceder a la API de OpenAI.
- Base de Datos: Puede ser MySQL, PostgreSQL, etc., configurada para usar con Sequelize.

## Instalación

### Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

### Instalar Dependencias del Backend
```bash
cd backend
npm install
```

### Instalar Dependencias del Frontend
```bash
cd ../frontend
npm install
```

## Configuración

### Backend
Crea un archivo `.env` en la carpeta `backend` con las siguientes variables de entorno:

```dotenv
# Configuración del Servidor
PORT=5000
BACKEND_URL=http://localhost:5000
FRONTEND_URL=http://localhost:5173

# Claves de JWT
JWT_SECRET=tu_clave_secreta_jwt

# Claves de Sesión
SESSION_SECRET=tu_clave_secreta_de_sesion

# Configuración de OAuth de Google
GOOGLE_CLIENT_ID=tu_cliente_id_google
GOOGLE_CLIENT_SECRET=tu_cliente_secreto_google

# Configuración de OAuth de GitHub
GITHUB_CLIENT_ID=tu_cliente_id_github
GITHUB_CLIENT_SECRET=tu_cliente_secreto_github

# Configuración de Stripe
STRIPE_SECRET_KEY=tu_clave_secreta_de_stripe
STRIPE_WEBHOOK_SECRET=tu_webhook_secret_de_stripe

# Configuración de OpenAI
OPENAI_API_KEY=tu_clave_de_api_de_openai

# Configuración de la Base de Datos
DB_HOST=localhost
DB_USER=tu_usuario_de_db
DB_PASSWORD=tu_contraseña_de_db
DB_NAME=nombre_de_tu_base_de_datos
DB_DIALECT=mysql # o el que estés usando
```

### Frontend
En el archivo `.env` de la carpeta `frontend`, configura las variables de entorno:

```dotenv
VITE_BACKEND_URL=http://localhost:5000
VITE_STRIPE_PUBLIC_KEY=tu_clave_publica_de_stripe
```

## Ejecución del Proyecto

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run dev
```

Abre tu navegador en [http://localhost:5173](http://localhost:5173) para ver la aplicación en funcionamiento.

## Estructura del Proyecto

### Backend (/backend)
- `src/`: Código fuente del backend.
- `config/`: Configuraciones de la base de datos y Passport.js.
- `controllers/`: Controladores para manejar la lógica de negocio.
- `middlewares/`: Middlewares personalizados, incluyendo manejo de errores y autenticación.
- `models/`: Modelos de Sequelize para la base de datos.
- `routes/`: Definición de rutas de la API.
- `services/`: Servicios externos, como Stripe y OpenAI.
- `sockets/`: Configuración de Socket.io.
- `server.js`: Archivo principal del servidor.

### Frontend (/frontend)
- `src/`: Código fuente del frontend.
- `components/`: Componentes reutilizables de React.
- `contexts/`: Contextos de React para manejo de estados globales.
- `pages/`: Páginas de la aplicación.
- `styles/`: Archivos CSS y configuración de Tailwind CSS.
- `utils/`: Utilidades y configuraciones, como Axios.
- `App.jsx`: Componente principal de la aplicación.
- `main.jsx`: Punto de entrada de React.

## API Endpoints

### Autenticación (/api/auth)
- `GET /api/auth/google`: Inicia el proceso de autenticación con Google.
- `GET /api/auth/google/callback`: Callback de Google OAuth.
- `GET /api/auth/github`: Inicia el proceso de autenticación con GitHub.
- `GET /api/auth/github/callback`: Callback de GitHub OAuth.

### Usuarios (/api/users)
- `GET /api/users/profile`: Obtiene el perfil del usuario autenticado.

### Pedidos (/api/orders)
- `POST /api/orders`: Crea una intención de pago con Stripe.
- `GET /api/orders`: Obtiene los pedidos del usuario autenticado.
- `POST /api/orders/webhook`: Webhook para manejar eventos de Stripe.

### Chat (/api/chat)
Implementado con Socket.io en `/sockets/chatSocket.js`.

## Manejo de Errores y Validación

### Middleware de Manejo de Errores
Ubicado en `/src/middlewares/errorHandler.js`, captura errores y envía respuestas apropiadas al cliente.

### Validación de Datos
Se utiliza `express-validator` para validar entradas en los controladores y asegurar que los datos proporcionados por los usuarios sean correctos.

## Seguridad
- **Almacenamiento Seguro de Credenciales**: Las claves y secretos se almacenan en variables de entorno y no se incluyen en el código fuente.
- **HTTPS**: Se recomienda utilizar HTTPS en producción para asegurar la comunicación entre el cliente y el servidor.
- **Validación y Sanitización**: Se valida y sanitiza todas las entradas del usuario para prevenir inyecciones SQL y ataques XSS.
- **Protección de Rutas**: Las rutas sensibles están protegidas mediante middleware de autenticación que verifica los tokens JWT.

## Consideraciones Finales
- **Despliegue**: Asegúrate de configurar las variables de entorno adecuadamente en el entorno de producción.
- **Pruebas**: Realiza pruebas exhaustivas de todas las funcionalidades, incluyendo la autenticación, pagos y chat.
- **Actualizaciones**: Mantén las dependencias actualizadas para beneficiarte de mejoras y parches de seguridad.

## Licencia
Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo LICENSE para obtener más información.

Nota: Para cualquier duda o problema, por favor, abre un issue en el repositorio o contacta al mantenedor del proyecto.
