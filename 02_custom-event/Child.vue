<template>
  <div class="child">
		玩具{{ toy }}
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue';
import { defineEmits } from 'vue';
import { onMounted } from 'vue';
let toy = ref("小汽车")
let emit = defineEmits(['save-toy'])
onMounted(()=>{
	setTimeout(()=>{
		emit("save-toy",toy)
	},3000)
})

</script>

<style scoped>
	.child{
		margin-top: 10px;
		background-color: rgb(76, 209, 76);
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>