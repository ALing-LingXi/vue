interface Person{
  name:string,
  age:number,
  sayHello():void
}
class newPerson implements Person{
  constructor(public name:string,public age:number){
  }
  sayHello(): void {
    console.log(`${this.name}+${this.age}`);
  }
}

let a = new newPerson("xixi",18)
a.sayHello()