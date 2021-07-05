var express = require('express');
const session = require('express-session');

var server = express();

const routes = require('./routes/index.routes');

server.set('view engine', 'ejs');
server.set('views', './src/views');
server.use(express.static('./src/public'));

server.use(express.json());
server.use(express.urlencoded({ extended: true }))
server.use(session({
   secret: '3854745064a762d9893f781446638cf4',
   resave: false, //Verificar se a sessao vai ser gravada mais de uma vez
   saveUninitialized: false, //Verificar uma sessao nova toda vez que o valor for modificado
}));

server.use(routes);

module.exports = server;