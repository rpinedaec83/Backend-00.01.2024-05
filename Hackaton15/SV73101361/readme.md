
# Proyecto: Autenticación con Google OAuth y JWT

## Descripción

Este proyecto implementa un sistema de autenticación usando **Google OAuth** junto con **tokens JWT**. Los usuarios pueden autenticarse utilizando sus cuentas de Google y, una vez autenticados, se genera un token JWT que es enviado al frontend. El frontend almacena el token en el `localStorage` y muestra el nombre del usuario en un **dashboard**.

## Características

- Autenticación con **Google OAuth** utilizando Passport.js.
- Generación de **tokens JWT** con información del usuario.
- Almacenamiento del token JWT en el `localStorage` del navegador.
- Decodificación del token JWT para mostrar el nombre del usuario en el **dashboard**.
- Cierre de sesión seguro con eliminación del token JWT.

## Estructura del Proyecto

```
/config
  └── passport.js    # Configuración de Google OAuth y GitHub OAuth
/controllers
  └── auth.controller.js  # Controlador de autenticación, generación de JWT y redirección al frontend
/models
  └── User.js        # Modelo de usuario
/public
  ├── dashboard.html # Página principal del dashboard
  ├── css/
  └── js/
      └── main.js    # Script para manejar el token y mostrar el nombre del usuario
/routes
  └── authRoutes.js  # Rutas relacionadas con la autenticación
app.js               # Archivo principal que configura el servidor y las rutas
```

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/tu-repositorio.git
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` con las siguientes variables:
   ```
   SECRET_TOKEN=tu_secreto_jwt
   GOOGLE_CLIENT_ID=tu_google_client_id
   GOOGLE_CLIENT_SECRET=tu_google_client_secret
   SESSION_SECRET=tu_secreto_para_sesiones
   ```

4. Ejecuta la aplicación:
   ```bash
   npm start
   ```

## Uso

- Visita `http://localhost:3000` para ver la aplicación en funcionamiento.
- Después de iniciar sesión con Google, serás redirigido al dashboard donde se mostrará tu nombre.

## Dependencias

- **Node.js**
- **Express**
- **Passport.js**
- **Google OAuth 2.0 Strategy**
- **jsonwebtoken**
- **jwt-decode** (en el frontend)

## Contribuciones

Si deseas contribuir a este proyecto, por favor abre un **issue** o envía un **pull request**.

## Licencia

Este proyecto está bajo la licencia MIT.
