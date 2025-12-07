<template>
  <div class="father">
		<Child v-bind="{a,b,c,add:addNumber}"/>
		<h3>{{ a }}</h3>
  </div>
</template>

<script setup lang="ts" name="Father">
import { ref } from 'vue';
import Child from './Child.vue';
let a =ref(1)
let b =ref(2)
let c =ref(3)
function	addNumber(value:number){
	a.value+=value
}
</script>

<style scoped>
	.father{
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>
