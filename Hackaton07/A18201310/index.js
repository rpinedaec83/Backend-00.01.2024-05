const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const port = 3000;

//configurar EJS como el motor de plantillas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.get("/", function(req, res) {
//     console.log("hola");
//     res.send("Hola aa");
// });

// Ruta para obtener datos de un usuario de GitHub - EJERCICIO 1.
// app.get("/github/:username", async (req, res) => {
//     const username = req.params.username;

//     try {
//         const response = await axios.get(`https://api.github.com/users/${username}`);
//         const userData = response.data;
//         res.render('userGithub', {user: userData});
//         // res.json(userData);
//         console.log()
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Error al obtener datos del usuario de GitHub");
//     }
// });

// Consultar el Clima de una ciudad o ubicacion especifica - EJERCICIO 2
// app.get('/', async (req, res) => {
//     try {
//         const city = 'Chile'; // Puedes cambiar la ciudad aquí
//         const apiKey = 'd8781ff0e2b04034bed235023241307'; // Reemplaza con tu clave API
//         const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

//         const response = await axios.get(url);
//         const weatherData = response.data;

//         res.render('weather', { weather: weatherData });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error al obtener los datos del clima');
//     }
// });

//Consultar el tipo de cambio del dolar en Peru
// app.get("/", async (req, res) => {
//     const from = 'EUR'; // Puedes cambiar la moneda base aquí
//     const to = 'USD'; // Puedes cambiar la moneda objetivo aquí
//     const url = `https://api.frankfurter.app/latest?from=${from}&to=${to}`;

//     const response = await axios.get(url);
//     const exchangeData = response.data;

//     res.render('exchange', { exchange: exchangeData });
// })

//Consultar la lista de Pokemones actual
// app.get('/', async (req, res) => {
//     try {
//         const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151'); // Puedes cambiar el límite según tus necesidades
//         const pokemonList = response.data.results;

//         res.render('pokemonList', { pokemon: pokemonList });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error al obtener la lista de Pokémon');
//     }
// });

//Consultar los poderes de un pokemon especifico
// app.get('/:name', async(req, res) => {
//     const pokemonName = req.params.name;

//     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//     const pokemonData = response.data;
//     const moves = pokemonData.moves.map(move => move.move.name);

//     res.render('pokemonMoves', { name: pokemonName, moves: moves });
// })





//Consultar los principales personajes de Rick and Morty
// app.get('/characters', async (req, res) => {
//     try {
//       // URL de la API de Rick and Morty
//       const url = 'https://rickandmortyapi.com/api/character';
      
//       // Hacemos la solicitud GET a la API
//       const response = await axios.get(url);
      
//       // Obtenemos los resultados
//       const characters = response.data.results;
      
//       // Filtramos personajes principales (Rick y Morty)
//       const mainCharacters = characters.filter(character =>
//         character.name === 'Rick Sanchez' || character.name === 'Morty Smith'
//       );
  
//       // Enviamos la respuesta en formato JSON
//       res.json(mainCharacters);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   });





//Consultar el detalle de cada personaje de Rick and Morty
// app.get('/character/:id', async (req, res) => {
//     const characterId = req.params.id;
  
//     try {
//       // URL de la API de Rick and Morty para un personaje específico
//       const url = `https://rickandmortyapi.com/api/character/${characterId}`;
      
//       // Hacemos la solicitud GET a la API
//       const response = await axios.get(url);
      
//       // Obtenemos el detalle del personaje
//       const characterDetail = response.data;
  
//       // Renderizamos la plantilla EJS con los datos del personaje
//       res.render('character', { character: characterDetail });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).send('Internal Server Error');
//     }
// });



//Consultar el top 10 de bebidas y cocteles
// app.get('/top-drinks', async (req, res) => {
//     try {
//       // URL de la API de TheCocktailDB para obtener una lista de bebidas populares
//       const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'; // Cambiar la consulta según tus necesidades
      
//       // Hacemos la solicitud GET a la API
//       const response = await axios.get(url);
      
//       // Obtenemos los resultados
//       const drinks = response.data.drinks.slice(0, 10); // Obtener solo los primeros 10
  
