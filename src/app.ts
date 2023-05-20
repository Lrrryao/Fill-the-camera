import express from "express"
import { Server, Socket } from "socket.io"

// Create an express app
const app = express()

// Defination of port at which server will run
const PORT = 3500

// Initiating server
const server = app.listen(PORT,  () => console.log(`Server is running at localhost:${PORT}`))

// Initialize web socket server
const io = new Server(server)

// Listening to client connection event
io.on("connection", (socket: Socket) => {
    console.log("a client has connected");

    socket.on('color-value-reception', (data) => {
        console.log('Received color:', data);
    
        // recieve color value from c++ client here and send to python client
      });
})
