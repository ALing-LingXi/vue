<template>
  <div>

    <Person a="唔嘿嘿" v-if="condition"/>
    <!-- :list="person" -->
  </div>
</template>

<script setup name="App" lang="ts">
import Person from './components/Person.vue';
import { ref } from 'vue';

let condition = ref(true)

</script>

<style>
div {
  background-color: tomato;
  padding: 40px;
  box-shadow: 2px 4px 10%;
}
</style>