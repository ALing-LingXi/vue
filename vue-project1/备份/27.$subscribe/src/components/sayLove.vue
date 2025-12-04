<template>
<div id="com">
<button @click="getLove">获取一句情话</button>
<ul>
  <li v-for="talk in talkstore.talkList" :key="talk.id">{{ talk.title }}</li>
</ul>
</div>
</template>

<script setup>
import { reactive } from 'vue';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useLovestore } from '@/store/sayLoveStore';
const talkstore =useLovestore()
async function getLove(){
  let { data: { hitokoto: title } } = await axios.get("https://v1.hitokoto.cn?c=k")
  let obj = { id: nanoid(), title }
  talkstore.talkList.unshift(obj)
}
talkstore.$subscribe((mutate,state)=>{
  console.log("talkstore里面的数据发生改变");
  localStorage.setItem("talkList",JSON.stringify(state.talkList))
})
</script>

<style>
#com{
  background-color: orange;
  height: 200px;
  padding: 10px;
}
button{
  width: 100px;
}
</style>