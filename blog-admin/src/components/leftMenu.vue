<template>
    <div>
        <el-menu
                :default-active="$route.path"
                class="el-menu-vertical"
                :unique-opened="true"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
<!--            动态获取菜单列表-->

            <template v-for="(item,index) in menuList">
                <router-link :to="item.path" v-if="!item.children && !item.hidden" :key="index">
                    <el-menu-item :index="item.path">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                </router-link>
                <el-submenu v-if="item.children && !item.hidden" :index="item.path" :key="index">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <router-link  :to="subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex">
                        <el-menu-item :index="subItem.path" v-if="!subItem.hidden">
                            <i :class="subItem.icon"></i>
                            <span slot="title" v-text="subItem.name"></span>
                        </el-menu-item>
                    </router-link>

                </el-submenu>
            </template>
        </el-menu>
    </div>

</template>

<script>
    import { routes } from '../router';

    export default {
        name:'leftMenu',
        data(){
          return{
              menuList: []
          }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        mounted() {
            console.log(this.$route.path)
            let menuList = routes[0]
            this.menuList = menuList.children
        }

    }
</script>

<style scoped>
    .el-menu-vertical a{
        text-decoration: none;
    }
</style>
