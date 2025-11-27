<template>
  <div class="news">
    <ul>
      <li v-for="news in newsList" :key="news.id"> 
<!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">
  {{ news.title }}     第一种写法--> 
   <RouterLink :to="{
    name:'neirong',
    query:{
      id:news.id,
      title:news.title,
      content:news.content
      //params不能传对象和数组
    }
   }">
  {{ news.title }}
</RouterLink>
     </li>
    </ul>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup name="News" lang="ts">
import { reactive } from 'vue';
import { RouterView,RouterLink } from 'vue-router';
let newsList = reactive([
{id:"112",title:"好消息，好消息",content:"明天放假"},
{id:"233",title:"一种牛逼的抗癌食物",content:"西兰花"},
{id:"455",title:"震惊,一个能蓄力三段的战技",content:"牛逼，卡利亚"},
{id:"567",title:"难道拉塔恩没死透？",content:"来幽影地哦，指定没你好果子吃！"}])
</script>
<style>
.news{
  background-color: tomato;
  width: 400px;
  height: 400px;
}
</style>