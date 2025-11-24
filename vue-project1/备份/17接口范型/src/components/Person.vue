<template>
  <div class="person">

  </div>
</template>
<script setup name="Person1111" lang="ts">
import { type persontype,type persons } from "@/Type.ts"
let a: Array<persontype> = [
  {
    name: "xixi",
    age: 18,
    id: "wohehe"
  },
  {
    name: "xihe",
    age: 18,
    id: "wuhaha"
  }]
let b:persons = [ {
    name: "xixi",
    age: 18,
    id: "wohehe"
  },
  {
    name: "xihe",
    age: 18,
    id: "wuhaha"
  }]
</script>
<style>
.person {
  height: 500px;
  background-color: dodgerblue;
  box-shadow: 2px 2px;
  color: tomato;
}
</style>