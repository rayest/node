/**
 * Created by lirui on 2017/4/3.
 */

var express = require('express');
var app = express();

app.get('/', function (request, response) {
    response.send('Hello World');
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用访问地址为：http://%s:%s", host, port);
});



