/**
 * Created by lirui on 2017/4/3.
 */

var fs = require('fs');
var data = 'This is the written content';
var writeStream = fs.createWriteStream('./output.txt');
writeStream.write(data, 'UTF8');
writeStream.end();

writeStream.on('finish', function () {
    console.log('写入完成');
});

writeStream.on('error', function (err) {
    console.log(err.stack);
});

console.log('程序执行完成');