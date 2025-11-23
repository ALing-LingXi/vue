<template>
<div class="person">
  <h2>name:{{ person.name }}</h2>
  <h2>age:{{ person.age }}</h2>
  <h2>车1:{{ person.car.firstCar }}</h2>
  <h2>车2:{{ person.car.secondCar }}</h2>
  <button @click="changeName">改变名字</button>
  <button @click="changeAge">改变年龄</button>
  <button @click="changePerson">改变全部</button>
  <button @click="changeCar1">改变车1</button>
  <button @click="changeCar2">改变车2</button>
  <button @click="changeCars">改变所有车</button>
</div>
</template>
<script setup name="Person1111">
import {reactive,watch} from "vue"
let person = reactive({
  name:"xixi",
  age:18,
  car:{
    firstCar:"奔驰",
    secondCar:"宝马"
  }
})
function changeAge(){
  person.age+=1
}
function changeName(){
  person.name='Linxi'
}
function changePerson(){
person.age=10000000000
person.name='xixibuxixi'
}
function changeCar1(){
  person.car.firstCar="迈巴赫"
}
function changeCar2(){
  person.car.secondCar="特斯拉"
}
function changeCars(){
  person.car={firstCar:"宾利",secondCar:"法拉利"}
}
// watch(()=>person.name,(newValue,oldValue)=>{
//   console.log("名字发生更改",newValue,oldValue);
// })
// watch(()=>person.car,(newValue,oldValue)=>{
// console.log("车发生改变",newValue,oldValue);
// },{deep:true,immediate:true})
watch([()=>person.name,()=>person.car],(newValue,oldValue)=>{
    console.log("名字发生更改",newValue,oldValue);
},{deep:true,immediate:true})
</script>
<style>
.person {
  height: 500px;
  background-color: dodgerblue;
  box-shadow: 2px 2px;
  color: tomato;
}
</style>