/**
 * Created by lirui on 2017/4/6.
 */

// assert
const assert = require('assert');
assert(true);

const object1 = {
    a: {
        b: 1
    }
};

const object2 = {
    a: {
        b: 2
    }
};

const object3 = {
    a: {
        b: 1
    }
};

// object4 的原型是 object1
const object4 = Object.create(object1);

// 判断是否深度相等
assert.deepEqual(object1, object1);
assert.deepEqual(object1, object2);
assert.deepEqual(object1, object3);
assert.deepEqual(object1, object4);


