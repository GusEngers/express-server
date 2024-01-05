const express = require('express');
const path = require('path');

// RUTAS IMPORTADAS
const api = require('./api/routes');
const client = require('./client/routes');

// MIDDLEWARES
const morgan = require('morgan');
const { apiErrorHandler, clientErrorHandler } = require('./utils/error-handlers');
const { notFoundApiHandler, notFoundClientHandler } = require('./utils/not-found-handlers');

const app = express();

// CONFIGURACIÓN PRINCIPAL DE LA APLICACIÓN
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

// MOTOR DE VISUALIZACIÓN DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');

// RUTAS DEFINIDAS
app.use('/api', api, notFoundApiHandler, apiErrorHandler);
app.use('/', client, notFoundClientHandler, clientErrorHandler);

module.exports = app;
