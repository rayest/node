/**
 * Created by lirui on 2017/4/3.
 */

var util = require('util');

function Person() {
    this.name = 'ray';
    this.age = 26;
    this.toString = function () {
        return this.name + ": " + this.age;
    }
}

var object = new Person();

console.log(util.inspect(object));
console.log(util.inspect(object, true));