var express = require('express');

var router = require('./router/index.js');
var login = require('./js/login.js');
var path = require('path');
var app = express();
require('./js/upload.js')(app);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/',login);
app.use('/',router);

app.listen(9999);

console.log('服务启动');