<template>
  <div class="app">
    <h2 class="title">Vue路由测试</h2>
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink replace to="/home" active-class="active">首页</RouterLink>
      <RouterLink :to="{name:'guanyu'}" active-class="active">导航区</RouterLink>
      <RouterLink :to="{path:'/news'}" active-class="active">新闻</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup name="App123" lang="js">
import { RouterView,RouterLink } from 'vue-router';

</script>


<style>
/* App */
.title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
}

/* 导航区样式优化 */
.navigate {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
}

.navigate a {
    text-decoration: none;
    color: #333;
    padding: 8px 16px;
    border: 1px solid #ddd;
    border-radius: 6px;
    transition: all 0.3s ease;
    background: #fafafa;
}

/* 悬停效果 */
.navigate a:hover {
    background-color: #e8f7f0;
    border-color: #42b883;
    color: #42b883;
}

/* 激活状态（你后续用路由时会自动加 .active） */
.navigate a.active {
    background-color: #42b883;
    color: white;
    border-color: #42b883;
    box-shadow: 0 2px 6px rgba(66, 184, 131, 0.4);
}

/* 展示区增加淡入动画 */
.main-content {
    padding: 20px;
    border: 1px solid yellowgreen;
    border-radius: 8px;
    margin: 0 auto;
    max-width: 800px;
    min-height: 300px;
    background: dodgerblue;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);

    animation: fadeIn 0.4s ease;
}

/* 淡入动画关键帧 */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(8px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

</style>
