<template>
  <div class="child1">
		玩具：{{ toy }}
		书:{{ book }}
		<button @click="eatHouse($parent)">败家子</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
import { ref } from 'vue';
import { defineExpose } from 'vue';
let toy = ref("手办")
let book = ref(5)
defineExpose({toy,book})
function eatHouse(parent:any){
	//reactive响应式数据
	parent.house-=1
}
</script>

<style scoped>
	.child1{
		margin-top: 20px;
		background-color: skyblue;
		padding: 20px;
		border-radius: 10px;
    box-shadow: 0 0 10px black;
	}
</style>
