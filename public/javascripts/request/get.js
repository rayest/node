/**
 * Created by lirui on 2017/4/3.
 */

var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var parameters = url.parse(request.url, true).query;
    response.write("name:" + parameters.name);
    response.write("\n");
    response.write("age:" + parameters.age);
    response.write("\n");
    response.end(util.inspect(url.parse(request.url, true)));
}).listen(8080);