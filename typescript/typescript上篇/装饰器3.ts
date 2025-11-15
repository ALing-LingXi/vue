//装饰器工厂
interface Person{
  introduce:Function
}
function Loginfo(number:number){
  return function(target:Function){
  target.prototype.introduce = function(){
      for(let i=0;i<number;i++){
      console.log(`My name is${this.name} My age is ${this.age}`);
    }
  }
  }
}
@Loginfo(5)
class Person{
  constructor(public name:string,public age:number ){
  }
  sayHello():void{
    console.log("哈哈");
  }
}
const p = new Person("xixi",18)
p.introduce()
