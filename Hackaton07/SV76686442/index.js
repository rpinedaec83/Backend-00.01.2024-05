const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Welcome to the API Gateway');
});

app.get('/github/:username', async (req, res) => {
    const username = req.params.username;
    const url = `https://api.github.com/users/${username}`;

    try {
        const response = await axios.get(url);
        console.log(response.data);
        const githubData = response.data;
        res.render('pages/github', { githubData });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching GitHub data');
    }
});

const RAPIDAPI_KEY = '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186';
const RAPIDAPI_HOST = 'the-weather-api.p.rapidapi.com';

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const zipcode = req.query.zipcode;

    if (!city && !zipcode) {
        return res.status(400).json({ error: 'Please provide a city or zipcode' });
    }

    let url;
    if (city) {
        url = `https://the-weather-api.p.rapidapi.com/api/weather/${city}`;
    } else {
        url = `https://the-weather-api.p.rapidapi.com/api/weather/zip=${zipcode}`;
    }

    const options = {
        method: 'GET',
        url: url,
        headers: {
            'x-rapidapi-key': RAPIDAPI_KEY,
            'x-rapidapi-host': RAPIDAPI_HOST
        }
    };

    try {
        const response = await axios.request(options);
        weatherData= response.data;
        // res.json(response.data);
        res.render('pages/weather', {weatherData});
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({ error: 'An error occurred while fetching the weather data' });
    }
});

app.get('/exchange-rate', async (req, res) => {
    const url = 'https://api.exchangerate-api.com/v4/latest/USD';

    try {
        const response = await axios.get(url);
        const exchangeRate = response.data.rates.PEN; // PEN es el código para el Sol peruano
        res.render('pages/exchange-rate', { exchangeRate });
        // res.json({ usd_to_pen: exchangeRate });
    } catch (error) {
        console.error('Error al consultar el tipo de cambio', error.message);
        res.status(500).send('Error fetching exchange rate');
    }
});

// Endpoint para obtener los Pokémon de la generación más reciente
app.get('/pokemon/latest', async (req, res) => {
    try {
        // Obtener la lista de generaciones disponibles
        const generationsResponse = await axios.get('https://pokeapi.co/api/v2/generation/');
        const generations = generationsResponse.data.results;

        // Identificar la última generación
        const latestGenerationUrl = generations[generations.length - 1].url;

        // Obtener los detalles de la última generación
        const generationResponse = await axios.get(latestGenerationUrl);
        const generationData = generationResponse.data;

        // Extraer los nombres y URL de los Pokémon de esa generación
        const pokemonList = generationData.pokemon_species.map(pokemon => ({
            name: pokemon.name,
            url: pokemon.url
        }));

        // Devolver los datos como respuesta JSON
        // res.json(pokemonList);
        res.render('pages/pokemon-latest', { pokemonList });
    } catch (error) {
        // Manejo de errores en caso de falla en la solicitud a la PokeAPI
        console.error(error);
        res.status(500).json({ error: 'Error fetching Pokémon data' });
    }
});

