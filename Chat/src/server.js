const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const server = express();

const routesIndex = require('./routes/index.routes');
const routesChat = require('./routes/chat.routes');

server.set('view engine', 'ejs');
server.set('views', './src/views');
server.use(express.static('./src/public'));

const http = createServer(server);
const io = new Server(http);

io.on('connection', (socket) => {
    console.log('Usuario se conectou');

    socket.on('disconnect', () => {
        console.log("Usuario desconectou")
    })

})

global.io = io;

server.use(express.json());
server.use(express.urlencoded({ extended: true }))

server.use(routesIndex);
server.use(routesChat);

module.exports = { http }