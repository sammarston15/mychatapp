const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// run when a client connects
io.on('connection', socket => {

    // welcome current user
    socket.emit('message', 'welcome to the chat app'); // socket.emit() sends to just the client joining

    // broadcast when a user connects
    socket.broadcast.emit('message', 'a user has joined the chat!'); // socket.broadcast.emit() sends to everyone in the room

    // runs when client disconnects
    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat'); // io.emit() sends to everyone in the room
    })

})

const PORT = 3000 || process.env.PORT

server.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})