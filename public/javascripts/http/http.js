/**
 * Created by lirui on 2017/3/29.
 */

var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello world!');
}).listen(8888);
console.log("Server is running at http://127.0.0.1:8888, and the output is \"Hello world!\"");