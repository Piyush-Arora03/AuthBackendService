const express = require("express");
const { PORT } = require("./Config/ServerConfig");
const app = express();
const body_parser = require("body-parser");
const apiRoute = require("./Routes/index");

const prepareAndStartServer = async () => {
    app.use(body_parser.json());
    app.use(body_parser.urlencoded({ extended: true }));

    app.use('/api', apiRoute);

    app.listen(PORT, () => {
        console.log(`server started ${PORT}`);
    });
}

prepareAndStartServer();