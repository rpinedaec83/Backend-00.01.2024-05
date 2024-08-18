
# Backend API Project

## Descripción del Proyecto

Este proyecto es una API Backend diseñada para gestionar propietarios, mascotas, razas, colores, sexos y usuarios. La API permite realizar operaciones CRUD en cada uno de estos modelos, con las relaciones necesarias entre ellos.

## Requisitos Previos

- Node.js
- MySQL
- Postman (para pruebas de API)

## Instalación

1. Clona el repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Instala las dependencias con `npm install`.
4. Configura tu base de datos en el archivo `config/database.js`.
5. Ejecuta el proyecto con `npm run dev`.

## Endpoints y Orden para las Pruebas

### 1. Crear un Usuario

**Endpoint:** POST `/api/usuarios`

**Body (JSON):**
```
{
  "username": "nombre_usuario",
  "password": "contraseña_segura",
  "email": "usuario@example.com",
  "activo": true
}
```

### 2. Crear un Ubigeo (si es necesario)

**Endpoint:** POST `/api/ubigeo`

**Body (JSON):**
```
{
  "codigo": "010101",
  "descripcion": "Lima - Cercado"
}
```

### 3. Crear una Nacionalidad

**Endpoint:** POST `/api/nacionalidad`

**Body (JSON):**
```
{
  "nombre": "Peruano"
}
```

### 4. Crear un Propietario

**Endpoint:** POST `/api/propietarios`

**Body (JSON):**
```
{
  "nombre": "Juan Pérez",
  "direccion": "Av. Siempre Viva 123",
  "telefono": "987654321",
  "usuarioCreacion": 1,
  "nacionalidadId": 1,
  "ubigeoId": 1
}
```

### 5. Crear una Raza

**Endpoint:** POST `/api/raza`

**Body (JSON):**
```
{
  "descripcion": "Labrador",
  "usuarioCreacion": 1
}
```

### 6. Crear un Color

**Endpoint:** POST `/api/color`

**Body (JSON):**
```
{
  "descripcion": "Marrón",
  "usuarioCreacion": 1
}
```

### 7. Crear un Sexo

**Endpoint:** POST `/api/sexo`

**Body (JSON):**
```
{
  "descripcion": "Macho",
  "usuarioCreacion": 1
}
```

### 8. Crear una Mascota

**Endpoint:** POST `/api/mascota`

**Body (JSON):**
```
{
  "nombre": "Rex",
  "fechaNacimiento": "2020-01-01",
  "usuarioCreacion": 1,
  "razaId": 1,
  "colorId": 1,
  "sexoId": 1
}
```

## Otros Endpoints

### Obtener todos los propietarios

**Endpoint:** GET `/api/propietarios`

### Obtener todos los usuarios

**Endpoint:** GET `/api/usuarios`

### Obtener todas las razas

**Endpoint:** GET `/api/raza`

### Obtener todos los colores

**Endpoint:** GET `/api/color`

### Obtener todos los sexos

**Endpoint:** GET `/api/sexo`

### Obtener todas las mascotas

**Endpoint:** GET `/api/mascota`

### Actualizar un Propietario

**Endpoint:** PUT `/api/propietarios/{id}`

**Body (JSON):** (Campos a actualizar)

### Eliminar un Propietario

**Endpoint:** DELETE `/api/propietarios/{id}`

"""
