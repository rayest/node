/**
 * Created by lirui on 2017/3/29.
 */

var fs = require('fs');
var data = fs.readFileSync('../file/blocked.txt');
console.log(data.toString());
console.log("2. 程序执行结束");