//接口
interface Person{
  name:string
  age:number
  sayhello():void
}

class newPerson implements Person{
 constructor(public name:string,public age:number){

 }
 sayhello(): void {
   console.log(`Hello ${this.name},你今年是${this.age}岁`);
 }
}
const p1 = new newPerson('xixi',18)
p1.sayhello()

interface lPerson extends Person{
  gender:"男"|"女"
}
class lnewPerson implements Person{
 constructor(public name:string,public age:number,public gender:"男"|"女"){

 }
 sayhello(): void {
   console.log(`Hello ${this.name},你今年是${this.age}岁,性别:${this.gender}`);
 }
}
const p2 = new lnewPerson('linxi',18,'女')
p2.sayhello()