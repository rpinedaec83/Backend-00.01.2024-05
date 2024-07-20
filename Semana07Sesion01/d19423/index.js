var http = require('http');
var url = require('url');
// import { StringToUpperCase } from "@codinasion/string-to-upper-case";
// var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //res.write(req.url);
//   if(req.url == '/summer'){
//     res.end('<h1>Hola desde el servidor de http de node js by RP! Feliz verano </h1>');
//   }else
//   {

//     res.end('<h1>Hola desde el servidor de http de node js by RP! Feliz otra estacion del año </h1>');
//   }

var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
//   res.end(uc.upperCase(txt));
  res.end(txt);
  
}).listen(8080);

// const express = require('express')
// const app = express()
// const port = 3000

// let fecha = require("./mimodulo")

// app.get('/', (req, res) => {
//   res.send('Hello World! ' + fecha.myDateTime());
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })