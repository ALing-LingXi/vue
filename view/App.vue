<template>
<div class="haha">
    <h2>{{msgRef}}</h2>
  <input type="text" v-model="msgRef">
</div>
</template>

<script setup>
import timeRef from "./timeRef"
let {msgRef} = timeRef("嘻嘻",2000)
</script>

<style>
  .haha{
    box-shadow: 0 0 10px;
    background-color: skyblue;
    padding: 10px;
  }
</style>