<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
        <Category title="游戏列表">
            <template v-slot:s2>
             <div v-for="g in games" :key="g.id">{{ g.game }}</div>
          </template>
          <template v-slot:s1>
              <div>
                <h2>游戏列表</h2>
              </div>
          </template>
        </Category>
        <Category>
          <template v-slot:s2>
            <div>
            <img :src="imgUrl" alt="">
          </div>
          </template>
          <template v-slot:s1>
              <div>
                <h2>今日美食</h2>
              </div>
          </template>
        </Category>
        <Category>
           <template #s2>
            <div>
           <video :src="videoUrl"></video>
          </div>
          </template>
          <template #s1>
              <div>
                <h2>今日影视</h2>
              </div>
          </template>
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
    h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
</style>