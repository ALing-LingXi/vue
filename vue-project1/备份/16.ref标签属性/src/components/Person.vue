<template>
<div class="person">
<h2 ref="title2">我不会影响你：隶属组件</h2>
<button @click="log">打印</button>
</div>
</template>
<script setup name="Person1111">
import {reactive,watch,watchEffect,ref} from "vue"
  let title2=ref()
  let a=1
  let b=2
  function log(){
    console.log(title2.value);
  }
  defineExpose({a,b})
</script>
<style>
.person {
  height: 500px;
  background-color: dodgerblue;
  box-shadow: 2px 2px;
  color: tomato;
}
</style>