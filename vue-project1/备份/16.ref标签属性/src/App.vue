<template>
<div>
 <h1> 你好，世界。</h1>
 <h2 ref="title2">哈哈，那就厉害了</h2>
<button @click="log">打印</button>
  <person ref="xixi"/>
</div>
</template>

<script setup name="App">
import { ref } from 'vue';
  import Person from './components/Person.vue';
   let title2=ref()
   let xixi = ref()
  function log(){
    console.log(title2.value);
    console.log(xixi);
  }
</script>

<style>
div{
  background-color: tomato;
  padding: 40px;
  box-shadow: 2px 4px 10%;
}
</style>