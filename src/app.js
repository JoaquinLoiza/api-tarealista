const express = require('express');
const routesProjects = require('./routes/projects.routes.js');
const errorsController = require('./controllers/errors.controller.js');
const cors = require('cors');
const config = require("./config.js");

const port = config.PORT;
const hostname = config.HOST;

const app = express();

const originList = process.env.ORIGIN_LIST.split(',');

// Configurar CORS con una lista de direcciones permitidas
const corsOptions = {
    origin: 'http://localhost:5500',
    methods: 'GET,HEAD,POST,PUT,DELETE',
    credentials: true, // Habilitar el intercambio de cookies en las solicitudes CORS
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));


app.use(express.json());
app.use('/api', routesProjects);
app.use('*', errorsController.resourceNotFound);
app.use(errorsController.serverError);

app.listen(port, hostname, () => {
    console.log(`Server listening on http://${hostname}:${port}/`);
});