/**
 * Created by lirui on 2017/4/3.
 */

var express = require('express');

var app = express();
app.use(express.static('public'));

app.get('/', function (request, response) {
    response.send('Hello Zhaolei');
});

var server = app.listen(8080, function () {
    console.log("Server is running...");
});