// Endpoint para consultar los poderes de un Pokémon por nombre
app.get('/pokemon/:pokemonName', async (req, res) => {
    const pokemonName = req.params.pokemonName.toLowerCase(); // Nombre del Pokémon recibido en la URL
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`; // URL de la PokeAPI para consultar el Pokémon

    try {
        // Hacer la solicitud GET a la PokeAPI
        const response = await axios.get(url);
        const pokemonData = response.data;

        // Extraer los nombres de los movimientos (poderes) del Pokémon
        const moves = pokemonData.moves.map(move => move.move.name);

        // Preparar los datos de respuesta
        const responseData = {
            name: pokemonData.name,
            moves: moves
        };

        // Devolver los datos como respuesta JSON
        // res.json(responseData);
        res.render('pages/pokemon', { pokemon: responseData });
    } catch (error) {
        // Manejo de errores en caso de falla en la solicitud a la PokeAPI
        console.error(error);
        res.status(500).json({ error: 'Error fetching Pokémon data' });
    }
});

// Endpoint para obtener la imagen de un Pokémon por nombre
app.get('/pokemon/:pokemonName/image', async (req, res) => {
    const pokemonName = req.params.pokemonName.toLowerCase(); // Nombre del Pokémon recibido en la URL
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    try {
        // Hacer la solicitud GET a la PokeAPI
        const response = await axios.get(url);
        const pokemonData = response.data;

        // Obtener la URL de la imagen del Pokémon
        const imageUrl = pokemonData.sprites.other['official-artwork'].front_default;

        // Redirigir la solicitud a la URL de la imagen del Pokémon
        res.redirect(imageUrl);
    } catch (error) {
        // Manejo de errores en caso de falla en la solicitud a la PokeAPI
        console.error(error);
        res.status(500).send('Error fetching Pokémon image');
    }
});

// Nueva ruta para obtener los personajes principales de Rick and Morty
app.get('/rickandmorty', async (req, res) => {
    
    const url = `https://rickandmortyapi.com/api/character`;

    try {
        const response = await axios.get(url);
        const characters= response.data.results;
        const mainCharacters = characters.filter(character => character.id <= 5);
        res.render('pages/rickandmorty', { mainCharacters });
        // res.json(mainCharacters);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching Rick and Morty data');
    }
});

// Ruta para obtener información de personajes de Rick and Morty por nombre
app.get('/rickandmorty2', async (req, res) => {
    const name = req.query.name; // Obtener el nombre del personaje desde los parámetros de la URL
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`; // URL para buscar por nombre

    try {
        const response = await axios.get(url);
        const rickandmortyData = response.data.results;
        
        if (rickandmortyData.length > 0) {
            // Si se encontró algún personaje con ese nombre, devuelve el primero encontrado
            const character = rickandmortyData[0];
            res.render('pages/rickandmorty2', { character });
        } else {
            res.status(404).send('Personaje no encontrado');
        }
    } catch (error) {
        console.error('Error fetching Rick and Morty data:', error);
        res.status(500).send('Error fetching Rick and Morty data');
    }
});

app.get('/populardrinks', async (req, res) => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='; // URL para buscar todos los cócteles y bebidas

    try {
        const response = await axios.get(url);
        const drinks = response.data.drinks.slice(0, 10); // Obtener los primeros 10 cócteles y bebidas

        const popularDrinks = drinks.map(drink => {
            const ingredients = [];
            for (let i = 1; i <= 15; i++) {
                const ingredient = drink[`strIngredient${i}`];
                const measure = drink[`strMeasure${i}`];
                if (ingredient) {
                    ingredients.push(`${measure ? measure : ''} ${ingredient}`.trim());
                }
            }

            return {
                name: drink.strDrink,
                id: drink.idDrink,
                ingredients: ingredients,
                instructions: drink.strInstructions,
                image: drink.strDrinkThumb 
            };
        });
        res.render('pages/populardrinks', { drinks: popularDrinks });
        // res.json(popularDrinks);
    } catch (error) {
        console.error('Error al consultar los cócteles y bebidas:', error.message);
        res.status(500).send('Error fetching drinks data');
    }
});

app.get('/products/list',async(req,res)=>{
    const url='https://fakestoreapi.com/products';
    try{
        const response= await axios.get(url);
        const listproducts = response.data;
        // res.json(listproducts);
        res.render('pages/products-list', { products: listproducts });
    }catch (error) {
        console.error('Error al consultar los productos',error.message);
        res.status(500).send('Error fetching products data');
    }
});

const accessKey = 'xhT4p9cuSTlC9DYMXLHX6FOzpjBADuessMPfYuGN4xM'; //  Key de Unsplash

// Ruta para consultar imágenes con un tema y tamaño específico
app.get('/photos', async (req, res) => {
    const theme = req.query.theme; 
    const size = req.query.size; 
    const page = req.query.page || 1; 
    const perPage = req.query.per_page || 10; 

    // URL del endpoint de búsqueda de la API de Unsplash
    let url = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${theme}&page=${page}&per_page=${perPage}`;

    try {
        const response = await axios.get(url);
        const photos = response.data.results.map(photo => {
            let selectedUrl = photo.urls.regular; // Tamaño por defecto
            if (size && photo.urls[size]) {
                selectedUrl = photo.urls[size];
            }

            return {
                id: photo.id,
                description: photo.description,
                url: selectedUrl,
                dimensions: {
                    width: photo.width,
                    height: photo.height
                }
            };
        });

        // res.json(photos);
        res.render('pages/photos', { photos });
    } catch (error) {
        console.error('Error al consultar fotos de Unsplash', error.message);
        res.status(500).send('Error fetching photos from Unsplash');
    }
});



