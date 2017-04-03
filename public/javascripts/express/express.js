/**
 * Created by lirui on 2017/4/3.
 */

var express = require('express');
var app = express();

app.get('/get', function (request, response) {
    console.log('发送了GET请求, 用于获取资源');
    response.send('GET is used to get some resource');
});

app.post('/create', function (request, response) {
    console.log('发送了POST请求，用于创建资源');
    response.send("POST is used to create a new resource");
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用访问地址为：http://%s:%s", host, port);
});



