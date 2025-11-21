<template>
<div class="person">
  <h2>总和:{{ sum }}</h2>
  <button @click="Add">增加</button>
</div>
</template>
<script setup name="Person1111">
 import { ref,watch } from 'vue';
 let sum = ref(0)
function Add(){
  sum.value+=1
}
const stopWatch=watch(sum,(newValue,oldValue)=>{
  console.log(sum,"new:"+newValue,"old"+oldValue);
  if(sum.value>=10){
    console.log(stopWatch);
  stopWatch()
}
})
</script>
<style>
.person {
  height: 500px;
  background-color: dodgerblue;
  box-shadow: 2px 2px;
  color: tomato;
}
</style>