/**
 * Created by lirui on 2017/4/3.
 */

var fs = require('fs');
var readStream = fs.createReadStream('./input.txt');
var writeStream = fs.createWriteStream('./output.txt');

readStream.pipe(writeStream);