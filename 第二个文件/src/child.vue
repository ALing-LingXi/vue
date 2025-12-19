<template>
  <div class="box2">
    <button @click="changName">点我改变名字</button>
    <br>
    姓<input type="text" v-model="firstName">
    名<input type="text" v-model="lastName">
    <br>
    全名{{ fullName }}
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
let firstName = ref("zhang")
let lastName = ref("san")
// let fullName = computed(()=>{
//   return firstName.value.slice(0,1).toUpperCase()+
//   firstName.value.slice(1)+lastName.value.slice(0,1).toUpperCase()+lastName.value.slice(1)
// })//只可以读取
let fullName = computed(
  {
    get() {
      return firstName.value.slice(0, 1).toUpperCase() +
        firstName.value.slice(1) + lastName.value.slice(0, 1).toUpperCase() + lastName.value.slice(1)
      //只可以读取
    },
    set(val) {
      const [str1,str2] = val.split("-")
      firstName.value=str1
      lastName.value=str2
    }
  }
)
function changName() {
  fullName.value = "li-si"
}
</script>

<style>
.box2 {
  background-color: skyblue;
  width: 400px;
  height: 400px;
  border: 1px white solid;
}
</style>