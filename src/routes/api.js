var express = require("express");
var app = express();
var productRouter =require('./productRouter')

app.use('/product', productRouter);

module.exports = app;