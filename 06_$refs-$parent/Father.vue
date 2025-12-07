<template>
	<div class="father">
		汽车:{{ car }}
		房子:{{ house }}
		<child1 ref="c1"/>
		<child2 ref="c2"/>
<button @click="changeToy()">改变孩子1的玩具</button>
<button @click="changeComputer()">改变孩子2的电脑</button>
<button @click="getAllChild($refs)">多看看书</button>
	</div>
</template>

<script setup lang="ts" name="Father">
import {ref } from 'vue';
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
let car = ref("奥迪")
let house = ref(4)
let c1 = ref()
let c2 = ref()
function changeToy(){
	console.log(c1);
	
c1.value.toy="飞机"	
}
function changeComputer(){
c2.value.computer="外星人"

}
function getAllChild(refs:any){
	//reactive响应式数据
	console.log(refs);
	refs.c1.book+=2
	for (const key in refs) {
		refs[key].book+=2
	}
}
defineExpose({house})
</script>

<style scoped>
	.father {
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}

	.father button {
		margin-bottom: 10px;
		margin-left: 10px;
	}
</style>

