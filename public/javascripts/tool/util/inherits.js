/**
 * Created by lirui on 2017/4/3.
 */

var util = require('util');

// 构造函数
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function () {
        console.log('Hello, ' + this.name);
    };
}
// 在原型内定义的函数
Base.prototype.showName = function () {
    console.log(this.name);
};

function Sub() {
    this.name = 'sub';
}
// sub 继承自 base, 仅仅继承了在原型中定义的函数和属性
util.inherits(Sub, Base);

var objectBase = new Base();
objectBase.showName();
objectBase.sayHello();
console.log(objectBase);

var objectSub = new Sub();
objectSub.showName();
// objectSub.sayHello();
console.log(objectSub);


