const express=require("express");
const path=require("path");
const axios=require("axios");
const app=express();
const port=3000;
app.use(express.json());
app.set(`view engine`,`ejs`);
app.use(express.static(path.join(__dirname,"/.public")));


//apps
app.get("/about",function(req,res){
    res.render("pages/about",{tagline:Date()});
});
app.get("/",function(req,res){
let mascotas=[
    {
        name:"Canela",
        organization:"luce",
        birth_year:2022
    },
    {
        name:"Luna",
        organization:"osi",
        birth_year:2023
    }
];
res.render("pages/index",{mascots:mascotas})
});
app.get("/",function(req,res){
res.send("hola desde request");
});
app.get("/clima",async function(req,res){
    let ciudad=req.query.ciudad;
    //console.log(ciudad)
    const options = {
        method: 'GET',
        url: 'https://the-weather-api.p.rapidapi.com/api/weather/'+ciudad,
        headers: {
          'x-rapidapi-key': '03d73ff358mshf31c38d81cdae61p1e0db4jsn44d1ad991029',
          'x-rapidapi-host': 'the-weather-api.p.rapidapi.com'
        }
      };
      try {
          const response = await axios.request(options);
          console.log(response.data);
          res.render("pages/clima",{clima:response.data.data});
      } catch (error) {
          console.error(error);
      }     
    });
app.get("/pokemon", async function(req,res){
    //let pokemon1=req.query.pokemon;
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
            console.log(response.data);
           // res.send(response.data);
           res.render("pages/pokemon",{pokemon:response.data});
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
   
});
app.get('/pokemonp', async (req, res) => {
    let pokemonData = null;
    const pokemonName = req.query.pokemon || 'pikachu';  

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        pokemonData = response.data;
    } catch (error) {
        console.error('Error al obtener los datos del Pokémon:', error);
    }

    res.render('pages/pokemonp', { pokemon: pokemonData });
});

app.get('/rickymartin',async function(req,res){
    let charactersData = null;
    try {
        const response=await axios.get('https://rickandmortyapi.com/api/character/');
        charactersData=response.data.results.slice(0,10);
        res.render('pages/rickymartin',{characters:charactersData})

        
    } catch (error) {
        console.error('Error al obtener los datos de los personajes:', error);
    }
});
app.get('/cokteles',async function(req,res){
    let coktelData = null;
    try {
        const response=await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
            coktelData=response.data.drinks;
            console.log(coktelData);
        res.render('pages/cokteles',{cocktel:coktelData})

        
    } catch (error) {
        console.error('Error al obtener los datos de los personajes:', error);
    }
});
app.get('/tienda',async function(req,res){
    let tiendaData = null;
    try {
        const response=await axios.get('https://fakestoreapi.com/products');
        tiendaData=response.data;
            console.log(tiendaData);
        res.render('pages/tienda',{tienda:tiendaData})

        
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
});
app.get('/citas', async (req, res) => {
    let quotesData = null;
    const category = req.query.category || 'inspire'; // Categoría de citas por defecto

    try {
        const response = await axios.get(`https://quotes.rest/qod`, {
            params: {
                category: category,
            },
            headers: {
                'Accept': 'application/json',
                'X-TheySaidSo-Api-Secret': "bLVuuCHNfnALcJOglm8e3VJ6bE1PLWvmis2Vb2fD"
            }
        });
        quotesData = response.data.contents.quotes;
    } catch (error) {
        console.error('Error al obtener las citas:', error);
    }

    res.render('pages/citas', { quotes: quotesData, category });
});

app.get('/fotos', async (req, res) => {
    let photosData = null;
    const query = req.query.query || 'nature'; 
    const perPage = req.query.per_page || 10;

    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: query,
                per_page: perPage,
                client_id: "bLVuuCHNfnALcJOglm8e3VJ6bE1PLWvmis2Vb2fD"
            }
        });
        photosData = response.data.results;
    } catch (error) {
        console.error('Error al obtener las fotos:', error);
    }

    res.render('pages/fotos', { photos: photosData, query });
});

app.get("/gitHub",async function(req,res){
    let usuario=req.query.usuario;
try {
    const response = await axios.get(`https://api.github.com/users/rpinedaec83`);
    //res.send(response.data);
    res.render("pages/gitHub",{gitHub:response.data});
} catch (error) {
    console.error('Error fetching data:', error);
}
});
app.get("/tipocambio",async function(req,res){
    //let usuario=req.query.usuario;
try {
    const response = await axios.get('https://api.apis.net.pe/v2/sunat/tipo-cambio?date=2023-05-01', {
        headers: {
            'Authorization': `Bearer apis-token-9498.Q0d9CXfbCYEezsrNm4SgR7bRq1ZNpLVn`
        }
    });
    const exchangeRate = response.data.venta; // Asumiendo que 'venta' es el tipo de cambio de venta
    console.log(response.data);
    res.render("pages/tipocambio", { rate: response.data });
} catch (error) {
    console.error('Error fetching exchange rate:', error);
    res.render("pages/tipocambio", { rate: null });
}
});
app.get('/peliculas',async function (req,res){
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
        headers: { 
          'X-RapidAPI-Key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186', 
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
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
      }
    });
    app.get('/usuarios', async (req, res) => {
        let userData = null;
    
        try {
            const response = await axios.get('https://randomuser.me/api/');
            userData = response.data.results[0];
        } catch (error) {
            console.error('Error al obtener los datos del usuario:', error);
        }
    
        res.render('pages/usuarios', { user: userData });
    });
    app.get('/marte', async (req, res) => {
        let marsData = null;
        const rover = req.query.rover || 'curiosity'; // Rover por defecto
        const sol = req.query.sol || 1000; // Día marciano (sol) por defecto
    
        try {
            const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`, {
                params: {
                    sol: sol,
                    api_key: "KaU1bKQHYIydjcDxsgSyNloW25mIwGlntL4wzf1K"
                }
            });
            marsData = response.data.photos;
        } catch (error) {
            console.error('Error al obtener los datos de Marte:', error);
        }
    
        res.render('pages/marte', { photos: marsData, rover, sol });
    });
    

app.listen(port,()=>{
    console.log(`Ejemplo de APP Listen en Puerto.... ${port}`)
})