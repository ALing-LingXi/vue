"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// object
let person;
let a = 2;
let b = 3;
person = { name: "xixi", age: 19, sex: "woman" };
let count;
count = (a, b) => a + b;
let count1;
count1 = function (a, b) {
    return a + b;
};
//function
let fn;
let fn5;
fn = function (x, y) {
    return x;
};
fn(4, "aiakk");
console.log(fn(4, "aiakk"));
//Array
let arr1;
let arr2;
let arr3;
let arr4;
//元组
let arrz;
let arrz1;
let arrz2;
arrz = [1, 'w'];
arrz1 = [2, true, "a"];
arrz2 = [2, 's'];
//enmu
// // 普通枚举
// enum Direction {
//   up,
//   down,
//   left,
//   right
// }
// // 常量枚举
// const enum Direction2 {
//   up,
//   down,
//   left,
//   right
// }
// // 混合枚举
// const enum Direction3 {
//   up = 1,
//   down = 'down',  // 字符串成员失去反向映射
//   left = 'left',
//   right = 'right'
// }
// // 正确使用
// console.log(Direction[0]);        // "up"
// console.log(Direction.up);        // 0
// 常量枚举
var Direction2;
(function (Direction2) {
    Direction2[Direction2["up"] = 0] = "up";
    Direction2[Direction2["down"] = 1] = "down";
    Direction2[Direction2["left"] = 2] = "left";
    Direction2[Direction2["right"] = 3] = "right";
})(Direction2 || (Direction2 = {}));
let one = {
    area: "shanghai",
    adress: 100
};
const fn1 = () => {
    return 99;
};
console.log(fn1());
// if(fn1()) 但是我们还是不能进行操作
