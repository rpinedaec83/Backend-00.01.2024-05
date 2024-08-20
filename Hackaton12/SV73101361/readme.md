
# Proyecto Lista de Compras

Este proyecto consiste en una aplicación de Lista de Compras, dividida en dos partes principales: Backend y Frontend. El Backend está desarrollado con Node.js utilizando Sequelize para la gestión de la base de datos, mientras que el Frontend está desarrollado con HTML, CSS y JavaScript puro.

## Estructura del Proyecto

```
/proyecto-lista-de-compras
│
├── /backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── index.ts
│   ├── tsconfig.json
│   └── package.json
│
├── /frontend
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
└── README.txt
```

## Requisitos Previos

- Node.js instalado en tu máquina.
- MySQL instalado y corriendo.
- Un navegador web moderno.

## Configuración del Backend

1. Navega a la carpeta `/backend` en tu terminal.

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

3. Configura las variables de entorno en un archivo `.env` en la carpeta `/backend`:

    ```
    DB_HOST=localhost
    DB_PORT=3333
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_NAME=lista_compras
    DB_DIALECT=mysql
    PORT=4000
    ```

4. Ejecuta el servidor:

    ```bash
    npm run dev
    ```

    El servidor estará corriendo en `http://localhost:4000`.

## Configuración del Frontend

1. Navega a la carpeta `/frontend`.

2. Abre el archivo `index.html` en tu navegador web.

    También puedes utilizar una extensión de servidor en vivo como "Live Server" de VSCode para visualizar los cambios automáticamente en el navegador.

## Uso de la Aplicación

1. **Agregar Items**: Usa el formulario en la parte superior para agregar nuevos items a la lista de compras. Estos items aparecerán en la lista de "Items Pendientes".

2. **Marcar como Completado**: Puedes marcar un item como completado haciendo clic en el botón "Marcar como Completado" junto al item en la lista de pendientes. El item se moverá a la lista de "Items Completados".

3. **Editar Items**: Puedes editar un item en cualquier lista (pendientes o completados) haciendo clic en el botón "Editar" junto al item. Se abrirá un cuadro de diálogo donde podrás modificar el nombre, descripción y fecha.

4. **Eliminar Items**: Puedes eliminar un item en cualquier lista haciendo clic en el botón "Eliminar" junto al item.

## Notas Adicionales

- Asegúrate de que el backend esté corriendo antes de intentar interactuar con el frontend.
- Si encuentras problemas de CORS, asegúrate de que el middleware `cors` esté configurado correctamente en el backend.
- Los items se almacenan en una base de datos MySQL configurada con Sequelize.
