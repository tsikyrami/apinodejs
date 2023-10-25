var express = require("express");
const {port,api_prefix } = require('./config');
const api_router = require('./src/routes/api');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(api_prefix,api_router);

app.listen (port, () => {
    console.log("The server listens on the port ".concat(port));
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token,Origin, X-Requested-With, Content, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use((req, res) => {
    res.json({ message: "UPDATE !" }); 
 });

module.exports = app;