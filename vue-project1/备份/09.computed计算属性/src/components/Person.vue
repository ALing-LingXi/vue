<template>
<div class="person">
姓: <input type="text" v-model="fistName">
名: <input type="text" v-model="lastName">
全名: <input type="text" v-model="fullName"></div>
<button @click="changeName">改名</button>
</template>
<script setup name="Person1111">
import { ref ,reactive,computed} from 'vue'
  let fistName=ref('linxi')
  let lastName=ref('er')
  // computed 只可读
  let fullName = computed(
  {
    get(){
       return fistName.value.slice(0,1).toUpperCase()+fistName.value.slice(1)+"-"+lastName.value
    },
    set(val){
      const [n1,n2] = val.split("-")
      fistName.value=n1
      lastName.value=n2
    }
  }
  )
  function changeName(){
    return fullName.value="xixi-haha"
  }
</script>
<style>
.person {
  height: 500px;
  background-color: dodgerblue;
  box-shadow: 2px 2px;
  color: tomato;
}
</style>