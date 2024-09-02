import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Server } from "socket.io";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Message from "./models/Message.js";
import callChatGPT from "./config/chatgpt_ready.js";


// Configura dotenv
dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const server = createServer(app);
const io = new Server(server);

// Conexión a la base de datos
connectDB();
 
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chat message", async (data) => {
    if (data.message.includes("@meta")) {
       // Llama a la API de ChatGPT
       const prompt = data.message.replace("@meta", "").trim();
       const chatGPTResponse = await callChatGPT(prompt);
 
       // Actualiza el mensaje con la respuesta de ChatGPT
       data.message = chatGPTResponse;
       data.username = "OpenIA";
    }

    // Guarda el mensaje en MongoDB
    try {
      const newMessage = new Message({
        username: data.username,
        message: data.message,
        timestamp: new Date(),
      });
      await newMessage.save();
      console.log("Message saved to DB:", data);
    } catch (error) {
      console.error("Error saving message to DB:", error);
    }

    io.emit("chat response", data);
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
