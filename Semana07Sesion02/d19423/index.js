const express = require('express')

//import { express } from 'express'

const path = require("path");
const axios = require('axios');
const app = express()
const port = 3000
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));

app.get("/", function (req, res) {
    res.send("Hola de desde Express")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})