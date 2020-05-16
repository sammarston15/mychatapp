const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// run when a client connects
io.on('connection', socket => {
    console.log('connected to socket!');
})

const PORT = 3000 || process.env.PORT

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})