const API_TOKEN = 'MtdCjyz2wAuc53UPRQTConZaFeEaqWQDf5vfiWCW';

app.get('/quotes', async (req, res) => {
    const url = 'http://quotes.rest/qod?language=en';

    try {
        const response = await axios.get(url, {
            headers: {
                'X-TheySaidSo-Api-Secret': API_TOKEN
            }
        });

        const quotesArray = response.data.contents.quotes.map(quoteData => ({
            author: quoteData.author,
            quote: quoteData.quote
        }));

        // res.json(quotesArray);
        res.render('pages/quotes',{quotesArray});
    } catch (error) {
        console.error('Error fetching quotes:', error.message);
        res.status(500).json({ error: 'Error fetching quotes' });
    }
});


app.get('/user/random', async (req, res) => {
    const url = 'https://randomuser.me/api/';
    try {
        const response = await axios.get(url);
        const userData = response.data.results[0];
        // res.json(userData);
        res.render('pages/user', { userData });
    } catch (error) {
        console.error('Error al consultar los datos del usuario', error.message);
        res.status(500).send('Error fetching user data');
    }
});

const apiKey = '670a479ed4aee92eef68fa0718fe209f'; 

app.get('/top-released-movies', async (req, res) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    try {
        const response = await axios.get(url);
        const currentDate = new Date();
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1); // Fecha hace un mes

        const movies = response.data.results
            .filter(movie => {
                // Filtrar películas que han sido estrenadas en el último mes
                const releaseDate = new Date(movie.release_date);
                return releaseDate >= oneMonthAgo && releaseDate <= currentDate;
            })
            .map(movie => ({
                id: movie.id,
                title: movie.title,
                overview: movie.overview,
                release_date: movie.release_date,
                poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                vote_average: movie.vote_average
            }));

        // res.json(movies);
        res.render('pages/movie',{movies})
    } catch (error) {
        console.error('Error al consultar el top de películas de estreno de TMDb', error.message);
        res.status(500).send('Error fetching top released movies from TMDb');
    }
});

// Ruta para consultar el detalle de una película específica por nombre
app.get('/movie-details', async (req, res) => {
    const movieName = req.query.name; // Nombre de la película proporcionado como parámetro de consulta

    if (!movieName) {
        return res.status(400).send('El nombre de la película es requerido');
    }

    try {
        //Buscar la película por nombre
        const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}`;
        const searchResponse = await axios.get(searchUrl);

        if (searchResponse.data.results.length === 0) {
            return res.status(404).send('Película no encontrada');
        }

        // Obtener el ID de la primera película en los resultados de búsqueda
        const movieId = searchResponse.data.results[0].id;

       // Obtener los detalles de la película usando el ID
        const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
        const detailsResponse = await axios.get(detailsUrl);
        const movie = detailsResponse.data;

        // res.json(detailsResponse.data);
        res.render('pages/moviedetails', { movie });
    } catch (error) {
        console.error('Error al consultar los detalles de la película', error.message);
        res.status(500).send('Error fetching movie details from TMDb');
    }
});

const NASA_API_KEY = 'kGuQ2a80Sp2PZBvwOQptPsKyHtqzrL9Y1nBDPF5j';

app.get('/mars/weather', async (req, res) => {
    const url = `https://api.nasa.gov/insight_weather/?api_key=${NASA_API_KEY}&feedtype=json&ver=1.0`;
    
    try {
        const response = await axios.get(url);
        const weatherData = response.data;
        res.json(weatherData);
        
    } catch (error) {
        console.error('Error fetching Mars weather data:', error.message);
        res.status(500).send('Error fetching Mars weather data');
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});






