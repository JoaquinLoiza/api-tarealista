const express = require('express');
const cors = require('cors');
const routesProjects = require('./routes/projects.routes.js');
const errorsController = require('./controllers/errors.controller.js');
const config = require('./config.js');

const port = config.PORT;
const hostname = config.HOST;

const app = express();

app.use(express.json());

const corsOptions = {
    origin: [config.whiteListOrigin]
}

app.use(cors(corsOptions));

app.use('/api',routesProjects);
app.use('*', errorsController.resourceNotFound);
app.use(errorsController.serverError);

app.listen(port, hostname, () => {
    console.log(`Servidor escuchando en http://${hostname}:${port}/`);
});