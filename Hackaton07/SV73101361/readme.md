# API Gateway

Este proyecto es un API Gateway desarrollado con Node.js y Express que centraliza conexiones a varias APIs externas. El propósito es facilitar las consultas a múltiples servicios desde un solo punto de acceso.

## Descripción

El API Gateway permite realizar consultas a las siguientes APIs:

- **GitHub:** Consultar los datos de un usuario específico.
- **Clima:** Consultar el clima de una ciudad o ubicación específica.
- **Tipo de Cambio:** Consultar el tipo de cambio del dólar en Perú.
- **Pokémon:** Consultar la lista de Pokémon y los detalles de un Pokémon específico.
- **Rick and Morty:** Consultar los principales personajes y los detalles de un personaje específico.
- **Bebidas y Cócteles:** Consultar el top 10 de bebidas y cócteles.
- **Productos de Tienda:** Consultar un listado de productos de una tienda.
- **Unsplash:** Consultar y traer fotografías con un determinado tema y tamaño.
- **Citas Famosas:** Consultar citas famosas.
- **Usuario Aleatorio:** Consultar datos ficticios de un usuario.
- **Películas:** Consultar el top de películas de estreno y los detalles de una película específica.
- **Marte:** Consultar datos específicos de Marte.

## Instalación

1. Clona el repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd api-gateway
    ```
2. Instala las dependencias:
   ```sh
    npm install
    ```

3. Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:
   ```sh
    PORT=4000
    GITHUB_API_URL=https://api.github.com
    RICKMORTY_API_URL=https://rickandmortyapi.com/api
    FRANKFURTER_API_URL=https://api.frankfurter.app
    POKEAPI_URL=https://pokeapi.co/api/v2
    COCKTAILDB_API_URL=https://www.thecocktaildb.com/api/json/v1/1
    FAKESTORE_API_URL=https://fakestoreapi.com
    UNSPLASH_API_URL=https://api.unsplash.com
    QUOTES_API_URL=https://quotes.rest
    RANDOMUSER_API_URL=https://randomuser.me/api
    MOVIEDB_API_URL=https://api.themoviedb.org/3
    NASA_API_URL=https://api.nasa.gov
    WEATHER_API_KEY=tu_clave_api_de_openweather
    UNSPLASH_ACCESS_KEY=tu_clave_api_de_unsplash
    MOVIEDB_API_KEY=tu_clave_api_de_themoviedb
    NASA_API_KEY=tu_clave_api_de_nasa
    ```
## Uso

1. Ejecuta el servidor en modo desarrollo:
   ```sh
   npm run dev
    ```
2. Accede a los endpoints a través de http://localhost:4000/api.

## Endpoint

-GitHub: GET /api/github/:username 
-Clima: GET /api/weather/:city 
-Tipo de Cambio: GET /api/exchange-rate 
-Pokémon: GET /api/pokemon, GET /api/pokemon/:name 
-Rick and Morty: GET /api/rick-morty, GET /api/rick-morty/:id 
-Bebidas y Cócteles: GET /api/cocktails/top 
-Productos de Tienda: GET /api/store/products 
-Unsplash: GET /api/unsplash/photos || /api/unsplash/photos?query=nature
-Citas Famosas: GET  
-Usuario Aleatorio: GET /api/random-user/random-user 
-Películas: GET /api/movies/top, GET /api/movies/:id
-Marte: GET /api/mars/photos 

## Estructura del Proyecto
```sh
api-gateway/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.js
│   └── server.js
├── .env
├── package.json
└── README.md
```

## Licencia

Este proyecto está licenciado bajo la licencia ISC.


