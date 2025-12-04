<template>
<div id="com1">
  <h2>当前求和为：{{ sum }},{{ bigSum }}</h2>
<select v-model.number="n">
  <option :value="1">1</option>
  <option :value="2">2</option>
  <option :value="3">3</option>
</select>
<button @click="add">加</button>
<button @click="minus">减</button>
</div>
</template>

<script setup>
import { usecountStore} from '@/store/countStore';
import { reactive,ref } from 'vue';
import { storeToRefs } from 'pinia';
const storeCount = usecountStore()
let {sum,bigSum}=storeToRefs(storeCount)
let n = ref(1)
function add(){
//1 storeCount.sum+=n.value

//2 storeCount.$patch({
//   sum:800
// })

  storeCount.increment(n.value)
}
function minus(){
storeCount.sum-=n.value

}
console.log(storeCount);

</script>

<style>
#com1{
  background-color: skyblue;
  height: 200px;
  padding: 10px;
}
button,select{
  height: 30px;
  width: 30px;
  margin-right: 5px;
}
</style>