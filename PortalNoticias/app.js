const express = require('express');
const consign = require('consign');
const bodyparser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./app/public'));

app.use(bodyparser.urlencoded({ extended: true }));

consign()
    .include('app/routes')
    .then('config/connection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* require('./app/routes/home.routes')(app);
require('./app/routes/noticias.routes')(app);
require('./app/routes/fomulario_inclusao_noticia.routes')(app); */

module.exports = app;