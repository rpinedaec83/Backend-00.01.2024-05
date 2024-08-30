require("dotenv").config();
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.PORT || 3000;
app.use(express.static("public"));

const OpenAI =require( 'openai');
const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
  });
  

io.on("connection", (socket) => {
    console.log("New user connected");
    const conversationHistory = [];
    socket.on("sendMessage", async (message, callback) => {
        try {
            console.log(message);
            conversationHistory.push({ role: "user", content: message });
            const completion = await openai.chat.completions.create({
                model: process.env.MODEL || "gpt-3.5-turbo",
                messages: conversationHistory,
            });
            console.log(completion);
            
              const response = completion.choices[0].message?.content;
              console.log(response);
            conversationHistory.push({ role: "assistant", content: response });
            socket.emit("message", response);
            callback();
        } catch (error) {
            console.error(error);
            callback("Error: Unable to connect to the chatbot");
        }
    });
    socket.on("disconnect", () => {console.log("User disconnected");});
});


server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
