let a:number=99
let b:string
b="hello"
let c:any
c=99
c='ksksks'
console.log(c.length);

let d:unknown
d=99
d="kkakak"
// console.log(d.length); //报错
if(typeof d==="string"){
console.log(d.length);
}
console.log((d as string).length);
console.log((<string>d).length);
const result = function sayhello():void{
  console.log('hello');}
  console.log(result);
  
/*   if(result){
    
  } */   
 // void不允许我们拿返回值去进行操作
 function none():never{
  throw(Error('错误'))
 }