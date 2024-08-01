const express = require('express')

//import { express } from 'express'

const path = require("path");
const axios = require('axios');
const app = express()
const port = 3000
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "./public")));

app.get("/", function (req, res) {
   let mascotas = [
    {
        name: "TUX",
        organization: "Linux",
        birth_year: 1996
    },
    {
        name: "Mobi",
        organization: "Docker",
        birth_year: 2012
    },
    {
        name: "Selina",
        organization: "x-codec",
        birth_year: 2022
    }
   ];

   res.render("pages/index",{mascots:mascotas})
})

app.get("/about", function(req, res){
    res.render("pages/about",{tagline:Date()})
})

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
          console.error(error);
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
          res.render('pages/pelicul', {
            results: response.data.results
        });
      } catch (error) {
          console.error(error);
      }


    
    
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})