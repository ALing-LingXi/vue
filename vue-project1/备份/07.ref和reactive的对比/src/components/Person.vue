<template>
<div class="car">
  <h2>{{ car.price }}万</h2>
<h2>{{ car.name }}</h2>
<h2>{{ test.name }}</h2>
<h2>游戏列表</h2>
<ul>
  <li v-for="g in game" :key="g.id">{{ g.name }}</li>
</ul>
<button @click="price">涨价</button>
<button @click="changeGame">更改游戏名字</button>
<button @click="changeAll">更改所有</button>
<button @click="changeTest">更改测试</button>
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
  let test = reactive({name:"xixi",age:18})
  
  function changeGame(){
    game.value[2].name="LImeLightLemenoSHinning"
  }
  function changeAll(){
    car.value={name:"宝马",price:100000}//ref的数据一定是响应式
    //如果car是reactive定义的，那么不能直接这样写，不然car会变成一个普通的对象
    // ref，不能直接对，ref的对象进行改变
  }
  function changeTest(){
    // test={name:"heihei",age:18}
    Object.assign(test,{name:"heihei",age:18})

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