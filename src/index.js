const express = require("express");
const { PORT } = require("./Config/ServerConfig");
const app = express();
const body_parser = require("body-parser");
const apiRoute = require("./Routes/index");
const { UserService } = require("./Service/index");
// const db=require('./Models/index');

const service = new UserService();

const prepareAndStartServer = async () => {
    app.use(body_parser.json());
    app.use(body_parser.urlencoded({ extended: true }));

    app.use('/api', apiRoute);

    app.listen(PORT, () => {
        console.log(`server started ${PORT}`);
        // db.sequelize.sync({alter:true});
        // const newToken = service.createToken({ email: 'email@gmail.com', id: 1 });
        // console.log(newToken);
        // const response = service.verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE3NTIyNTYwODEsImV4cCI6MTc1MjI1OTY4MX0.jADUDNtlg6Tcpff7IUab8oe5V4igOqXe0jlMiDhY1UI');
        // console.log(response);
    });
}

prepareAndStartServer();