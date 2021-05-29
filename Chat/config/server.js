const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const server = express();

const routesIndex = require('../app/routes/index.routes');
const routesChat = require('../app/routes/chat.routes');

server.set('view engine', 'ejs');
server.set('views', './app/views');
server.use(express.static('./app/public'));

server.use(express.json());
server.use(express.urlencoded({ extended: true }))

server.use(routesIndex);
server.use(routesChat);

const http = createServer(server);
const io = new Server(http);

io.on('connection', (socket) => {
    //console.log('Se conectou Socket', socket.id);

    /* socket.on('disconnect', () => {
        console.log("Usuario desconectou")
    }) */
})

module.exports = http;