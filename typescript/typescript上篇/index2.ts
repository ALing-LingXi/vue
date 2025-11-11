class Person{
 readonly name:string
  age:number
  constructor(name:string,age:number){
    this.name=name
    this.age =  age
  }
}
//简写
class simplePerson{
  constructor(public readonly name:string='xixi',public age:number){
  }
}
let sperson=new simplePerson('xixi',18)
console.log(simplePerson.name);
// simplePerson.name="a" readonly只能读


// abstract 可以在抽象类中定义具体方法
abstract class Package{
  constructor(public weight :number){
  }
  abstract calculate():number
  printPackge(){
    console.log(`包裹的重量为${this.weight},运输费用${this.calculate()}元`);
  }
}
class StandardPackage extends Package{
  constructor(
    weight:number,
    public price:number
  ){super(weight)}
   calculate():number{
    return this.weight*this.price
   }
}

let num = new StandardPackage(12,4)
num.printPackge()