<template>
	<div class="grand-child">
		<h3>{{ b }}</h3>
		<h3>{{ c }}</h3>
<button @click="add(6)">点我加6</button>
	</div>
</template>

<script setup lang="ts" name="GrandChild">
import { defineProps } from 'vue';
defineProps(["a","b","c","add"])
</script>

<style scoped>
	.grand-child{
		margin-top: 20px;
		background-color: orange;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>