<template>
    <ul class="news-list">
        <li>编号: {{ query.id }}</li>
        <li>标题: {{ query.title  }}</li>
        <li>内容: {{ query.content  }}</li>
    </ul>
</template>
<script setup lang="ts" name="About">
import { useRoute } from 'vue-router';
import { toRefs} from 'vue';
let route = useRoute()
console.log(route);
let {query} = toRefs(route)//响应式数据不能直接解构。要用toRefs
</script>
<style scoped>
.news-list {
    list-style: none;
    padding-left: 20px;
}

.news-list>li {
    line-height: 30px;
}
</style>