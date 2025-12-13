<!-- <template>
<div class="a">
  <h2>{{ person.name }}</h2>
  <h3>{{ person.age }}</h3>
  <h1>{{ title }}</h1>
</div>
</template>
<script setup name="test">
import { reactive } from 'vue';
import child from './child.vue';
import axios from 'axios';
let person = reactive({name:'xixi',age:19})
  let { data: { hitokoto: title } } = await axios.get("https://v1.hitokoto.cn?c=k")
</script>

<style>
  .a{
    background-color:skyblue;
    box-shadow: 0 0 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style> -->