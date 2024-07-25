require('dotenv').config();

const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

// Configurar EJS como el motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la vista principal
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/api/pokemon-list', async (req, res) => {
    try {
        const response = await axios.get(process.env.API_POKEMON_LIST);
        const pokemonList = response.data.results.map(pokemon => pokemon.name);
        res.json(pokemonList);
    } catch (error) {
        res.status(500).json({ error: 'Error Pokémon list' });
    }
});

app.get('/api/rickandmorty-list', async (req, res) => {
    try {
        const response = await axios.get(process.env.API_RICKANDMORTY_LIST);
        const charactersList = response.data.results.map(character => ({
            id: character.id,
            name: character.name
        }));
        res.json(charactersList);
    } catch (error) {
        res.status(500).json({ error: 'Error Rick and Morty character list' });
    }
});

app.get('/api/movie-list', async (req, res) => {
    try {
        const api_key='ad49b3f6b0129b942e594014a4248669'
        const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`);
        const movieList = response.data.results.map(movie => ({
            id: movie.id,
            name: movie.title
        }));
        res.json(movieList);
    } catch (error) {
        res.status(500).json({ error: 'Error Movie list' });
    }
});



app.get('/api/:service', async (req, res) => {
    const service = req.params.service;
    const query = req.query;
    try {
        let response;
        switch (service) {
            case 'github':
                response = await axios.get(`${process.env.API_GITHUB_USERS}${query.username}`);
                break;
            case 'weather':
                const options = {
                    method: 'GET',
                    url: process.env.API_WEATHER,
                    params: {
                        city_name: query.location
                    },
                    headers: {
                        'X-RapidAPI-Key': process.env.API_KEY_WEATHER,
                        'X-RapidAPI-Host': process.env.API_HOST_WEATHER
                    }
                };
                response = await axios.request(options);
                break;
            case 'exchange-rate':
                const from = 'USD';
                //const to = 'PEN';
                response = await axios.get(`${process.env.API_EXCHANGE_RATE}${from}`);
                const rate = response.data.rates.PEN;
                if (rate) response.data = rate;
                break;
            case 'pokemons':
                response = await axios.get(process.env.API_POKEMON_LIST);
                break;
            case 'pokemon':
                response = await axios.get(`${process.env.API_POKEMON}${query.name}`);
                response.data = response.data.abilities;
                console.log(response);
                break;
            case 'rickandmorty-characters':
                response = await axios.get(process.env.API_RICKANDMORTY_LIST);
                break;
            case 'rickandmorty-character':
                response = await axios.get(`${process.env.API_RICKANDMORTY}${query.id}`);
                break;
            case 'cocktails':
                response = await axios.get(process.env.API_TOP_COCKTAILS);
                if (response.data.drinks) {
                    response.data.drinks = response.data.drinks.slice(0, 10); // Sólo el top 10
                }
                break;
            case 'store-products':
                response = await axios.get(process.env.API_STORE_PRODUCTS);
                break;
            case 'photos':
                response = await axios.get(`${process.env.API_FOTOGRAFIAS}query=${query.keyword}&w=${query.width}&h=${query.height}&client_id=${process.env.API_KEY_FOTOGRAFIAS}`);
                break;
            case 'quotes':
                response = await axios.get(process.env.API_QUOTES);
                break;
            case 'randomuser':
                response = await axios.get(process.env.API_RANDOM_USER);
                break;
            case 'movies-top':
                api_key=''
                response = await axios.get(`${process.env.API_TOP_MOVIE}${process.env.API_KEY_MOVIE}`);
                break;
            case 'movie':
                response = await axios.get(`${process.env.API_MOVIE_DETAIL}${query.id}?api_key=${process.env.API_KEY_MOVIE}`);
                break;
            case 'mars':
                response = await axios.get(`${process.env.API_NASA_MARTE}${process.env.API_KEY_NASA}`);
                break;
            default:
                throw new Error('Servicio no encontrado');
        }
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`El servidor está corriendo en http://${process.env.HOSTNAME}:${process.env.PORT}/`);
});
