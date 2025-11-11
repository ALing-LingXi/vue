"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class newPerson {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayhello() {
        console.log(`Hello ${this.name},你今年是${this.age}岁`);
    }
}
const p1 = new newPerson('xixi', 18);
p1.sayhello();
class lnewPerson {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    sayhello() {
        console.log(`Hello ${this.name},你今年是${this.age}岁,性别:${this.gender}`);
    }
}
const p2 = new lnewPerson('linxi', 18, '女');
p2.sayhello();
