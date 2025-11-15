// function Demo(target: Function) {
//  console.log(target)
// }

// @Demo
// class Person { }

// 定义⼀个装饰器，实现 Person 实例调⽤ toString 时返回 JSON.stringify 的⾏结果。
// function CustomString(target:Function){
//   target.prototype.toString = function(){
//     return JSON.stringify(this)
//   }
//   Object.seal(target.prototype)
// }
// @CustomString
// class Person{
//   constructor(public name:string,public age :number){
//   }
//   sayHello():void{
//     console.log("Hello");
//   }
// }

// const p = new Person("xixi",18)
// console.log(p.toString());
// interface Person{
//   a:number
// }
// Person.prototype.a=8

// 类装饰器有返回值：若类装饰器返回⼀个新的类，那这个新类将替换掉被装饰的类。
// 类装饰器⽆返回值：若类装饰器⽆返回值或返回 undefined ，那被装饰的类不会被替换。
// function Demo(target:Function){
//   return class{
//     sayHello(){
//       console.log('haha');
//     }
//   }
// }
// @Demo
// class Person{
  
// }
// console.log(Person);
// let a = new Person
// interface Person{
//   sayHello:Function
// }
// a.sayHello()
//限定传入的类型必须是一个类
// type Constructor = new (...agrs:any[])=>{}
// function test(fn:Constructor){
// }
// class Person{
// }
// const a = ()=>{}
// test(Person)
// test(a)