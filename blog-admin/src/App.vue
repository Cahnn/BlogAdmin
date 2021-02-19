<template>
  <div id="app">
<!--    <div id="header">顶部内容</div>-->
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name:'app',
        components:{
        }
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
body{
  background-color: aliceblue;
}

</style>
