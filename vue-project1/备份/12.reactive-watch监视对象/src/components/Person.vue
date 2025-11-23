<template>
<div class="person">
  <h2>name:{{ person.name }}</h2>
  <h2>age:{{ person.age }}</h2>
  <button @click="changeName">改变名字</button>
  <button @click="changeAge">改变年龄</button>
  <button @click="changeAll">改变全部</button>
</div>
</template>
<script setup name="Person1111">
import {reactive,watch} from "vue"
let person =reactive({name:"xixi",age:0})
function changeName(){
  person.name+="~"
}
function changeAge(){
  person.age+=1
}
function changeAll(){
  person=Object.assign(person,{name:"LInxi",age:18})
}
watch(person,(newValue,oldValue)=>{
  console.log("改变了",newValue,oldValue);
},{immediate:true})//默认就是深沉监视,隐式创建。
</script>
<style>
.person {
  height: 500px;
  background-color: dodgerblue;
  box-shadow: 2px 2px;
  color: tomato;
}
</style>