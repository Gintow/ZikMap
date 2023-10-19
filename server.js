var express = require('express');
var app = express();

app.use(express.static(__dirname + '/www'));
const port = process.env.PORT || 3000;

app.listen(port);
console.log('Starting serve on working at' + port);