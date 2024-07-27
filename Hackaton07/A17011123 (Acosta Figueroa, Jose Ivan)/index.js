const express = require('express')
const path = require("path");
const axios = require('axios');
const app = express()
const port = 3000
app.use(express.json());
app.set('view engine', 'ejs');



// Ruta de bienvenida
app.get('/', (req, res) => {
    res.send('API Gateway is running');
});

// Consultar datos de GitHub
app.get('/github/:username', async (req, res) => {
    try {
        const username = req.params.username;
        const response = await axios.get(`https://api.github.com/users/${username}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching GitHub data' });
    }
});

 
// Consultar el tipo de cambio del dólar en Perú
app.get('/exchange-rate', async (req, res) => {
    try {
        const response = await axios.get('https://api.frankfurter.app/latest?amount=10&from=GBP&to=USD');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching exchange rate data' });
    }
});

// Consultar la lista de Pokemones
app.get('/pokemons', async (req, res) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Pokemon data' });
    }
});

// Consultar poderes de un Pokémon específico
app.get('/pokemon/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Pokemon details' });
    }
});

// Consultar personajes de Rick and Morty
app.get('/rick-and-morty/characters', async (req, res) => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Rick and Morty characters' });
    }
});

// Consultar detalles de un personaje de Rick and Morty
app.get('/rick-and-morty/character/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching character details' });
    }
});

// Consultar el top 10 de bebidas y cócteles
app.get('/cocktails/top', async (req, res) => {
    try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
        res.json(response.data.drinks.slice(0, 10));
    } catch (error) {
        res.status(500).json({ error: 'Error fetching cocktail data' });
    }
});

// Consultar productos de una tienda
app.get('/store/products', async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching store products' });
    }
});

// Consultar fotos de un tema específico
app.get('/photos/:query', async (req, res) => {
    try {
        const query = req.params.query;
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=cGxOVk8stMloyAVJUYJz3eC_RQ8ZfCq7bzm_1EsVp6s`); // Reemplazar con tu API key de Unsplash
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching photos' });
    }
});

// Consultar citas famosas
app.get('/quotes', async (req, res) => {
    try {
        
        const apiKey = 'Mt37cKZYAeLDPpUjohZ5WAhbwKwfkUL4I6eD1ErP';
        const response = await axios.get('https://quotes.rest/qod', {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching quotes' });
    }
});

// Consultar datos ficticios de un usuario
app.get('/random-user', async (req, res) => {
    try {
        const response = await axios.get('https://randomuser.me/api/');
        res.json(response.data.results[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching random user' });
    }
});

// Consultar el top de películas de estreno
app.get('/movies/top', async (req, res) => {
    try {
        const apiKey = 'e17e3ffed713bb2d60fdb42491409cd2'; // Reemplazar con tu API key de The Movie Database
        const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
        res.json(response.data.results.slice(0, 10));
    } catch (error) {
        res.status(500).json({ error: 'Error fetching top movies' });
    }
});

// Consultar detalles de una película específica
app.get('/movie/:id', async (req, res) => {
    try {
        //pendiente
        const id = req.params.id;
        const apiKey = 'e17e3ffed713bb2d60fdb42491409cd2'; // Reemplazar con tu API key de The Movie Database
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
        res.json(response.data);

    } catch (error) {
        res.status(500).json({ error: 'Error fetching movie details' });
    }
});

// Consultar datos específicos de Marte
app.get('/mars/photos', async (req, res) => {
    try {
        const apiKey = '5AiMhGqbw9jHbaAIS0VtWRkWih0iCaXCee5APfb9'; // Reemplazar con tu API key de NASA
        const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`);
        res.json(response.data.photos);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Mars photos' });
    }
});
app.listen(port, () => {
    console.log(`API Gateway listening at http://localhost:${port}`);
});