<template>
  <div class="child2">
<h4>哥哥给弟弟的玩具{{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
import emitter from '@/utils/emitter';
import { onUnmounted, ref, } from 'vue';
let toy = ref("")
emitter.on("send-toy",(value:any)=>{
	toy.value=value
})
onUnmounted(()=>{
	emitter.off("send-toy")
})
</script>

<style scoped>
	.child2{
		margin-top: 50px;
		background-color: orange;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>