<template>
<div>
 <h1> 你好，世界。</h1>
  <person/>
</div>
</template>

<script >
import Person from './components/Person.vue';
export default {
  name:"App",
  components:{Person}
  }
</script>

<style>
div{
  background-color: tomato;
  padding: 40px;
  box-shadow: 2px 4px 10%;
}
</style>