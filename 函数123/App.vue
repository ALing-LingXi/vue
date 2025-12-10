<template>
<div>
  <h3>
    导航栏
    <RouterLink to="/homr"></RouterLink>
    <RouterLink to="/news"></RouterLink>
    <RouterLink to="title"></RouterLink>

  </h3>

</div>

<div>
  <RouterView>
  </RouterView>
</div>
</template>

<script>
import { RouterLink,RouterView} from 'vue-router';
</script>

<style>

</style>