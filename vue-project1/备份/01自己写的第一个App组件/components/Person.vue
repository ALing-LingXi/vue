<template>
<div class="person">
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <button @click="changeName">改变名字</button>
  <button @click="changeAge">改变年龄</button>
  <button @click="checkTel">查看电话号码</button>
</div>
</template>

<script>
export default{
  name:"Person",
  setup(){
    //vue3弱化this,this是undefined
    let name ="林希"
    let age = 18
    let tel="18811998282"
    function changeName(){
      name="林希儿"//不是动态响应所以显示数据不会变
    }
    function changeAge(){
      age+=1
    }
    function checkTel(){
      alert(tel)
    }
    return {name,age,tel,changeName,changeAge,checkTel}
  }
}

</script>

<style>
.person{
  height: 500px;
  background-color: dodgerblue;
  box-shadow: 2px 2px ;
  color: tomato;
  }
</style>