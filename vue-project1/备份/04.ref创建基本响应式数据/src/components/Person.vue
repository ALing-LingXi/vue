<template>
<div class="person">
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <button @click="changeName">改变名字</button>
  <button @click="changeAge">改变年龄</button>
  <button @click="checkTel">查看电话号码</button>
</div>
</template>
<script setup name="Person1111">
  import { ref } from "vue";
    //vue3弱化this,this是undefined
    let name =ref("林希")
    let age = ref(18)
    let tel="18811998282"
    function changeName(){
      name.value="林希儿"
    }
    function changeAge(){
      age.value+=1
    }
    function checkTel(){
      alert(tel)
    }
</script>

<style>
.person{
  height: 500px;
  background-color: dodgerblue;
  box-shadow: 2px 2px ;
  color: tomato;
  }
</style>