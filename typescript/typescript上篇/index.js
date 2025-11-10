"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 99;
let b;
b = "hello";
let c;
c = 99;
c = 'ksksks';
console.log(c.length);
let d;
d = 99;
d = "kkakak";
// console.log(d.length); //报错
if (typeof d === "string") {
    console.log(d.length);
}
console.log(d.length);
console.log(d.length);
const result = function sayhello() {
    console.log('hello');
};
console.log(result);
/*   if(result){
    
  } */
// void不允许我们拿返回值去进行操作
function none() {
    throw (Error('错误'));
}
