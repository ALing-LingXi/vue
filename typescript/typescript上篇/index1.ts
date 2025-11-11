// object
let person:{
  name:string,
  age:number,
  sex?:string,
  [key:string]:any
}
let a:number = 2
let b:number =3
person = {name:"xixi",age:19,sex:"woman"}
let count:(a:number,b:number)=>number
count = (a,b)=> a+b
let count1:(a:string,b:string)=>string

count1 = function(a,b){
  return a+b
}
//function
 let fn :(a:number,b:string)=>number
 let fn5 :(a:number,b:string)=>number

 fn = function(x,y){
  return x
 }
 fn(4,"aiakk")
 console.log( fn(4,"aiakk"));
 //Array
let arr1:string[]
let arr2:number[]
let arr3:Array<number>
let arr4:Array<string>
 
//元组
let arrz:[number,string]
let arrz1:[number,boolean?,...[string]]
let arrz2:[number,...[string]]

arrz=[1,'w']
arrz1=[2,true,"a"]
arrz2=[2,'s']

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
const enum Direction2 {
  up,
  down,
  left,
  right
}


//type
type Status = number|string
type Area = {
  area:string
}
type Adress={
  adress:number
}
type House = Area & Adress
 let one:House  = {
  area:"shanghai",
  adress:100
}

//特殊情况 函数声明void之后可以返回undefined以外的别的值
type Fn = ()=>void
const fn1:Fn = ()=>{
  return 99
}
console.log(fn1());
// if(fn1()) 但是我们还是不能进行操作