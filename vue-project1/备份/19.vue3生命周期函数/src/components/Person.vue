<template>
  <div class="person">
    <h2>{{ sum }}</h2>
    <button @click="add">点我增加</button>
  </div>
</template>
<script setup name="Person1111" lang="ts">
import { onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,ref} from 'vue';
  console.log("创建前");
  console.log("创建完毕");
  let sum = ref(0)
  function add() {
    sum++
  }
  onBeforeMount(()=>{
    console.log("挂载前");
  })
  onMounted(()=>{
    console.log("挂载完毕");
    
  })
  onBeforeUpdate(()=>{
    console.log("更新前");
  })
  onUpdated(()=>{
    console.log("更新完毕");
  })
  onBeforeUnmount(()=>{
    console.log("卸载前");
  })
   onUnmounted(()=>{
    console.log("卸载完毕");
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