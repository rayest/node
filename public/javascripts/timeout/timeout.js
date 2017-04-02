/**
 * Created by lirui on 2017/4/2.
 */
var events = require('events');
var EventEmitter = events.EventEmitter;
var event = new EventEmitter();
event.on('some_event', function () {
    console.log('some_event 事件触发');
});
setTimeout(function () {
    event.emit('some_event');
}, 1000);