var express = require("express");
var app = express();
var productRouter =require('./productRouter')
var infoRouter =require('./infoRouter')

app.use('/info', infoRouter);
app.use('/product', productRouter);

module.exports = app;