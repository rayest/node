/**
 * Created by lirui on 2017/4/3.
 */
var fs = require('fs');
var data;
var readStream = fs.createReadStream('read.txt');

readStream.on('data', function (chunk) {
    data += chunk;
});

readStream.on('end', function () {
    console.log(data);
});

readStream.on('error', function (err) {
    console.log(err.stack);
});

console.log('程序执行成功');