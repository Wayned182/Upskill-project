var jsonServer   = require('../node_modules/json-server');
var server       = jsonServer.create();
var router       = jsonServer.router('server/db.json');

var express      = require("../node_modules/express");
var app          = express();
var path         = require("path");

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/../app/index.html'));
});
app.use(express.static(path.join(__dirname, '../')));
var http = require('http').Server(app);
http.listen(8099);

server.use(jsonServer.defaults());  // logger, static and cors middlewares
server.use(router);                 // Mount router on '/'
server.listen(5000);