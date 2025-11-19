<template>
<div class="car">
  <h2>{{ car.price }}万</h2>
<h2>{{ car.name }}</h2>
<h2>游戏列表</h2>
<ul>
  <li v-for="g in game" :key="g.id">{{ g.name }}</li>
</ul>
<button @click="price">涨价</button>
<button @click="changeGame">更改游戏名字</button>
</div>
</template>
<script setup name="Person1111">
import { reactive,ref } from 'vue';

 let car=ref({name:"奔驰",price:100})
 let game=ref([{id:3322,name:"ELden Ring"},
  {id:1212,name:"Black Soul"},
  {id:4479,name:"Assiansst"}])
  function price(){
    car.value.price+=10
  }
  let b=reactive({name:"xixi"})
  let c = ref({name:"haha"})
  console.log(b);
  console.log(c);
  
  function changeGame(){
    game.value[2].name="LImeLightLemenoSHinning"
  }
</script>

<style>
.car{
  height: 500px;
  background-color: dodgerblue;
  box-shadow: 2px 2px ;
  color: tomato;
  }
</style>