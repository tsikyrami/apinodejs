var express = require("express");
const {port,api_prefix } = require('./config');
const api_router = require('./src/routes/api');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(api_prefix,api_router);

app.listen(port, () => {
    console.log("The server listens on the port ".concat(port));
});

module.exports = app;