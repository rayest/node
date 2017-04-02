/**
 * Created by lirui on 2017/4/3.
 */

var server = require('./server');
var router = require('./router');

server.start(router.route);