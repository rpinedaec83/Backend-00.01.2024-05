const http = require("node:http");
const url = require("node:url");
let listSales = [];
const server = http.createServer((req, res) => {
 
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
 
  //localhost:3000/api/products -- get
  // endpoint: lists
  if (req.method == "GET" && path === "/api/lista") {
    res.writeHead(200, { "content-type": "apllication/json" });
    return res.end(JSON.stringify(listSales));
  }
  // Ruta para mostrar los elementos pendientes
  if (req.method == "GET" && path === "/api/lista/pendientes") {
    const pendientes = listSales.filter(item => !item.esCompletado);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(pendientes));
  }

  // Ruta para mostrar los elementos completados
  if (req.method == "GET" && path === "/api/shopping-list/completed") {
    const completados = listSales.filter(item => item.esCompletado);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(completados));
  }
 
    // endpoint: crear elemento de lista
  if (req.method == "POST" && path == "/api/lista") {
    console.log("creating a new sale");
 
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
 
    return req.on("end", () => {
      const { name, description, date, esCompletado  } = JSON.parse(body);
 
      if (!name || !description || !date || !esCompletado) {
        res.writeHead(400, { "content-type": "apllication/json" });
        return res.end(JSON.stringify({ message: "faltan campos" }));
      }
 
      listSales.push(data);
 
      res.writeHead(201, { "content-type": "apllication/json" });
      return res.end(JSON.stringify(listSales));
    });
  }
 
  res.writeHead(503, { "content-type": "apllication/json" });
  res.end(JSON.stringify({ message: "endpoint not found" }));
});
 
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
 