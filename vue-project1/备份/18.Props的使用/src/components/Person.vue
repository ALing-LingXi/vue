<template>
  <div class="person">
    <ul>
      <li v-for="person in list" :key="person.id">
        {{ person }}
      </li>
    </ul>
  </div>
</template>
<script setup name="Person1111" lang="ts">
//直接收list
// let x = defineProps(["a","list"])
import {type persons} from "@/Type.ts"
import { defineProps } from "vue";
import { withDefaults } from "vue";
//接收list限制类型
// let x = defineProps<{list:persons}>()
//接收list+限制类型+限制必要性+默认值
let x = withDefaults(defineProps<{list?:persons}>(),{
  list:()=>[{
    name:"xixi",
    age:18,
    id:"192992992"
  }]}
)
console.log(x);




</script>
<style>
.person {
  height: 500px;
  background-color: dodgerblue;
  box-shadow: 2px 2px;
  color: tomato;
}
</style>