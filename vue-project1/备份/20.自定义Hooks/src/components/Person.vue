<template>
  <div class="person">
    <h2>{{ sum }},乘以10后{{ bigSum }}</h2>
    <img v-for="(dog,index) in dogList" :src="dog" :key="index">
    <button @click="add">点我增加</button>
    <button @click="addDog">再来一张狗的图片</button>
  </div>
</template>
<script setup name="Person1111" lang="js">
// import {ref,reactive} from "vue"
import axios from "axios"
import useDog from "@/hooks/useDog"
import useSum from "@/hooks/useSum"
let {dogList,addDog} = useDog()
let {sum,add,bigSum}=useSum()
</script>
<style>
.person {
  height: 500px;
  background-color: dodgerblue;
  box-shadow: 2px 2px;
  color: tomato;
}
</style>


