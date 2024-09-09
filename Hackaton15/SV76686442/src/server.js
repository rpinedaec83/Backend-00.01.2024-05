var express = require("express");
var path = require("path");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var bodyParser = require("body-parser");
var session = require("express-session");
const passport = require("passport");
const cookieSession = require("cookie-session");

require("./passport");

const { SECRET, PORT } = require("./config") ;
var username;
let email = "";
let connections = [];

var con = require("./database/db");

app.use(
  cookieSession({
    name: "google-auth-session",
    keys: ["key1", "key2"],
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: SECRET }));

app.get("/", function (req, res) {
  authenticate(req, res);
});

function authenticate(req, res) {
  //console.log("authenticate called");
  if (!req.session.user) {
    res.sendFile(__dirname + "/public/login.html");
  } else {
    //console.log(req.session.user);
    username = req.session.user;
    res.sendFile(__dirname + "/public/chat.html");
  }
}

app.get("/logout", function (req, res) {
  delete req.session.user;

  req.session = null;
  //req.logout();
  res.redirect("/login");
});

app.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email"],
  })
);
app.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failed",
  }),
  function (req, res) {
    console.log(req.user.email);
    email = req.user.email;
    res.redirect("/success");
  }
);

app.get("/success", (req, res) => {
  //REPLACE INTO `tablename` (`id`, `name`, `age`) VALUES (1, "A", 19)
  var sql =
    "REPLACE INTO login (username , password) VALUES ('" +
    email +
    "' , 'oauth')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    //console.log("1 record inserted");
  });
  req.session.user = email;
  username = email;
  console.log("ingreso",username);
  res.redirect("/chat_start");
});

app.get("/chat_start", function (req, res) {
  authenticate(req, res);
});

app.get("/login", function (req, res) {
  authenticate(req, res);
});

app.post("/login", function (req, res) {
  login(req, res);
});

function login(req, res) {
    var post = req.body;
    username = post.user;
    var password = post.password;
    //console.log(username);
    var sql = "SELECT * FROM login WHERE username='" + username + "'";
    con.query(sql, function (err, result, fields) {
        if (result.length === 1) {
            var jsonString = JSON.stringify(result);
            var jsonData = JSON.parse(jsonString);
            if (jsonData[0].password === password) {
                //console.log("User Identified");
                req.session.user = post.user;
                username = post.user;
                res.redirect("/chat_start");
            } else {
                //console.log("user not Identified");
                res.redirect("/login");
            }
        } else {
            res.redirect("/login");
        }
    });
}

function chat_start() {

    // ===================================Sockets starts  =========================
    io.sockets.on('connection', function (socket) {
        connections.push(socket);
        //console.log("Connected:  %s Socket running", connections.length);
        // ====================Disconnect==========================================
        socket.on('disconnect', function (data) {
            connections.splice(connections.indexOf(data), 1);
            //console.log('Disconnected : %s sockets running', connections.length);
        });
        // ==================initilize data and show================================
        socket.on('initial-messages', function (data) {
            var sql = "SELECT * FROM message ";
            con.query(sql, function (err, result, fields) {
                var jsonMessages = JSON.stringify(result);
                console.log("Mensajes iniciales enviados:", jsonMessages);  // Verificar mensajes enviados
                io.sockets.emit('initial-messages', { msg: jsonMessages });
            });
        });
        socket.on('username', function (data) {
          console.log('aqui',username);
            socket.emit('username', { username: username });


            //io.sockets.emit('username', {username: username});
        });

        //   ============== Send and Save Messages=====================================
        socket.on('send-message', function (data) {
          console.log('data', data);
          var sql = "INSERT INTO message (message , user) VALUES ('" + data.msg + "' , '" + username + "')";
          con.query(sql, function (err, result) {
              if (err) throw err;
          });
          io.sockets.emit('new-message', { msg: data.msg, username: username });
      });
      
        socket.on('typing', function (data, user) {
            //console.log(user);
            io.sockets.emit('typing', { msg: data, user: user });
        })
    })
}
chat_start();

app.post("/add-package", function (req, res) {
  const { description, sender, recipient, status, latitude, longitude } = req.body;
  
  // Insertar el paquete en la base de datos
  const sqlInsert = "INSERT INTO package (description, sender, recipient, status, user, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?)";
  
  con.query(sqlInsert, [description, sender, recipient, status,username, latitude, longitude], function (err, result) {
    if (err) throw err;

    // Obtener el ID del paquete recién insertado
    const packageId = result.insertId;

    res.json({ message: "Package added successfully", packageId: packageId });
  });
});

// Rutas para obtener paquetes y ubicaciones

app.get('/get-packages', function(req, res) {
  const sql = 'SELECT id, description FROM package';
  con.query(sql, function(err, results) {
    if (err) throw err;
    res.json({ packages: results });
  });
});

app.get('/get-package-location/:id', function(req, res) {
  const packageId = req.params.id;
  const sql = 'SELECT latitude, longitude FROM package WHERE id = ?';
  con.query(sql, [packageId], function(err, results) {
    if (err) throw err;
    if (results.length > 0) {
      res.json({ location: results[0] });
    } else {
      res.status(404).send('Package not found');
    }
  });
});



server.listen(PORT, function () {
  console.log(`listening on *:${PORT}`);
});
