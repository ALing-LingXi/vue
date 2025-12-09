<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
        <Category title="游戏列表">
          <div v-for="g in games" :key="g.id">{{ g.game }}</div>
        </Category>
        <Category >
         <template v-slot="s2">
           <div>
            <img :src="imgUrl" alt="">
          </div>
         </template>
        </Category>
        <Category title="今日影视">
          <video :src="videoUrl"></video>
        </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import { reactive, ref } from 'vue';
import Category from './Category.vue';
  let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
  let videoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')
  let games = reactive([
    {id:"1223",game:"怪盗阿尔蒂"},
    {id:"1224",game:"柠檬水工厂"},
    {id:"125",game:"吸血鬼天音"},
  ])
</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
  }
  img,video {
    width: 100%;
  }
</style>