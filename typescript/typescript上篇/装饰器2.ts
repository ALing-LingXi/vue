/* type Constructor = {new (...agrs:any[]):{}
wife:string
}
class Person{
  static wife ="xixi"
  name:string
  constructor(name:string){
    this.name=name
  }
}

function test(fn:Constructor){

}
test(Person) */
interface Person{
  getTime():Date
  date:Date
}
type Constructor = new(...agrs:any[])=>{}
function LogTime<T extends Constructor>(target:T){
  return class extends target{
    date :Date
    constructor(...agrs:any[]){
      super(...agrs)
      this.date = new Date()
    }
    getTime(){
      return this.date
    }
  }
}

@LogTime
class Person{
  constructor(public name:string,public age:number){
  }
  sayHello():void{
    console.log('haha');
  }
}
let p = new Person("xixi",18)
console.log(p.getTime());

