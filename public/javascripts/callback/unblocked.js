/**
 * Created by lirui on 2017/3/29.
 */
// 文件在读取完之后，将文件内容作为回调函数的参数返回。异步。
var fs = require('fs');
fs.readFile('../file/blocked.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
});
console.log("2. 程序执行结束");