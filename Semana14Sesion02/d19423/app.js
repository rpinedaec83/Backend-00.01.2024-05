require("dotenv").config();
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.PORT || 3000;
app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("New user connected");
    socket.on("sendMessage", async (message, callback) => {
        console.log(message);
        setTimeout(()=>{
            socket.emit("message", "Hola desde el servidor");
        }, 5000);
        callback();
    });
    socket.on("disconnect", () => {console.log("User disconnected");});
});


server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
