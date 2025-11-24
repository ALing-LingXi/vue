<template>
  <div>

    <person a="唔嘿嘿"/>
    <!-- :list="person" -->
  </div>
</template>

<script setup name="App" lang="ts">
import Person from './components/Person.vue';
import { reactive } from 'vue';
import { type persons } from "@/Type.ts"

let person = reactive < persons > ([
  { name: "xixi", age: 19, id: "123" },
  { name: "yueye", age: 18, id: "456" },
  { name: "Aling", age: 17, id: "789" }])

</script>

<style>
div {
  background-color: tomato;
  padding: 40px;
  box-shadow: 2px 4px 10%;
}
</style>