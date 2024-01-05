const express = require('express');
const path = require('path');
const api = require('./api/routes');

const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

/* Motor de visualización de plantillas */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');

/* Rutas */
app.use('/api', api);

module.exports = app;
