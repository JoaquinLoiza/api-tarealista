const express = require('express');
const cors = require('cors');
const config = require("./config.js");
const routesProjects = require('./routes/projects.routes.js');
const errorsController = require('./controllers/errors.controller.js');

const port = config.PORT;
const hostname = config.HOST;
const whiteListOrigin = config.whiteListOrigin;

const app = express();

const corsOptions = {
    origin: function (origin, callback) {

        console.log(origin);

        if (whiteListOrigin.indexOf(origin) !== -1) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions));

app.use(express.json());
app.use('/api', routesProjects);
app.use('*', errorsController.resourceNotFound);
app.use(errorsController.serverError);

app.listen(port, hostname, () => {
    console.log(`Server listening on http://${hostname}:${port}/`);
});