//       // Renderizamos la plantilla EJS con los datos de las bebidas
//       res.render('topDrinks', { drinks });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).send('Internal Server Error');
//     }
// });




//Consultar un listado de productos de una tienda
// app.get('/products', async (req, res) => {
//     try {
//       // URL de la API de la tienda para obtener la lista de productos
//       const url = 'https://fakestoreapi.com/products'; // Usa la URL de la API real de tu tienda
      
//       // Hacemos la solicitud GET a la API
//       const response = await axios.get(url);
      
//       // Obtenemos los resultados
//       const products = response.data;
  
//       // Renderizamos la plantilla EJS con los datos de los productos
//       res.render('products', { products });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).send('Internal Server Error');
//     }
// });



//Consultar y traer Fotografias con un determinado tema y tamaño
// app.get('/photos', async (req, res) => {
//     const query = req.query.theme || 'nature'; // Tema por defecto: 'nature'
//     const width = req.query.width || 300; // Ancho por defecto: 300px
//     const height = req.query.height || 300; // Alto por defecto: 300px
  
//     try {
//       // URL de la API de Unsplash para buscar fotos
//       const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=15545589654`;
      
//       // Hacemos la solicitud GET a la API
//       const response = await axios.get(url);
      
//       // Obtenemos los resultados
//       const photos = response.data.results;
  
//       // Renderizamos la plantilla EJS con los datos de las fotos
//       res.render('photos', { photos, width, height });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).send('Internal Server Error');
//     }
// });



//Consultar citas famosas
// app.get('/quotes', async (req, res) => {
//     const query = req.query.query || 'inspire'; // Tema por defecto: 'inspire'
//     const page = req.query.page || 1; // Página por defecto: 1
  
//     try {
//       // URL de la API de FavQs para buscar citas
//       const url = `https://favqs.com/api/quotes/?filter=${query}&page=${page}`;
//       const options = {
//         headers: {
//           'Authorization': 'Token token="6598635496495125"' // Reemplaza YOUR_API_KEY con tu clave de API
//         }
//       };
  
//       // Hacemos la solicitud GET a la API
//       const response = await axios.get(url, options);
  
//       // Obtenemos los resultados
//       const quotes = response.data.quotes;
  
//       // Renderizamos la plantilla EJS con los datos de las citas
//       res.render('quotes', { quotes });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).send('Internal Server Error');
//     }
// });


//Consultar datos ficticios de un usuario
// app.get('/user', async (req, res) => {
//     try {
//       // URL de la API de Random User para obtener datos de un usuario
//       const url = 'https://randomuser.me/api/';
  
//       // Hacemos la solicitud GET a la API
//       const response = await axios.get(url);
  
//       // Obtenemos los resultados
//       const user = response.data.results[0];
  
//       // Renderizamos la plantilla EJS con los datos del usuario
//       res.render('user', { user });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).send('Internal Server Error');
//     }
// });




//Consultar el top de peliculas de estreno
// app.get('/top-movies', async (req, res) => {
//     try {
      
//       const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=YOUR_API_KEY&language=en-US&page=1`;
  
      
//       const response = await axios.get(url);
  
      
//       const movies = response.data.results;
  
      
//       res.render('topMovies', { movies });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).send('Internal Server Error');
//     }
// });



//Consultar el detalle de una pelicula especifica
// app.get('/movie/:id', async (req, res) => {
//     try {
//       const movieId = req.params.id;
      
//       const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=YOUR_API_KEY&language=en-US`;
  
      
//       const response = await axios.get(url);
  
      
//       const movie = response.data;
  
      
//       res.render('movieDetail', { movie });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).send('Internal Server Error');
//     }
// });




//
app.get('/mars-photos', async (req, res) => {
    try {
      
      const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';
      const apiKey = '568792321K'; 
  
      
      const params = {
        api_key: apiKey,
        
        sol: 1000,
        
      };
  
      const response = await axios.get(url, { params });
 

      const photos = response.data.photos;
  
      res.render('marsPhotos', { photos });
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
