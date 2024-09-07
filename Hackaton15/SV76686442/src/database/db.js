var mysql=require('mysql');

var con= mysql.createConnection({
    host:process.env.MYSQLHOST,
    user:process.env.MYSQLUSER,
    password:process.env.MYSQLPASS,
    database:process.env.MYSQLDB
});

con.connect(function(err){
    if(err) throw err;

// Tabla de mensajes
    var sql="CREATE TABLE IF NOT EXISTS message (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, message VARCHAR(2550), user VARCHAR(250))";
    con.query(sql, function(err, result){
        if(err) throw err;
    });

// Tabla de login
var sql = "CREATE TABLE IF NOT EXISTS login (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, username VARCHAR(250) UNIQUE, password VARCHAR(250))";
con.query(sql, function (err, result) {
    if (err) throw err;
});

// Tabla de paquetes
var sql = "CREATE TABLE IF NOT EXISTS package (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, description VARCHAR(255), sender VARCHAR(250), recipient VARCHAR(250), status VARCHAR(100), user VARCHAR(250), latitude DECIMAL(10, 8), longitude DECIMAL(11, 8))";
con.query(sql, function (err, result) {
    if (err) throw err;
});



});

module.exports=con;