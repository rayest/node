/**
 * Created by lirui on 2017/4/2.
 */

// 向 buffer 中写入字符串
var buffer1 = new Buffer(256);
var length1 = buffer1.write("I am Ray");
console.log(length1);

// 从 buffer 中读取内容
var buffer2 = new Buffer(256);
var result = 0;
for (var i = 0; i < 10; i++) {
    buffer2[i] = i + 97;
}
console.log(buffer2.toString('utf8', 0, 5));

// buffer to json
var buffer3 = new Buffer('www.rayest.cn');
var json = buffer3.toJSON();
console.log(json);

// buffer contact
var buffer4 = new Buffer("Rayest");
var buffer5 = new Buffer("Lee");
var buffer6 = Buffer.concat([buffer4, buffer5]);
console.log(buffer6.toString());
