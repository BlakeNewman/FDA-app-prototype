var gzippo = require('gzippo');
var express = require('express');
var logger = require('morgan');

var app = express();

app.use(logger("combined"));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 80);