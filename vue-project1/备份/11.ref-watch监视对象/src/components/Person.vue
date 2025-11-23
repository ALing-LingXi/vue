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
import {ref,watch} from "vue"
let person =ref({name:"xixi",age:0})
function changeName(){
  person.value.name+="~"
}
function changeAge(){
  person.value.age+=1
}
function changeAll(){
  person.value={name:"LInxi",age:18}
}
watch(person,(newValue,oldValue)=>{
  console.log("改变了",newValue,oldValue);
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