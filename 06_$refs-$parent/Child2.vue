<template>
  <div class="child2">
		电脑类型:{{ computer }}
		书:{{ book }}
  </div>
</template>

<script setup lang="ts" name="Child2">
import { ref } from 'vue';
import { defineExpose } from 'vue';
let computer = ref("七彩虹")
let book = ref(8)
defineExpose({computer,book})
</script>

<style scoped>
	.child2{
		margin-top: 20px;
		background-color: orange;
		padding: 20px;
		border-radius: 10px;
    box-shadow: 0 0 10px black;
	}
</style>
