const express = require('express');
const path = require('path');
const api = require('./api/routes');
const client = require('./client/routes');

const app = express();

// CONFIGURACIÓN PRINCIPAL DE LA APLICACIÓN
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

// MOTOR DE VISUALIZACIÓN DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');

// RUTAS DEFINIDAS
app.use('/api', api);
app.use('/', client);

module.exports = app;
