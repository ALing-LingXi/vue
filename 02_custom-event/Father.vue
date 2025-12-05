<template>
  <div class="father">
		<h2>父亲组件{{ car }}</h2>
		<h3>儿子给父亲的东西{{ toy }}</h3>
		<child @save-toy="sendToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
import { ref } from 'vue';
import Child from './Child.vue';
let car = ref("奥迪")
let toy = ref("")
function sendToy(value:string){
	toy.value=value
}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
	.father button{
		margin-right: 5px;
	}
</style>