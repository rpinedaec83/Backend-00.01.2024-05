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


app.listen(port,()=>{
    console.log(`Ejemplo de APP Listen en Puerto.... ${port}`)
})