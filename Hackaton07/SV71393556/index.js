import dotenv from "dotenv";
import express from "express";
import { getUserByUsername, getUserReposByUsername } from "./services/github.js";
import { getQuote } from "./services/quotes.js";
import { getDolar } from "./services/tipodecambio.js";
import { getAbility, getPokemon } from "./services/pokemon.js";
import { getMaincharacter, getDetail } from "./services/rickmorty.js";
import { getCoctel } from "./services/COCTEL.js";
import { getLista } from "./services/lista.js";
import { getPhotos } from "./services/photos.js";
import { getUser } from "./services/user.js";
import { getMovie, getMovieselect } from "./services/movies.js";
import { getMarte } from "./services/nasa.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hola Mundo</h1>
</body>
</html>`);
});

app.get("/github/:username", async (req, res) => {
  const { username } = req.params;

  const data = await getUserByUsername(username);

  res.send(data);
});

app.get("/github/profile/:username", async (req, res) => {
  const { username } = req.params;

  const data = await getUserReposByUsername(username);

  res.send(data);
});


app.get("/dolar", async (req, res) => {

  const data = await getDolar();

  res.send(data);
});

app.get("/pokemonList", async (req, res) => {

  const data = await getPokemon();

  res.send(data);
});
app.get("/pokemonAbility", async (req, res) => {
  const  pokemonname = "ditto";

  const data = await getAbility(pokemonname);

  res.send(data);
});

app.get("/rickmortymain", async (req, res) => {

  const data = await getMaincharacter();

  res.send(data);
});
app.get("/rickmortydetail", async (req, res) => {
  const  pokemonname = "ditto";

  const data = await getDetail();

  res.send(data);
});

app.get("/coctel", async (req, res) => {

  const data = await getCoctel();

  res.send(data);
});

app.get("/lista", async (req, res) => {

  const data = await getLista();

  res.send(data);
});

app.get("/photos", async (req, res) => {

  const data = await getPhotos();

  res.send(data);
});

app.get("/quotes", async (req, res) => {
  const data = await getQuote();

  res.send(data);
});

app.get("/user", async (req, res) => {
  const data = await getUser();

  res.send(data);
});

app.get("/movie", async (req, res) => {
  const data = await getMovie();

  res.send(data);
});

app.get("/movieselect", async (req, res) => {
  const data = await getMovieselect();

  res.send(data);
});

app.get("/marte", async (req, res) => {
  const data = await getMarte();

  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
