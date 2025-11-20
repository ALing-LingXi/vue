<template>
<div class="person">
  <h2>{{ name }}</h2>
<h2>{{ age }}</h2>
<button @click="changeName">更改名字</button>
<button @click="changeAge">更改年龄</button>
</div>
</template>
<script setup name="Person1111">
import { reactive, toRefs ,ref} from 'vue';
let Person = reactive({ name: "xixi", age: 18 })
let {name,age} = toRefs(Person)
let re = ref(3)
console.log( toRefs(Person));
console.log(re);
console.log(name);
console.log(age);
function changeAge(){
  age.value+=1
}
function changeName(){
  name.value="linxi"
}
</script>
<style>
.person {
  height: 500px;
  background-color: dodgerblue;
  box-shadow: 2px 2px;
  color: tomato;
}
</style>