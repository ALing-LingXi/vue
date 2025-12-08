<template>
  <div class="child1">
		<h4>哥哥的玩具{{ car }}</h4>
		<button @click="emitter.emit('send-toy',car)">发送</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
import { ref } from 'vue';
import emitter from '@/utils/emitter';
let car = ref("特斯拉")

</script>

<style scoped>
	.child1{
		margin-top: 50px;
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
	.child1 button{
		margin-right: 10px;
	}
</style>