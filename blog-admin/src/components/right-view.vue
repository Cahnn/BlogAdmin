<template>
<div id="right">
    <div class="right-content-box" v-text="$route.name"></div>
    <div>
        <router-view/>
    </div>
</div>
</template>

<script>
    export default {
        name:'right',
        mounted() {
            // console.log(this.$route)
        }
    }
</script>

<style scoped>
    .right-content-box{
        font-size: 20px;
        padding-left: 15px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid rgba(84,92,100,0.5);
    }
</style>
