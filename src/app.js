const express = require('express');
const routesProjects = require('./routes/projects.routes.js');
const errorHandler = require('./controllers/errors.controller.js');

const port = 3000;
const hostname = "127.0.0.1";

const app = express();

app.use('/api',routesProjects);
app.use('*', errorHandler.resourceNotFound);

app.listen(port, hostname, () => {
    console.log(`Servidor escuchando en http://${hostname}:${port}/`);
});