<template>
    <div class="major">
        <el-container>
            <el-header id="admin-header-box">
                <header-top></header-top>
            </el-header>
                <el-container class="main-container">
                    <el-aside width="210px" id="left-menu-list-box">
                        <left-menu></left-menu>
                    </el-aside>
                    <el-main>
                        <div class="content">
                            <router-view></router-view>
                        </div>
                    </el-main>
                </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name:'baseView',
        // mounted() {
        //     // 动态设置侧边菜单栏的高度
        //     let leftMenuBox = document.getElementById("left-menu-list-box");
        //     let adminHeaderBox = document.getElementById("admin-header-box");
        //     let leftHeight = window.innerHeight - adminHeaderBox.offsetHeight
        //     if(leftMenuBox && adminHeaderBox){
        //         leftMenuBox.style.height = leftHeight + 'px'
        //     }
        // }
    }
</script>

<style scoped>
    .major{
        width: 89%;
        margin: 0 auto;
    }
    .el-header{
        background-color: #B3C0D1;
        line-height: 60px;
        height: 60px !important;
    }
    #left-menu-list-box{
        z-index: 2000;
    }
    .main-container{
        position: absolute;
        top: 60px;
        bottom: 0;
        width: 89%;
    }
    .el-aside {
        background-color: rgb(84,92,100);
        text-align: left;
    }
    .el-main{
        padding: 0;
        background-color: white;
    }
</style>
