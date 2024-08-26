const express = require('express')
require('dotenv').config();
const app = express()



app.use(express.static('public'));
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const multer = require('multer');
const storage = multer.diskStorage({
    destination (req, file, cb) {
        cb(null, 'storage');
    },
    filename (req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({storage});



const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/img', (req, res) => {
    res.send('<image src="https://plamoscale.com/images/fog1labs1/fulls/85.jpg">')
})


app.post('/img', (req, res) => {
    let obj = {nombre: "Roberto", apellido:"Pineda"}
    res.status(201).send(obj)
})
app.put('/img', (req, res) => {
    let obj = {nombre: "Roberto", apellido:"Pineda"}
    res.status(301).location('http://www.x-codec.net');
    res.end();
})

app.delete('/img', (req, res) => {
    let obj = {nombre: "Roberto", apellido:"Pineda"}
    res.status(401)
    res.end();
})

app.patch('/img', (req, res) => {
    let obj = {nombre: "Roberto", apellido:"Pineda"}
    res.setHeader("xData", '{"Roberto":"Pineda"}')
    res.status(500)
    res.end();
})

app.post('/', (req, res)=>{
    res.send("Hola desde el post")
})

app.put('/', (req, res)=>{
    res.send("Hola desde el put")
})

app.delete('/', (req, res)=>{
    res.send("Hola desde el delete")
})

app.get('/requerimiento', (req, res)=>{
    let query = req.query;
    console.log(query)
    res.send("requerimiento: "+ query.nombre + " " + query.apellido);
});

app.post('/requerimiento/:id', (req, res)=>{
    let param = req.params;
    console.log(param)
    res.send("requerimiento: "+ param.id);
});

app.put('/requerimiento', (req, res)=>{
    let body = req.body;
    console.log(body)
    res.send("requerimiento: ");
});




app.post('/upload', upload.single('image'), (req, res) => {
    if(req.file) {
        // I can access req.body from here if I want
        res.json(req.file);
    }
    else throw 'error';
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})