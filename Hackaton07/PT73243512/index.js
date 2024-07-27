const express = require('express');
const path = require("path");
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "./public")));

app.get("/GitHub", async function(req, res){
    const username = 'ccb16';
    console.log(username)
    const options = {
        method: 'GET',
        url: `https://api.github.com/users/${username}`,
        headers: {
          'User-Agent': 'express-github-app'
        }
    }

    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.render("pages/github",{githubData: response.data})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error fetching GitHub data");
    }
});

app.get("/clima",async function(req, res){
    let ciudad = req.query.ciudad;
    console.log(ciudad)
    const options = {
        method: 'GET',
        url: 'https://the-weather-api.p.rapidapi.com/api/weather/'+ciudad,
        headers: {
          'x-rapidapi-key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186',
          'x-rapidapi-host': 'the-weather-api.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          res.render("pages/clima",{clima:response.data.data})
      } catch (error) {
          console.error(error.message);
          res.status(500).send("Error fetching weather data");
      }
      
      
});

app.get("/tipo-de-cambio", async function(req, res) {
    const host = 'api.frankfurter.app';
    const options = {
      method: 'GET',
      url: `https://${host}/latest?amount=10&from=PEN&to=USD`,
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
      res.render("pages/tipo-de-cambio", { tipoDeCambio: response.data.conversion_rate });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error fetching exchange rate data");
    }
  });

  app.get("/pokemones", async function(req, res) {
    const options = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon?limit=100', 
      headers: {}
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
      res.render("pages/pokemones", { pokemones: response.data.results });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error fetching Pokémon data");
    }
  });

  app.get("/habilidades", async function(req, res) {
    let pokemonName = req.query.pokemonName;
    console.log(pokemonName)
    const options = {
      method: 'GET',
      url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
      headers: {}
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
      res.render("pages/habilidades", { pokemon: response.data });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error fetching Pokémon abilities");
    }
  });

  app.get("/RickAndMorty", async function(req, res){
    const options = {
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character',
      headers: {}
    }
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
      res.render("pages/rickandmorty", { characters: response.data.results });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error fetching Rick and Morty data");
    }
  });

  app.get("/bebidas", async function(req, res) {
    const options = {
      method: 'GET',
      url: 'https://www.thecocktaildb.com/api/json/v1/1/popular.php',
      headers: {}
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
      res.render("pages/bebidas", { bebidas: response.data.drinks.slice(0, 10) });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error fetching beverages data");
    }
  });

  app.get("/productos", async function(req, res) {
    const options = {
      method: 'GET',
      url: 'https://api.bestbuy.com/v1/products',
      headers: {}
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
      res.render("pages/productos", { productos: response.data.products });
    } catch (error) {
      console.error(error);
    }
  });

  app.get("/fotos", async function(req, res) {
    const options = {
      method: 'GET',
      url: 'https://api.unsplash.com/photos/random?query=nature&orientation=landscape&width=800&height=600&client_id=RF8YVlVQdXWQoUWQoUWQoUWQ',
      headers: {}
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
      res.render("pages/fotos", { fotos: response.data.hits });
    } catch (error) {
      console.error(error);
    }
  });

  app.get("/citas", async function(req, res) {
    const options = {
      method: 'GET',
      url: 'https://api.quotable.io/random?tags=famous-quotes&maxLength=100',
      headers: {}
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
      res.render("pages/citas", { citas: response.data });
    } catch (error) {
      console.error(error);
    }
  });

  app.get("/", function (req, res) {
    let usuario = [
     {
         name: "Crsitian",
         surname: "Cordova",
         birth_year: 2000
     }
    ];
 
    res.render("pages/user",{users:usuario})
 });

app.get('/peliculas', async function (req, res) {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
      headers: {
        'X-RapidAPI-Key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186',
        'X-RapidAPI-Host': 'oviesdatabase.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data.results));
      res.render('pages/peliculas', {
        results: response.data.results
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching movie data");
    }
  });
  
  app.get("/pelicula", async function(req, res) {
    let movieId = req.query.movieId;
    console.log(movieId)
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=e9097b137e5e9bacd6efb85111071284`,
      headers: {}
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
      res.render("pages/pelicula", { pelicula: response.data });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching movie data");
    }
  });
  
  app.get("/marte", async function(req, res) {
    const apiKey = 'DEMO_KEY';
    const options = {
    method: 'GET',
    url: `https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity?api_key=${apiKey}`,
    headers: {}
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
      res.render("pages/marte", { marte: response.data });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching Mars data");
    }
  });
  
  app.listen(port, () => console.log(`Server started on port ${port}`));