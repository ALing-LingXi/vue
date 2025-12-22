<template>
<h1>小诺安的玩具</h1>
<input type="text" v-model="toy">
<button @click="addToy">添加玩具</button>
<br>
<input type="text"v-model="number">
<button @click="sendToy">把玩具送给爸爸</button>
<ul>
  <li v-for="(value,index) in toyList">
    {{ [index] }}{{ value }}
  </li>
</ul>
</template>

<script setup>
import { ref } from 'vue';

let toy = ref()
let toyList=ref([])
let number = ref()
function addToy(){
  toyList.value.push(toy.value)
  toy.value=""
  console.log(toyList);
}
//根据索引删除
function sendToy(){
  toyList.value.splice(number,1)
  number=""
}
</script>
<style>

</style>