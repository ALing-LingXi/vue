"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//简写
class simplePerson {
    name;
    age;
    constructor(name = 'xixi', age) {
        this.name = name;
        this.age = age;
    }
}
let sperson = new simplePerson('xixi', 18);
console.log(simplePerson.name);
// simplePerson.name="a" readonly只能读
// abstract 可以在抽象类中定义具体方法
class Package {
    weight;
    constructor(weight) {
        this.weight = weight;
    }
    printPackge() {
        console.log(`包裹的重量为${this.weight},运输费用${this.calculate()}元`);
    }
}
class StandardPackage extends Package {
    price;
    constructor(weight, price) {
        super(weight);
        this.price = price;
    }
    calculate() {
        return this.weight * this.price;
    }
}
let num = new StandardPackage(12, 4);
num.printPackge();
