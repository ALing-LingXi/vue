<template>
  <!-- <button @click="POWER">点我改变力量</button> -->
  <div class="box">
    <child/>
  </div>
</template>

<script setup name="fist review">
import child from './child.vue';
</script>

<style>
.box{
  width:800px;
  height: 800px;
  background-color: #888;
}
</style>