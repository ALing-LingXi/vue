<template>
<div class="box">
<div id="bs1"><RouterLink to="/login1">管理员</RouterLink></div>
<div id="bs2"><RouterLink to="/login2">客户</RouterLink></div>
<div id="bs3"><RouterLink to="/login3">维修人员</RouterLink></div>
<!-- <RouterView></RouterView> -->
<a href="#/login1">哈哈哈</a>
</div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<style>
.box{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;   
  gap: 20px;

  min-height: 100vh;         

  background-image: url("./Picture/123.png");
  background-size: cover;    
  background-position: center;
  background-repeat: no-repeat;
}

#bs1, #bs2, #bs3{
  width: 200px;        
  text-align: center;
}
#bs1{
  background-color: tomato;
}
#bs2{
  background-color: dodgerblue;
}
#bs3{
  background-color: yellowgreen;
}


</style>