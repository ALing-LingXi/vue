"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class newPerson {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`${this.name}+${this.age}`);
    }
}
let a = new newPerson("xixi", 18);
a.sayHello();
