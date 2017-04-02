/**
 * Created by lirui on 2017/4/2.
 */
// 引入 events 模块
var events = require("events");

// 创建 EventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectionHandler = function connected() {
    console.log('连接成功。');
    eventEmitter.emit('data_received');
};

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function () {
    console.log('数据接收成功');
});

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectionHandler);

// 触发 connection 事件
eventEmitter.emit('connection');

console.log('程序执行完毕');