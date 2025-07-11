const express = require("express");
const { PORT } = require("./Config/ServerConfig");
const app = express();

const prepareAndStartServer = () => {
    app.listen(PORT, () => {
        console.log(`server started ${PORT}`);
    });
}

prepareAndStartServer();