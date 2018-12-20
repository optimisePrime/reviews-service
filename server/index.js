var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = 3001;
var app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser());

app.listen(port, ()=>{console.log('listening on port ' + port)});
